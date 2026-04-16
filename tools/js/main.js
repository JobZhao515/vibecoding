// ===== 分类数据 =====
const CATEGORIES = [
  { id: 'all', emoji: '⭐', name: '全部工具' },
  { id: 'text', emoji: '📝', name: '文本处理' },
  { id: 'image', emoji: '🖼️', name: '图片工具' },
  { id: 'pdf', emoji: '📄', name: 'PDF工具' },
  { id: 'office', emoji: '📊', name: '办公辅助' },
  { id: 'audio', emoji: '🎵', name: '音频工具' },
  { id: 'calc', emoji: '🔢', name: '计算工具' },
  { id: 'security', emoji: '🔒', name: '安全工具' },
  { id: 'network', emoji: '🌐', name: '网络工具' },
  { id: 'study', emoji: '📚', name: '学习工具' },
  { id: 'dev', emoji: '⚙️', name: '编程辅助' },
  { id: 'creative', emoji: '🎨', name: '创意工具' },
  { id: 'life', emoji: '📞', name: '生活查询' },
];

// ===== 工具数据 =====
const TOOLS = [
  // ===== 文本处理 =====
  { id: 'text-diff', cat: 'text', name: '文本对比', emoji: '📋', desc: '对比两段文本的差异，标注新增、删除、修改部分', url: 'pages/text/text-diff.html', badge: '' },
  { id: 'word-count', cat: 'text', name: '字数统计', emoji: '🔤', desc: '实时统计文本字数、字符数、单词数、句子数', url: 'pages/text/word-count.html', badge: '' },
  { id: 'text-speech', cat: 'text', name: '文本转语音', emoji: '🔊', desc: '文本转换为高质量语音，可调节语速和语调', url: 'pages/text/text-to-speech.html', badge: '' },
  { id: 'text-dedup', cat: 'text', name: '文本去重', emoji: '✂️', desc: '自动识别并删除重复行、重复段落', url: 'pages/text/text-dedup.html', badge: '' },
  { id: 'text-convert', cat: 'text', name: '简繁体转换', emoji: '🔄', desc: '简体中文与繁体中文双向互转', url: 'pages/text/simple-traditional.html', badge: '' },
  { id: 'text-hidden', cat: 'text', name: '文字隐写', emoji: '🙈', desc: '将敏感信息隐藏在普通文本中，支持密钥', url: '', badge: 'coming' },
  { id: 'text-emoticon', cat: 'text', name: '文本颜艺', emoji: '(´∀｀)♡', desc: '海量可爱颜文字库，支持点击复制', url: '', badge: 'coming' },
  { id: 'text-mars', cat: 'text', name: '火星文翻译', emoji: '🚀', desc: '普通文本与火星文双向转换', url: '', badge: 'coming' },
  { id: 'text-explain', cat: 'text', name: '词语注解', emoji: '📖', desc: '快速获取拼音、词性、注解及例句', url: '', badge: 'coming' },
  { id: 'text-pinyin', cat: 'text', name: '文字转拼音', emoji: '📝', desc: '中文文本转换为带声调的拼音', url: 'pages/study/pinyin.html', badge: '' },

  // ===== 图片工具 =====
  { id: 'img-compress', cat: 'image', name: '图片压缩', emoji: '📦', desc: '支持JPG、PNG、WebP格式，智能压缩保清晰', url: 'pages/image/image-compress.html', badge: 'hot' },
  { id: 'img-format', cat: 'image', name: '图片格式转换', emoji: '🔁', desc: 'JPG/PNG/WebP/BMP格式互转，无水印', url: 'pages/image/image-format.html', badge: '' },
  { id: 'img-watermark', cat: 'image', name: '图片加水印', emoji: '💧', desc: '支持文字和图片水印，调整位置和透明度', url: 'pages/image/image-watermark.html', badge: '' },
  { id: 'img-grayscale', cat: 'image', name: '图片黑白化', emoji: '⚫', desc: '去除色彩生成黑白效果，适配艺术创作', url: 'pages/image/image-grayscale.html', badge: '' },
  { id: 'img-pixel', cat: 'image', name: '图片像素化', emoji: '🎮', desc: '调节像素密度生成复古游戏风效果', url: 'pages/image/image-pixel.html', badge: '' },
  { id: 'img-editor', cat: 'image', name: '图片编辑器', emoji: '✏️', desc: '裁剪、旋转、翻转、添加文字、滤镜', url: '', badge: 'coming' },
  { id: 'img-repair', cat: 'image', name: '图片修复', emoji: '✨', desc: '修复老化、模糊照片，还原高清画质', url: '', badge: 'coming' },
  { id: 'img-segment', cat: 'image', name: '人像分割', emoji: '👤', desc: '自动识别人像并分割，生成透明背景', url: '', badge: 'coming' },
  { id: 'img-denoise', cat: 'image', name: '图片去摩尔纹', emoji: '🌊', desc: '去除摩尔纹并提升图片质量', url: '', badge: 'coming' },
  { id: 'img-ascii', cat: 'image', name: '图片转字符画', emoji: '🎨', desc: '转换为字符组成的艺术作品', url: '', badge: 'coming' },

  // ===== PDF工具 =====
  { id: 'pdf-merge', cat: 'pdf', name: 'PDF合并', emoji: '📎', desc: '上传多个PDF，合并为一个完整PDF', url: 'pages/pdf/pdf-merge.html', badge: 'hot' },
  { id: 'pdf-split', cat: 'pdf', name: 'PDF拆分', emoji: '📌', desc: '提取指定页面生成新PDF，无页数限制', url: 'pages/pdf/pdf-split.html', badge: 'hot' },
  { id: 'pdf-to-image', cat: 'pdf', name: 'PDF转图片', emoji: '🖼️', desc: '逐页转换为图片或连续长图', url: 'pages/pdf/pdf-to-image.html', badge: '' },
  { id: 'pdf-to-word', cat: 'pdf', name: 'PDF转Word', emoji: '📄', desc: '转换为可编辑Word文档，保留排版', url: '', badge: 'coming' },
  { id: 'pdf-to-excel', cat: 'pdf', name: 'PDF转Excel', emoji: '📊', desc: '自动识别表格内容，转为可编辑表格', url: '', badge: 'coming' },
  { id: 'pdf-to-ppt', cat: 'pdf', name: 'PDF转PPT', emoji: '📽️', desc: '转换为PowerPoint演示文稿', url: '', badge: 'coming' },

  // ===== 办公辅助 =====
  { id: 'qrcode-gen', cat: 'office', name: '二维码生成', emoji: '📲', desc: '文本、URL、联系方式生成二维码', url: 'pages/office/qrcode-gen.html', badge: 'hot' },
  { id: 'markdown', cat: 'office', name: 'Markdown编辑器', emoji: '📝', desc: 'Markdown语法编辑，实时预览排版效果', url: 'pages/office/markdown-editor.html', badge: '' },
  { id: 'screen-record', cat: 'office', name: '在线录屏', emoji: '🎥', desc: '录制浏览器标签页、窗口或整个屏幕', url: 'pages/office/screen-record.html', badge: '' },
  { id: 'mindmap', cat: 'office', name: '便捷思维导图', emoji: '🗺️', desc: '快速创建、编辑、导出思维导图', url: '', badge: 'coming' },
  { id: 'font-sheet', cat: 'office', name: '字帖生成', emoji: '✍️', desc: '生成个性化练字字帖，支持下载打印', url: '', badge: 'coming' },
  { id: 'excel-convert', cat: 'office', name: 'Excel格式转换', emoji: '📈', desc: 'Excel与其他格式互转', url: '', badge: 'coming' },

  // ===== 音频工具 =====
  { id: 'xiaoyuzhou-download', cat: 'audio', name: '小宇宙下载', emoji: '🎙️', desc: '粘贴小宇宙链接，下载音频文件并支持转文本', url: 'pages/audio/xiaoyuzhou-download.html', badge: 'new' },

  // ===== 计算工具 =====
  { id: 'calculator', cat: 'calc', name: '计算器', emoji: '🧮', desc: '支持加减乘除、开方、指数、三角函数', url: 'pages/calc/calculator.html', badge: '' },
  { id: 'bmi', cat: 'calc', name: 'BMI计算', emoji: '⚖️', desc: '输入身高体重，计算BMI及体重范围', url: 'pages/calc/bmi.html', badge: '' },
  { id: 'mortgage', cat: 'calc', name: '房贷计算', emoji: '🏠', desc: '计算月供、总利息，支持等额本息和本金', url: 'pages/calc/mortgage.html', badge: '' },
  { id: 'calorie', cat: 'calc', name: '卡路里查询', emoji: '🍎', desc: '查询各类食物卡路里含量', url: '', badge: 'coming' },
  { id: 'invest', cat: 'calc', name: '投资收益计算', emoji: '💰', desc: '计算投资总收益和年化收益', url: '', badge: 'coming' },
  { id: 'insurance', cat: 'calc', name: '五险一金计算', emoji: '🛡️', desc: '计算个人与单位缴费金额', url: '', badge: 'coming' },

  // ===== 安全工具 =====
  { id: 'password-check', cat: 'security', name: '密码安全检测', emoji: '🔐', desc: '评估密码强度，提供改进建议', url: 'pages/security/password-check.html', badge: '' },
  { id: 'password-gen', cat: 'security', name: '随机密码生成', emoji: '🔑', desc: '根据长度和字符类型生成高强度密码', url: 'pages/security/password-gen.html', badge: '' },
  { id: 'base64', cat: 'security', name: 'Base64编码', emoji: '🔤', desc: '二进制数据与Base64编码双向转换', url: 'pages/security/base64.html', badge: '' },
  { id: 'md5', cat: 'security', name: 'MD5加密', emoji: '🔒', desc: '生成MD5加密串，适用密码和文件校验', url: '', badge: 'coming' },
  { id: 'file-scan', cat: 'security', name: '文件安全检测', emoji: '🛡️', desc: '深度检测文件潜在威胁', url: '', badge: 'coming' },
  { id: 'crypto', cat: 'security', name: '在线加解密', emoji: '🔐', desc: '支持多种加密算法，生成哈希值和签名', url: '', badge: 'coming' },

  // ===== 网络工具 =====
  { id: 'url-encode', cat: 'network', name: 'URL编解码', emoji: '🔗', desc: '普通文本与URL编码双向转换', url: 'pages/network/url-encode.html', badge: '' },
  { id: 'url-parse', cat: 'network', name: 'URL解析', emoji: '🌐', desc: '解析URL获取域名、请求方法等信息', url: 'pages/network/url-parse.html', badge: '' },
  { id: 'useragent', cat: 'network', name: 'UserAgent工具', emoji: '💻', desc: '查看浏览器User-Agent和系统信息', url: 'pages/network/user-agent.html', badge: '' },
  { id: 'ip-query', cat: 'network', name: 'IP归属地查询', emoji: '🗺️', desc: '查询IP对应地理位置和运营商', url: '', badge: 'coming' },
  { id: 'unicode', cat: 'network', name: 'Unicode编解码', emoji: '🔤', desc: '普通文本与Unicode编码双向转换', url: '', badge: 'coming' },
  { id: 'qrcode-scan', cat: 'network', name: '二维码扫描', emoji: '📸', desc: '上传二维码图片快速识别内容', url: '', badge: 'coming' },

  // ===== 学习工具 =====
  { id: 'periodic-table', cat: 'study', name: '元素周期表', emoji: '⚛️', desc: '查阅化学元素原子序数、符号、原子量', url: 'pages/study/periodic-table.html', badge: '' },
  { id: 'idiom', cat: 'study', name: '成语大全', emoji: '📖', desc: '收录海量成语，支持按首字快速查询', url: 'pages/study/idiom.html', badge: '' },
  { id: 'pinyin-convert', cat: 'study', name: '文字转拼音', emoji: '📝', desc: '中文转拼音，支持多音字', url: 'pages/study/pinyin.html', badge: '' },
  { id: 'radical', cat: 'study', name: '汉字偏旁', emoji: '🈵', desc: '查询汉字偏旁部首及构造意义', url: '', badge: 'coming' },
  { id: 'idiom-chain', cat: 'study', name: '成语接龙', emoji: '🎮', desc: '进行成语接龙游戏，提升词汇量', url: '', badge: 'coming' },
  { id: 'capital', cat: 'study', name: '各国首都', emoji: '🌍', desc: '快速查询世界各国首都信息', url: '', badge: 'coming' },

  // ===== 编程辅助 =====
  { id: 'json-format', cat: 'dev', name: 'JSON格式化', emoji: '{}', desc: '将杂乱JSON转换为结构清晰易读格式', url: 'pages/dev/json-format.html', badge: '' },
  { id: 'json-diff', cat: 'dev', name: 'JSON diff', emoji: '🔀', desc: '对比两个JSON对象的差异', url: 'pages/dev/json-diff.html', badge: '' },
  { id: 'timestamp', cat: 'dev', name: '时间戳转换', emoji: '⏰', desc: '时间戳与人类可读日期双向转换', url: 'pages/dev/timestamp.html', badge: '' },
  { id: 'regex', cat: 'dev', name: '正则校验', emoji: '🔍', desc: '支持正则表达式匹配，突出显示匹配项', url: '', badge: 'coming' },
  { id: 'yaml-json', cat: 'dev', name: 'YAML/JSON互转', emoji: '⚙️', desc: 'YAML与JSON格式双向转换', url: '', badge: 'coming' },
  { id: 'hello-world', cat: 'dev', name: 'Hello World生成', emoji: '👋', desc: '生成多种编程语言Hello World示例代码', url: '', badge: 'coming' },

  // ===== 创意工具 =====
  { id: 'gif-split', cat: 'image', name: 'GIF分解', emoji: '📹', desc: '将GIF动画分解为单帧图片', url: 'pages/image/gif-split.html', badge: '' },
  { id: 'gif-create', cat: 'image', name: 'GIF合成', emoji: '📸', desc: '多张图片合成高质量GIF动画', url: 'pages/image/gif-create.html', badge: '' },
  { id: 'led-barrage', cat: 'creative', name: '手持弹幕LED', emoji: '💡', desc: '生成手持LED屏弹幕文字动画', url: 'pages/creative/led-barrage.html', badge: '' },
  { id: 'video-to-gif', cat: 'creative', name: '视频转GIF', emoji: '🎬', desc: '提取视频片段转换为GIF', url: '', badge: 'coming' },
  { id: 'emoji-pack', cat: 'creative', name: '表情包制作', emoji: '😂', desc: '上传图片添加文字制作表情包', url: '', badge: 'coming' },
  { id: 'ascii-art', cat: 'creative', name: '图片转字符画', emoji: '🎨', desc: '转换为字符组成的艺术作品', url: '', badge: 'coming' },

  // ===== 生活查询 =====
  { id: 'color-convert', cat: 'life', name: '颜色转换', emoji: '🎨', desc: 'Hex、RGB、HSL颜色代码双向转换', url: 'pages/life/color-convert.html', badge: '' },
  { id: 'world-time', cat: 'life', name: '世界时间', emoji: '🌍', desc: '查看全球各地当前时间', url: 'pages/life/world-time.html', badge: '' },
  { id: 'area-code', cat: 'life', name: '电话区号查询', emoji: '📞', desc: '查询各地电话区号', url: 'pages/life/area-code.html', badge: '' },
  { id: 'plate-query', cat: 'life', name: '车牌归属地', emoji: '🚗', desc: '查询车牌号码对应省市', url: '', badge: 'coming' },
  { id: 'zipcode', cat: 'life', name: '邮编查询', emoji: '📮', desc: '查询全国各地邮政编码', url: '', badge: 'coming' },
  { id: 'date-calc', cat: 'life', name: '日期计算', emoji: '📅', desc: '计算日期差值、星期、保质期等', url: '', badge: 'coming' },
];

// ===== 全局状态 =====
let currentCat = 'all';
let searchQuery = '';

// ===== DOM元素缓存 =====
const els = {
  catList: () => document.querySelector('.cat-list'),
  toolGrid: () => document.querySelector('.tool-grid'),
  sectionTitle: () => document.querySelector('.section-title'),
  searchInput: () => document.querySelector('.search-input'),
  menuBtn: () => document.querySelector('.menu-btn'),
  sidebar: () => document.querySelector('.sidebar'),
  overlay: () => document.querySelector('.sidebar-overlay'),
  toolCount: () => document.querySelector('.tool-count'),
};

// ===== 工具函数 =====
function getCategoryInfo(catId) {
  return CATEGORIES.find(c => c.id === catId);
}

function getFilteredTools() {
  let filtered = currentCat === 'all' ? TOOLS : TOOLS.filter(t => t.cat === currentCat);
  if (searchQuery) {
    filtered = filtered.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
  return filtered;
}

function renderSidebar() {
  const catList = els.catList();
  if (!catList) return;
  catList.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'all' ? TOOLS.length : TOOLS.filter(t => t.cat === cat.id).length;
    return `
      <a href="#" class="cat-link ${currentCat === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        <span class="cat-emoji">${cat.emoji}</span>
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count">${count}</span>
      </a>
    `;
  }).join('');
}

function renderTools() {
  const tools = getFilteredTools();
  const catInfo = getCategoryInfo(currentCat);
  const sectionTitle = els.sectionTitle();
  const toolGrid = els.toolGrid();
  const toolCount = els.toolCount();

  // 更新标题
  if (sectionTitle) {
    sectionTitle.innerHTML = `
      <span class="title-emoji">${catInfo.emoji}</span>
      <span>${catInfo.name}</span>
      <span class="title-count">${tools.length}个工具</span>
    `;
  }

  // 更新右上角计数
  if (toolCount) {
    toolCount.textContent = `共 ${tools.length} 个`;
  }

  // 更新工具网格
  if (toolGrid) {
    if (tools.length === 0) {
      toolGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <div class="empty-text">暂无相关工具</div>
        </div>
      `;
    } else {
      toolGrid.innerHTML = tools.map(tool => `
        <a href="${tool.url || '#'}" class="tool-card" ${!tool.url ? 'onclick="return false;"' : ''} style="${!tool.url ? 'cursor: not-allowed; opacity: .7;' : ''}">
          <div class="card-emoji" style="background: linear-gradient(135deg, ${getCardColor(tool.id)})">${tool.emoji}</div>
          <div class="card-name">${tool.name}</div>
          <div class="card-desc">${tool.desc}</div>
          ${tool.badge ? `<span class="card-badge ${tool.badge === 'coming' ? 'coming' : tool.badge === 'hot' ? 'hot' : 'new'}">${tool.badge === 'coming' ? '开发中' : tool.badge === 'hot' ? '热门' : '新'}</span>` : ''}
        </a>
      `).join('');
    }
  }
}

function getCardColor(toolId) {
  const colors = {
    'text-diff': '#FFE5E5, #FFB3CC',
    'word-count': '#FFF5E5, #FFD9B3',
    'text-speech': '#E5F5FF, #B3E5FF',
    'text-dedup': '#E5FFE5, #B3FFB3',
    'text-convert': '#F5E5FF, #D9B3FF',
    'text-hidden': '#FFE5F5, #FFB3D9',
    'text-emoticon': '#E5FBFF, #B3F0FF',
    'text-mars': '#FFF0E5, #FFD9B3',
    'text-explain': '#E5F0FF, #B3D9FF',
    'text-pinyin': '#F5E5FF, #D9B3FF',
    'img-compress': '#FFE5E5, #FFB3B3',
    'img-format': '#FFF0E5, #FFD9B3',
    'img-watermark': '#E5FBFF, #B3F0FF',
    'img-grayscale': '#F0F0F0, #D0D0D0',
    'img-pixel': '#E5F5FF, #B3E5FF',
    'img-editor': '#FFF5E5, #FFD9B3',
    'img-repair': '#E5FFE5, #B3FFB3',
    'img-segment': '#F5E5FF, #D9B3FF',
    'img-denoise': '#FFE5F5, #FFB3D9',
    'img-ascii': '#E5FBFF, #B3F0FF',
    'pdf-merge': '#FFE5E5, #FFB3B3',
    'pdf-split': '#FFF0E5, #FFD9B3',
    'pdf-to-image': '#E5F5FF, #B3E5FF',
    'pdf-to-word': '#E5FFE5, #B3FFB3',
    'pdf-to-excel': '#F5E5FF, #D9B3FF',
    'pdf-to-ppt': '#FFE5F5, #FFB3D9',
    'qrcode-gen': '#E5FBFF, #B3F0FF',
    'markdown': '#FFF5E5, #FFD9B3',
    'screen-record': '#E5F5FF, #B3E5FF',
    'mindmap': '#E5FFE5, #B3FFB3',
    'font-sheet': '#F5E5FF, #D9B3FF',
    'excel-convert': '#FFE5F5, #FFB3D9',
    'calculator': '#FFE5E5, #FFB3B3',
    'bmi': '#FFF0E5, #FFD9B3',
    'mortgage': '#E5F5FF, #B3E5FF',
    'calorie': '#E5FFE5, #B3FFB3',
    'invest': '#F5E5FF, #D9B3FF',
    'insurance': '#FFE5F5, #FFB3D9',
    'password-check': '#E5FBFF, #B3F0FF',
    'password-gen': '#FFF5E5, #FFD9B3',
    'base64': '#E5F5FF, #B3E5FF',
    'md5': '#E5FFE5, #B3FFB3',
    'file-scan': '#F5E5FF, #D9B3FF',
    'crypto': '#FFE5F5, #FFB3D9',
    'url-encode': '#E5FBFF, #B3F0FF',
    'url-parse': '#FFF5E5, #FFD9B3',
    'useragent': '#E5F5FF, #B3E5FF',
    'ip-query': '#E5FFE5, #B3FFB3',
    'unicode': '#F5E5FF, #D9B3FF',
    'qrcode-scan': '#FFE5F5, #FFB3D9',
    'periodic-table': '#E5FBFF, #B3F0FF',
    'idiom': '#FFF5E5, #FFD9B3',
    'pinyin-convert': '#E5F5FF, #B3E5FF',
    'radical': '#E5FFE5, #B3FFB3',
    'idiom-chain': '#F5E5FF, #D9B3FF',
    'capital': '#FFE5F5, #FFB3D9',
    'json-format': '#E5FBFF, #B3F0FF',
    'json-diff': '#FFF5E5, #FFD9B3',
    'timestamp': '#E5F5FF, #B3E5FF',
    'regex': '#E5FFE5, #B3FFB3',
    'yaml-json': '#F5E5FF, #D9B3FF',
    'hello-world': '#FFE5F5, #FFB3D9',
    'gif-split': '#E5FBFF, #B3F0FF',
    'gif-create': '#FFF5E5, #FFD9B3',
    'led-barrage': '#E5F5FF, #B3E5FF',
    'video-to-gif': '#E5FFE5, #B3FFB3',
    'emoji-pack': '#F5E5FF, #D9B3FF',
    'ascii-art': '#FFE5F5, #FFB3D9',
    'color-convert': '#E5FBFF, #B3F0FF',
    'world-time': '#FFF5E5, #FFD9B3',
    'area-code': '#E5F5FF, #B3E5FF',
    'plate-query': '#E5FFE5, #B3FFB3',
    'zipcode': '#F5E5FF, #D9B3FF',
    'date-calc': '#FFE5F5, #FFB3D9',
    'xiaoyuzhou-download': '#E5F0FF, #B3D9FF',
  };
  return colors[toolId] || '#E5F5FF, #B3E5FF';
}

function closeSidebar() {
  const sidebar = els.sidebar();
  const overlay = els.overlay();
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function bindEvents() {
  // 菜单按钮
  const menuBtn = els.menuBtn();
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const sidebar = els.sidebar();
      const overlay = els.overlay();
      if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
      }
    });
  }

  // 侧边栏遮罩层
  const overlay = els.overlay();
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // 分类链接
  const catList = els.catList();
  if (catList) {
    catList.addEventListener('click', (e) => {
      const link = e.target.closest('.cat-link');
      if (!link) return;
      e.preventDefault();
      currentCat = link.dataset.cat;
      searchQuery = ''; // 切换分类时清空搜索
      const searchInput = els.searchInput();
      if (searchInput) searchInput.value = '';
      renderSidebar();
      renderTools();
      closeSidebar();
    });
  }

  // 搜索框
  const searchInput = els.searchInput();
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderTools();
    });
  }
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderTools();
  bindEvents();
});
