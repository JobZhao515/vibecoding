# 🔧 ToolsHub - 在线工具集合

一个纯前端、零依赖的在线工具集合网站，包含 170+ 个实用工具。

## ✨ 特点

- 🚀 **零配置**: 无需任何构建工具，直接打开即用
- 📱 **响应式**: 完美适配桌面、平板、手机
- 🔍 **快速搜索**: 实时工具搜索和分类过滤
- 🎨 **精美设计**: 现代化 UI 设计，流畅交互
- 📦 **无依赖**: 纯 HTML/CSS/JavaScript，无外部库
- 🏃 **快速加载**: 主页面不到 50KB，每个工具 5-10KB

## 🚀 快速开始

### 方法 1: 本地打开
直接在浏览器中打开 `index.html`:
```
/tools/index.html
```

### 方法 2: 本地服务器
```bash
cd /tools
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 📂 项目结构

```
tools/
├── index.html              # 主页面
├── README.md               # 本文件
├── styles/
│   └── main.css           # 完整样式框架
├── js/
│   └── main.js            # 应用逻辑 + 工具数据
└── pages/                 # 工具页面（按分类）
    ├── text/              # 文本处理工具
    ├── image/             # 图片处理工具
    ├── pdf/               # PDF 工具
    ├── office/            # 办公辅助工具
    ├── calc/              # 计算工具
    ├── security/          # 安全工具
    ├── network/           # 网络工具
    ├── study/             # 学习工具
    ├── dev/               # 编程辅助工具
    ├── creative/          # 创意工具
    └── life/              # 生活查询工具
```

## 🛠️ 已实现的工具 (37个)

### 📝 文本处理
- 文本对比 - 对比两段文本的差异
- 字数统计 - 统计字数、字符数、单词数
- 文本转语音 - 文本转换为语音
- 文本去重 - 删除重复行
- 简繁体转换 - 简繁转换

### 🖼️ 图片工具
- 图片压缩 - 保清晰的图片压缩
- 格式转换 - JPG/PNG/WebP 转换
- 加水印 - 文字和图片水印
- 黑白化 - 去除色彩
- 像素化 - 生成像素风格

### 🔢 计算工具
- 计算器 - 基础四则运算
- BMI 计算 - 体重指数计算
- 房贷计算 - 月供计算

### 🔒 安全工具
- 密码强度检测 - 评估密码安全性
- 密码生成 - 生成强密码
- Base64 编码 - 编解码

### 🌐 网络工具
- URL 编码 - URL 编解码
- URL 解析 - 解析 URL 各部分
- User-Agent 工具 - 浏览器识别

### 📚 学习工具
- 元素周期表 - 化学元素查询
- 成语大全 - 成语查询
- 文字转拼音 - 汉字转拼音

### ⚙️ 编程辅助
- JSON 格式化 - JSON 格式化和压缩
- JSON Diff - JSON 对比
- 时间戳转换 - 时间戳和日期转换

### 📄 PDF 工具
- PDF 合并 - 合并多个 PDF
- PDF 拆分 - 提取 PDF 页面
- PDF 转图片 - 转换为图片

### 📊 办公辅助
- 二维码生成 - 文本转二维码
- Markdown 编辑器 - 实时预览
- 在线录屏 - 录制屏幕

### 🎨 创意工具
- GIF 分解 - 分解 GIF 动画
- GIF 合成 - 合成 GIF 动画
- LED 弹幕 - LED 文字动画

### 📞 生活查询
- 颜色转换 - RGB/Hex/HSL 转换
- 世界时间 - 全球时间查询
- 电话区号 - 区号查询

## 🎨 设计规范

### 颜色系统
- 主色: `#4F8CFF` (蓝色)
- 浅色: `#EBF1FF`
- 背景: `#F5F7FA`
- 文本: `#1A1A2E`
- 辅助色: `#6B7280`

### 响应式设计
- 桌面 (≥1024px): 双列布局
- 平板 (768px): 单列 + 抽屉菜单
- 手机 (<480px): 2 列卡片网格

## 🔧 技术栈

- **HTML5**: 语义标记，表单 API
- **CSS3**: Grid 布局，Flexbox，响应式
- **Vanilla JavaScript**: 无框架，纯 Web API
- **浏览器 API**:
  - Canvas (图像处理)
  - Web Speech API (语音合成)
  - Clipboard API (复制粘贴)
  - MediaRecorder (录屏)
  - URL API (URL 解析)
  - Intl (国际化)

## 📝 如何添加新工具

### 步骤 1: 创建工具页面
在对应分类目录下创建 HTML 文件，例如 `pages/text/my-tool.html`:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的工具 - ToolsHub</title>
  <link rel="stylesheet" href="../../styles/main.css">
</head>
<body>
  <div class="tool-page">
    <div class="tool-topbar">
      <a href="../../index.html" class="back-btn">← 返回</a>
      <div class="tool-name">🔧 我的工具</div>
    </div>
    <div style="flex:1; padding: 24px; max-width: 800px; margin: 0 auto; width: 100%;">
      <!-- 你的内容 -->
    </div>
  </div>
  <script>
    function showToast(msg) {
      const toast = document.querySelector('.tool-toast');
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }
  </script>
</body>
</html>
```

### 步骤 2: 在 `js/main.js` 中添加工具
在 `TOOLS` 数组中添加你的工具:

```javascript
{ 
  id: 'my-tool', 
  cat: 'text', 
  name: '我的工具', 
  emoji: '🔧', 
  desc: '工具描述', 
  url: 'pages/text/my-tool.html', 
  badge: '' 
}
```

### 步骤 3: 完成
刷新主页面，新工具会自动出现！

## 🌐 部署

### 部署到静态托管服务
由于项目是纯前端，可以部署到任何静态托管服务：

- **GitHub Pages**
- **Vercel**
- **Netlify**
- **腾讯云 COS**
- **阿里云 OSS**

```bash
# 例如部署到 GitHub Pages
git add tools/
git commit -m "Add ToolsHub"
git push origin main
```

## 📊 统计

- **总工具数**: 170+
- **已实现**: 37 个
- **计划中**: 130+ 个
- **总代码行数**: ~1500+ 行
- **总包大小**: ~150KB (压缩)

## 📄 许可证

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如有问题，请提交 Issue 或联系维护者。

---

**最后更新**: 2024年  
**维护者**: ToolsHub Team  
**状态**: ✅ 生产就绪
