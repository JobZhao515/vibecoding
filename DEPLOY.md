# One-Click Deploy Guide

This guide sets up one-click deployment for:

- https://agi4u.cn/ -> portal
- https://agi4u.cn/tools/ -> tools
- https://agi4u.cn/poki/ -> poki

## 1. Prepare server once

Install software on ECS (Ubuntu):

    sudo apt update
    sudo apt install -y nginx rsync openssh-client

Create deploy directories:

    sudo mkdir -p /srv/releases/vibecoding
    sudo mkdir -p /srv/www

## 2. Configure Nginx once

Use this server block (adjust certificate paths to your own):

    server {
        listen 80;
        listen [::]:80;
        server_name agi4u.cn www.agi4u.cn;

        root /srv/www/portal;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location = /tools {
            return 301 /tools/;
        }

        location ^~ /tools/ {
            alias /srv/www/tools/;
            index index.html;
            try_files $uri $uri/ /index.html;
        }

        location = /poki {
            return 301 /poki/;
        }

        location ^~ /poki/ {
            alias /srv/www/poki/;
            index index.html;
            try_files $uri $uri/ /index.html;
        }

        # Future backend entry
        # location /api/ {
        #     proxy_pass http://127.0.0.1:3000/;
        #     proxy_http_version 1.1;
        #     proxy_set_header Host $host;
        #     proxy_set_header X-Real-IP $remote_addr;
        #     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        #     proxy_set_header X-Forwarded-Proto $scheme;
        # }
    }

After updating Nginx:

    sudo nginx -t
    sudo systemctl reload nginx

## 3. Configure local deploy env once

In project root:

    cp deploy/deploy.env.example deploy/deploy.env

Then edit deploy/deploy.env:

- SERVER_HOST, SERVER_USER, SSH_KEY_PATH
- REMOTE paths if needed
- REMOTE_SUDO_CMD (use sudo or none)

## 4. Run one-click deploy

Make script executable once:

    chmod +x deploy/oneclick.sh

Deploy:

    ./deploy/oneclick.sh

Optional:

    ./deploy/oneclick.sh --skip-nginx-reload

## 5. What the script does

1. Package local portal/tools/poki into one tar.gz
2. Upload package to ECS via scp
3. Extract package to /srv/releases/vibecoding/<release_id>
4. Atomic symlink switch:
   - /srv/www/portal -> new release portal
   - /srv/www/tools  -> new release tools
   - /srv/www/poki   -> new release poki
5. Test and reload nginx (unless skipped)
6. Keep only latest KEEP_RELEASES versions

This gives fast deploy and easy rollback foundation for future backend service deployment.
