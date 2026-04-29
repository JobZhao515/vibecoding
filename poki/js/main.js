// ===== Game Data =====
const CATEGORIES = [
  { id: 'all',       emoji: '🏠', name: '全部游戏' },
  { id: 'casual',    emoji: '🎮', name: '休闲经典' },
  { id: 'versus',    emoji: '👥', name: '双人对战' },
  { id: 'action',    emoji: '🏃', name: '动作跑酷' },
  { id: 'creative',  emoji: '✏️', name: '脑洞创意' },
  { id: 'match',     emoji: '🧩', name: '消除合成' },
  { id: 'strategy',  emoji: '♟️', name: '棋牌策略' },
  { id: 'relax',     emoji: '😌', name: '解压放松' },
];

const GAMES = [
  { id: 'flightsim',  name: '飞行模拟器', cat: 'action',   emoji: '✈️', colors: ['#0ea5e9','#1d4ed8'], url: 'games/flight-sim.html' },
  // 🎮 休闲经典
  { id: 'snake',      name: '贪吃蛇',     cat: 'casual',   emoji: '🐍', colors: ['#22c55e','#16a34a'], url: 'games/snake.html' },
  { id: 'tetris',     name: '俄罗斯方块', cat: 'casual',   emoji: '🧱', colors: ['#f59e0b','#d97706'], url: 'games/tetris.html' },
  { id: 'watermelon', name: '合成大西瓜', cat: 'casual',   emoji: '🍉', colors: ['#ef4444','#dc2626'], url: 'games/watermelon.html' },
  { id: 'fruitninja', name: '切水果',     cat: 'casual',   emoji: '🔪', colors: ['#f97316','#ea580c'], url: 'games/fruit-ninja.html' },
  { id: 'breakout',   name: '打砖块',     cat: 'casual',   emoji: '🧱', colors: ['#8b5cf6','#7c3aed'], url: 'games/breakout.html' },
  { id: 'minesweeper',name: '扫雷',       cat: 'casual',   emoji: '💣', colors: ['#6b7280','#4b5563'], url: 'games/minesweeper.html' },
  { id: '2048',       name: '2048',       cat: 'casual',   emoji: '🔢', colors: ['#eab308','#ca8a04'], url: 'games/2048.html' },
  // 👥 双人对战
  { id: 'gomoku2p',   name: '双人五子棋', cat: 'versus',   emoji: '⚫', colors: ['#6366f1','#4f46e5'], url: 'games/gomoku-2p.html' },
  { id: 'pong',       name: '双人乒乓',   cat: 'versus',   emoji: '🏓', colors: ['#ec4899','#db2777'], url: 'games/pong.html' },
  { id: 'tank2p',     name: '双人坦克',   cat: 'versus',   emoji: '🔫', colors: ['#84cc16','#65a30d'], url: 'games/tank-2p.html' },
  { id: 'race2p',     name: '双人赛车',   cat: 'versus',   emoji: '🏎️', colors: ['#ef4444','#dc2626'], url: 'games/race-2p.html' },
  { id: 'air2p',      name: '双人空战',   cat: 'versus',   emoji: '✈️', colors: ['#0ea5e9','#0284c7'], url: 'games/air-2p.html' },
  { id: 'breakout2p', name: '双人砖块',   cat: 'versus',   emoji: '🧱', colors: ['#a855f7','#9333ea'], url: 'games/breakout-2p.html' },
  { id: 'sumo2p',     name: '双人相扑',   cat: 'versus',   emoji: '🤼', colors: ['#f59e0b','#d97706'], url: 'games/sumo-2p.html' },
  // 🏃 动作跑酷
  { id: 'runner',     name: '简易跑酷',   cat: 'action',   emoji: '🏃', colors: ['#f97316','#ea580c'], url: 'games/runner.html' },
  { id: 'jump',       name: '跳跃大师',   cat: 'action',   emoji: '⬆️', colors: ['#14b8a6','#0d9488'], url: 'games/jump-master.html' },
  { id: 'flappy',     name: '飞翔小鸟',   cat: 'action',   emoji: '🐦', colors: ['#38bdf8','#0ea5e9'], url: 'games/flappy.html' },
  { id: 'space',      name: '太空射击',   cat: 'action',   emoji: '🚀', colors: ['#1e3a5f','#0f172a'], url: 'games/space-shooter.html' },
  { id: 'stickman',   name: '火柴人快跑', cat: 'action',   emoji: '🏃‍♂️', colors: ['#f43f5e','#e11d48'], url: 'games/stickman.html' },
  { id: 'ninja',      name: '忍者跳跃',   cat: 'action',   emoji: '🥷', colors: ['#1e293b','#0f172a'], url: 'games/ninja-jump.html' },
  { id: 'dodge',      name: '障碍闯关',   cat: 'action',   emoji: '⚡', colors: ['#fbbf24','#f59e0b'], url: 'games/dodge.html' },
  // ✏️ 脑洞创意
  { id: 'draw',       name: '画线救人',   cat: 'creative', emoji: '✏️', colors: ['#a855f7','#9333ea'], url: 'games/draw-rescue.html' },
  { id: 'puzzle',     name: '创意解谜',   cat: 'creative', emoji: '🧠', colors: ['#e879f9','#c026d3'], url: 'games/puzzle.html' },
  { id: 'physics',    name: '物理弹球',   cat: 'creative', emoji: '⚙️', colors: ['#64748b','#475569'], url: 'games/physics.html' },
  { id: 'maze',       name: '重力迷宫',   cat: 'creative', emoji: '🌀', colors: ['#06b6d4','#0891b2'], url: 'games/maze.html' },
  { id: 'bridge',     name: '搭桥过河',   cat: 'creative', emoji: '🌉', colors: ['#84cc16','#65a30d'], url: 'games/bridge.html' },
  { id: 'tower',      name: '叠叠高',     cat: 'creative', emoji: '🏗️', colors: ['#f97316','#ea580c'], url: 'games/tower.html' },
  { id: 'memory',     name: '记忆翻牌',   cat: 'creative', emoji: '🃏', colors: ['#ec4899','#db2777'], url: 'games/memory.html' },
  // 🧩 消除合成
  { id: 'match3',     name: '经典三消',   cat: 'match',    emoji: '💎', colors: ['#3b82f6','#2563eb'], url: 'games/match3.html' },
  { id: 'bubble',     name: '泡泡消除',   cat: 'match',    emoji: '🫧', colors: ['#06b6d4','#0891b2'], url: 'games/bubble-pop.html' },
  { id: 'link',       name: '连连看',     cat: 'match',    emoji: '🔗', colors: ['#22c55e','#16a34a'], url: 'games/link.html' },
  { id: 'fruitmerge', name: '水果合成',   cat: 'match',    emoji: '🍊', colors: ['#f97316','#ea580c'], url: 'games/fruit-merge.html' },
  { id: 'blockblast', name: '方块消除',   cat: 'match',    emoji: '🟦', colors: ['#6366f1','#4f46e5'], url: 'games/block-blast.html' },
  { id: 'colorpop',   name: '颜色消除',   cat: 'match',    emoji: '🎨', colors: ['#f43f5e','#e11d48'], url: 'games/color-pop.html' },
  { id: 'nummerge',   name: '数字合成',   cat: 'match',    emoji: '🔟', colors: ['#eab308','#ca8a04'], url: 'games/number-merge.html' },
  // ♟️ 棋牌策略
  { id: 'gomoku',     name: '五子棋',     cat: 'strategy', emoji: '⚪', colors: ['#64748b','#475569'], url: 'games/gomoku.html' },
  { id: 'tictactoe',  name: '井字棋',     cat: 'strategy', emoji: '❌', colors: ['#78716c','#57534e'], url: 'games/tic-tac-toe.html' },
  { id: 'reversi',    name: '黑白棋',     cat: 'strategy', emoji: '⚫', colors: ['#22c55e','#16a34a'], url: 'games/reversi.html' },
  { id: 'connect4',   name: '四子棋',     cat: 'strategy', emoji: '🔴', colors: ['#ef4444','#dc2626'], url: 'games/connect4.html' },
  { id: 'sudoku',     name: '数独',       cat: 'strategy', emoji: '9️⃣', colors: ['#3b82f6','#2563eb'], url: 'games/sudoku.html' },
  { id: 'chess',      name: '简易象棋',   cat: 'strategy', emoji: '♟️', colors: ['#92400e','#78350f'], url: 'games/chess.html' },
  { id: 'klotski',    name: '华容道',     cat: 'strategy', emoji: '🀄', colors: ['#dc2626','#b91c1c'], url: 'games/klotski.html' },
  // 😌 解压放松
  { id: 'squeeze',    name: '捏捏乐',     cat: 'relax',    emoji: '🫠', colors: ['#fb923c','#f97316'], url: 'games/squeeze.html' },
  { id: 'idle',       name: '佛系放置',   cat: 'relax',    emoji: '🌿', colors: ['#4ade80','#22c55e'], url: 'games/idle.html' },
  { id: 'slice',      name: '解压切割',   cat: 'relax',    emoji: '🔪', colors: ['#f472b6','#ec4899'], url: 'games/slice.html' },
  { id: 'sand',       name: '沙子画',     cat: 'relax',    emoji: '⏳', colors: ['#fbbf24','#f59e0b'], url: 'games/sand.html' },
  { id: 'zen',        name: '禅意画圆',   cat: 'relax',    emoji: '☯️', colors: ['#a78bfa','#8b5cf6'], url: 'games/zen.html' },
  { id: 'bouncy',     name: '弹力球',     cat: 'relax',    emoji: '🏀', colors: ['#f97316','#ea580c'], url: 'games/bouncy.html' },
  { id: 'colormix',   name: '颜色混合',   cat: 'relax',    emoji: '🎨', colors: ['#e879f9','#c026d3'], url: 'games/color-mix.html' },
];

// ===== State =====
let currentCat = 'all';
let searchQuery = '';

// ===== DOM =====
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function init() {
  renderSidebar();
  renderGames();
  bindEvents();
}

function renderSidebar() {
  const list = $('.cat-list');
  list.innerHTML = CATEGORIES.map(c => {
    const count = c.id === 'all' ? GAMES.length : GAMES.filter(g => g.cat === c.id).length;
    return `<li>
      <a href="#" data-cat="${c.id}" class="${c.id === currentCat ? 'active' : ''}">
        <span class="emoji">${c.emoji}</span>
        <span>${c.name}</span>
        <span class="cat-count">${count}</span>
      </a>
    </li>`;
  }).join('');
}

function getFilteredGames() {
  return GAMES.filter(g => {
    const catOk = currentCat === 'all' || g.cat === currentCat;
    const searchOk = !searchQuery || g.name.toLowerCase().includes(searchQuery.toLowerCase());
    return catOk && searchOk;
  });
}

function renderGames() {
  const games = getFilteredGames();
  const grid = $('.game-grid');
  const title = $('.section-title');
  const catInfo = CATEGORIES.find(c => c.id === currentCat);

  title.innerHTML = `${catInfo.emoji} ${catInfo.name} <span class="count">${games.length} 款游戏</span>`;

  if (games.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1"><div class="emoji">😢</div><div>没有找到匹配的游戏</div></div>`;
    return;
  }

  grid.innerHTML = games.map(g => `
    <a class="game-card" href="${g.url}" data-id="${g.id}">
      <div class="thumb">
        <div class="thumb-bg" style="background:linear-gradient(135deg,${g.colors[0]},${g.colors[1]})"></div>
        <span class="thumb-emoji">${g.emoji}</span>
      </div>
      <div class="info">
        <div class="game-name">${g.name}</div>
        <div class="game-cat">${CATEGORIES.find(c => c.id === g.cat)?.name || ''}</div>
      </div>
      <div class="play-btn">▶ 开始游戏</div>
    </a>
  `).join('');
}

function bindEvents() {
  // Category click
  $('.cat-list').addEventListener('click', e => {
    const a = e.target.closest('a[data-cat]');
    if (!a) return;
    e.preventDefault();
    currentCat = a.dataset.cat;
    $$('.cat-list a').forEach(el => el.classList.remove('active'));
    a.classList.add('active');
    renderGames();
    // Close mobile sidebar
    $('.sidebar').classList.remove('open');
    $('.sidebar-overlay').classList.remove('open');
  });

  // Search
  $('#search').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderGames();
  });

  // Mobile menu
  $('.menu-btn').addEventListener('click', () => {
    $('.sidebar').classList.toggle('open');
    $('.sidebar-overlay').classList.toggle('open');
  });
  $('.sidebar-overlay').addEventListener('click', () => {
    $('.sidebar').classList.remove('open');
    $('.sidebar-overlay').classList.remove('open');
  });
}

document.addEventListener('DOMContentLoaded', init);
