#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DEFAULT_ENV_FILE="$SCRIPT_DIR/deploy.env"

usage() {
  cat <<'USAGE'
Usage:
  deploy/oneclick.sh [--env deploy/deploy.env] [--skip-nginx-reload]

Description:
  1) Package portal/tools/poki from local workspace
  2) Upload package to server via scp
  3) Extract into a timestamped release directory
  4) Atomically switch symlinks for portal/tools/poki
  5) Optionally test and reload nginx
USAGE
}

ENV_FILE="$DEFAULT_ENV_FILE"
SKIP_NGINX_RELOAD="false"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --env)
      ENV_FILE="$2"
      shift 2
      ;;
    --skip-nginx-reload)
      SKIP_NGINX_RELOAD="true"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1"
      usage
      exit 1
      ;;
  esac
done

if [[ ! -f "$ENV_FILE" ]]; then
  cat <<EOF
Missing env file: $ENV_FILE

Create it from template:
  cp deploy/deploy.env.example deploy/deploy.env
Then edit values and run again.
EOF
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"

required_vars=(
  SERVER_HOST
  SERVER_USER
  SERVER_PORT
  REMOTE_TMP_DIR
  REMOTE_RELEASES_DIR
  REMOTE_WEB_ROOT
  KEEP_RELEASES
  SSH_KEY_PATH
)

for v in "${required_vars[@]}"; do
  if [[ -z "${!v:-}" ]]; then
    echo "Missing required variable in env file: $v"
    exit 1
  fi
done

if [[ ! -f "$SSH_KEY_PATH" ]]; then
  echo "SSH key file does not exist: $SSH_KEY_PATH"
  exit 1
fi

if git -C "$PROJECT_ROOT" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  GIT_SHA="$(git -C "$PROJECT_ROOT" rev-parse --short HEAD)"
else
  GIT_SHA="nogit"
fi

RELEASE_ID="$(date +%Y%m%d%H%M%S)-$GIT_SHA"
LOCAL_WORK_DIR="$PROJECT_ROOT/.deploy/$RELEASE_ID"
LOCAL_BUNDLE_DIR="$LOCAL_WORK_DIR/bundle"
LOCAL_PACKAGE="$LOCAL_WORK_DIR/vibecoding-$RELEASE_ID.tar.gz"
REMOTE_PACKAGE_NAME="vibecoding-$RELEASE_ID.tar.gz"
REMOTE_PACKAGE_PATH="$REMOTE_TMP_DIR/$REMOTE_PACKAGE_NAME"

mkdir -p "$LOCAL_BUNDLE_DIR"

echo "[1/5] Packaging local files..."
rsync -a --delete "$PROJECT_ROOT/portal/" "$LOCAL_BUNDLE_DIR/portal/"
rsync -a --delete "$PROJECT_ROOT/tools/" "$LOCAL_BUNDLE_DIR/tools/"
rsync -a --delete "$PROJECT_ROOT/poki/" "$LOCAL_BUNDLE_DIR/poki/"

tar -C "$LOCAL_BUNDLE_DIR" -czf "$LOCAL_PACKAGE" .

echo "[2/5] Uploading package to server..."
scp -i "$SSH_KEY_PATH" -P "$SERVER_PORT" "$LOCAL_PACKAGE" "$SERVER_USER@$SERVER_HOST:$REMOTE_PACKAGE_PATH"

if [[ "$SKIP_NGINX_RELOAD" == "true" ]]; then
  REMOTE_RELOAD_NGINX="false"
else
  REMOTE_RELOAD_NGINX="true"
fi

REMOTE_SUDO_CMD="${REMOTE_SUDO_CMD:-sudo}"

echo "[3/5] Deploying on remote server..."
ssh -i "$SSH_KEY_PATH" -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "bash -s" -- \
  "$REMOTE_RELEASES_DIR" \
  "$REMOTE_WEB_ROOT" \
  "$REMOTE_TMP_DIR" \
  "$REMOTE_PACKAGE_NAME" \
  "$RELEASE_ID" \
  "$KEEP_RELEASES" \
  "$REMOTE_SUDO_CMD" \
  "$REMOTE_RELOAD_NGINX" <<'REMOTE_SCRIPT'
set -euo pipefail

REMOTE_RELEASES_DIR="$1"
REMOTE_WEB_ROOT="$2"
REMOTE_TMP_DIR="$3"
REMOTE_PACKAGE_NAME="$4"
RELEASE_ID="$5"
KEEP_RELEASES="$6"
REMOTE_SUDO_CMD="$7"
REMOTE_RELOAD_NGINX="$8"

run_cmd() {
  if [[ "$REMOTE_SUDO_CMD" == "none" ]]; then
    "$@"
  else
    "$REMOTE_SUDO_CMD" "$@"
  fi
}

PKG_PATH="$REMOTE_TMP_DIR/$REMOTE_PACKAGE_NAME"
REL_DIR="$REMOTE_RELEASES_DIR/$RELEASE_ID"

run_cmd mkdir -p "$REL_DIR"
run_cmd mkdir -p "$REMOTE_WEB_ROOT"
run_cmd tar -xzf "$PKG_PATH" -C "$REL_DIR"

run_cmd ln -sfn "$REL_DIR/portal" "$REMOTE_WEB_ROOT/portal"
run_cmd ln -sfn "$REL_DIR/tools" "$REMOTE_WEB_ROOT/tools"
run_cmd ln -sfn "$REL_DIR/poki" "$REMOTE_WEB_ROOT/poki"

if [[ "$REMOTE_RELOAD_NGINX" == "true" ]]; then
  if run_cmd nginx -t; then
    run_cmd systemctl reload nginx
  fi
fi

run_cmd rm -f "$PKG_PATH"

if [[ "$KEEP_RELEASES" =~ ^[0-9]+$ ]] && [[ "$KEEP_RELEASES" -gt 0 ]]; then
  mapfile -t release_dirs < <(ls -1dt "$REMOTE_RELEASES_DIR"/* 2>/dev/null || true)
  if [[ "${#release_dirs[@]}" -gt "$KEEP_RELEASES" ]]; then
    for old_dir in "${release_dirs[@]:$KEEP_RELEASES}"; do
      run_cmd rm -rf "$old_dir"
    done
  fi
fi
REMOTE_SCRIPT

echo "[4/5] Remote deployment complete."

echo "[5/5] Local cleanup and summary..."
echo "Release ID: $RELEASE_ID"
echo "Package: $LOCAL_PACKAGE"
echo "Done."
