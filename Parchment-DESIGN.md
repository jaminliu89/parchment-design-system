---
version: "2.0"
name: Parchment
description: 云雾白设计系统 v2.0。三层 Token 架构（Palette → Semantic → Component），云雾白纸感 + 冷墨文字 + 博物馆级排版。为内容工具、编辑器、认知产品而生。
license: MIT

# ============================================================
# 第一层：Palette Tokens — 纯描述性色值，不涉及用途
# ============================================================
palette:
  # 云雾白色系 — 从最白到最深的冷调白纸
  parchment:
    "0": "#FDFDFC"      # 最白的云雾，卡片表面
    "50": "#F6F7F9"     # 云雾白本色，页面背景
    "100": "#EEF0F3"    # 浅云雾，次级表面
    "200": "#E2E5EA"    # 云雾阴影，分割线
    "300": "#CED3DB"    # 深云雾色，边框
    "400": "#A9B0BC"    # 最深云雾色，禁用态

  # 油墨色系 — 冷调墨灰，从最浓到最淡
  ink:
    "900": "#1F2330"    # 主文字，浓墨
    "700": "#3D4457"    # 次级文字，淡墨
    "500": "#6B7280"    # 辅助文字，浅墨
    "400": "#949BA8"    # 占位符/提示，极淡墨
    "300": "#B4BAC5"    # 极淡分割线
    "100": "#E2E5EA"    # 最淡，背景级

  # 强调色 — 石墨蓝（低饱和，像石墨笔画的蓝，不是饱和的 UI 蓝）
  accent:
    "50": "#F4F5F8"
    "100": "#E8EAEF"
    "200": "#D4D8E0"
    "300": "#B8BECB"
    "400": "#97A0B5"
    "500": "#77819A"
    "600": "#5A6590"     # 默认强调色
    "700": "#4A5477"
    "800": "#3D4563"
    "900": "#333A52"

  # 语义色板 — 莫兰迪低饱和，像旧印章
  success:
    "50": "#F0F4F1"
    "500": "#6B8F7A"     # 灰绿
    "700": "#4A6B57"

  warning:
    "50": "#FAF6EE"
    "500": "#B58A5A"     # 灰琥珀
    "700": "#8A653F"

  error:
    "50": "#F7F0F0"
    "500": "#B06A63"     # 灰红
    "700": "#8A4A44"

  # 深雾色系 — 深色模式的背景
  dark-fog:
    "900": "#15171C"     # 最深的雾，页面背景
    "800": "#1C1F26"     # 深雾，次级背景
    "700": "#262A33"     # 卡片背景
    "600": "#333842"     # 次级表面
    "500": "#454B58"     # 边框

  # 银墨色（深色模式文字）
  dark-ink:
    "100": "#ECEEF2"     # 主文字（银白墨）
    "300": "#C0C6D1"     # 次级文字
    "500": "#8690A0"     # 辅助文字
    "700": "#5A6374"     # 占位符

# ============================================================
# 第二层：Semantic Tokens — 按用途命名，连接 Palette 和 Component
# ============================================================
semantic:
  # 背景
  surface:
    page: "{palette.parchment.50}"        # 页面底色
    card: "{palette.parchment.0}"         # 卡片表面（更白）
    muted: "{palette.parchment.100}"      # 次级表面（灰一点）
    subtle: "{palette.parchment.200}"     # 三级表面（按下态）
    accent: "{palette.accent.50}"         # 强调色背景
    success: "{palette.success.50}"
    warning: "{palette.warning.50}"
    error: "{palette.error.50}"

  # 文字
  text:
    primary: "{palette.ink.900}"         # 标题正文
    secondary: "{palette.ink.700}"       # 副标题次要文字
    tertiary: "{palette.ink.500}"        # 辅助说明元信息
    placeholder: "{palette.ink.400}"     # 占位符
    on-accent: "#FFFFFF"                  # 强调色上的文字
    on-dark: "{palette.dark-ink.100}"     # 深色背景上的文字
    accent: "{palette.accent.600}"        # 链接/强调文字
    success: "{palette.success.700}"
    warning: "{palette.warning.700}"
    error: "{palette.error.700}"

  # 边框/分割线
  border:
    default: "{palette.parchment.200}"   # 默认边框
    muted: "{palette.parchment.100}"     # 次级边框
    subtle: "{palette.parchment.50}"      # 极淡分割
    accent: "{palette.accent.600}"       # 强调边框
    focus: "{palette.accent.500}"        # 聚焦态边框
    error: "{palette.error.500}"

  # 交互
  interaction:
    accent: "{palette.accent.600}"       # 主交互色
    accent-hover: "{palette.accent.500}"
    accent-pressed: "{palette.accent.700}"
    accent-soft: "{palette.accent.50}"

  # 阴影（极少使用）
  shadow:
    none: "none"
    sm: "0 1px 2px rgba(44, 41, 37, 0.06)"
    product: "0 20px 40px rgba(44, 41, 37, 0.08)"

  # 深色模式语义覆盖
  dark:
    surface:
      page: "{palette.dark-fog.900}"
      card: "{palette.dark-fog.700}"
      muted: "{palette.dark-fog.800}"
      subtle: "{palette.dark-fog.600}"
      accent: "rgba(90, 101, 144, 0.15)"
    text:
      primary: "{palette.dark-ink.100}"
      secondary: "{palette.dark-ink.300}"
      tertiary: "{palette.dark-ink.500}"
      placeholder: "{palette.dark-ink.700}"
      accent: "{palette.accent.400}"
      on-accent: "#FFFFFF"
      success: "#7BA68E"
      warning: "#C49A68"
      error: "#C0796F"
    border:
      default: "{palette.dark-fog.500}"
      muted: "{palette.dark-fog.600}"
      accent: "{palette.accent.400}"
      focus: "{palette.accent.400}"
    interaction:
      accent: "{palette.accent.400}"
      accent-hover: "{palette.accent.300}"
      accent-pressed: "{palette.accent.500}"
      accent-soft: "rgba(90, 101, 144, 0.15)"

# ============================================================
# 排版 Tokens
# ============================================================
typography:
  # 字体族三套
  fontFamily:
    serif: "'Source Serif Pro', 'Noto Serif SC', 'Songti SC', Georgia, serif"
    sans: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    mono: "'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace"

  # 字号阶梯（modular scale, 1.25 ratio）
  fontSize:
    "xs": "12px"
    "sm": "14px"
    "base": "16px"
    "lg": "18px"
    "xl": "20px"
    "2xl": "24px"
    "3xl": "30px"
    "4xl": "36px"
    "5xl": "48px"
    "6xl": "60px"
    "7xl": "72px"
    "8xl": "96px"

  # 行高
  lineHeight:
    tight: 1.15
    snug: 1.3
    normal: 1.5
    relaxed: 1.65
    loose: 1.8

  # 字重
  fontWeight:
    light: 300
    regular: 400
    medium: 500
    semibold: 600
    bold: 700

  # 字间距
  letterSpacing:
    tighter: "-0.02em"
    tight: "-0.01em"
    normal: "0"
    wide: "0.02em"
    wider: "0.05em"

  # 排版角色（按用途命名）
  roles:
    display-xl:
      fontFamily: "{typography.fontFamily.serif}"
      fontSize: "{typography.fontSize.8xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.tight}"
      letterSpacing: "{typography.letterSpacing.tighter}"
    display-lg:
      fontFamily: "{typography.fontFamily.serif}"
      fontSize: "{typography.fontSize.6xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.tight}"
      letterSpacing: "{typography.letterSpacing.tight}"
    display-md:
      fontFamily: "{typography.fontFamily.serif}"
      fontSize: "{typography.fontSize.4xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.tight}"
      letterSpacing: "{typography.letterSpacing.tight}"
    heading-lg:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.2xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.snug}"
    heading-md:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.snug}"
    heading-sm:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.base}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.snug}"
    lead:
      fontFamily: "{typography.fontFamily.serif}"
      fontSize: "{typography.fontSize.xl}"
      fontWeight: "{typography.fontWeight.light}"
      lineHeight: "{typography.lineHeight.relaxed}"
    body-lg:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.lg}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.relaxed}"
    body-md:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.base}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.relaxed}"
    body-sm:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.sm}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.normal}"
    caption:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.xs}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.normal}"
    caption-strong:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.xs}"
      fontWeight: "{typography.fontWeight.medium}"
      lineHeight: "{typography.lineHeight.normal}"
      letterSpacing: "{typography.letterSpacing.wide}"
    label:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.xs}"
      fontWeight: "{typography.fontWeight.medium}"
      lineHeight: "{typography.lineHeight.normal}"
      letterSpacing: "{typography.letterSpacing.wide}"
    mono:
      fontFamily: "{typography.fontFamily.mono}"
      fontSize: "{typography.fontSize.sm}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.normal}"
    mono-sm:
      fontFamily: "{typography.fontFamily.mono}"
      fontSize: "{typography.fontSize.xs}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.normal}"

    # 内容排版专用角色
    prose-p:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.base}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.relaxed}"
      marginBottom: "1.25em"
    prose-h1:
      fontFamily: "{typography.fontFamily.serif}"
      fontSize: "{typography.fontSize.4xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.tight}"
      marginTop: "2em"
      marginBottom: "0.8em"
    prose-h2:
      fontFamily: "{typography.fontFamily.serif}"
      fontSize: "{typography.fontSize.2xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.snug}"
      marginTop: "1.8em"
      marginBottom: "0.6em"
    prose-h3:
      fontFamily: "{typography.fontFamily.sans}"
      fontSize: "{typography.fontSize.xl}"
      fontWeight: "{typography.fontWeight.semibold}"
      lineHeight: "{typography.lineHeight.snug}"
      marginTop: "1.5em"
      marginBottom: "0.5em"
    prose-blockquote:
      fontFamily: "{typography.fontFamily.serif}"
      fontSize: "{typography.fontSize.lg}"
      fontWeight: "{typography.fontWeight.regular}"
      lineHeight: "{typography.lineHeight.relaxed}"
      fontStyle: "italic"
      borderLeft: "3px solid {semantic.border.default}"
      paddingLeft: "1.25em"
      margin: "1.5em 0"
      color: "{semantic.text.secondary}"
    prose-code:
      fontFamily: "{typography.fontFamily.mono}"
      fontSize: "0.9em"
      backgroundColor: "{semantic.surface.muted}"
      padding: "0.2em 0.4em"
      borderRadius: "4px"
    prose-pre:
      fontFamily: "{typography.fontFamily.mono}"
      fontSize: "{typography.fontSize.sm}"
      lineHeight: "{typography.lineHeight.normal}"
      backgroundColor: "{semantic.surface.muted}"
      padding: "1.25em"
      borderRadius: "8px"
      overflowX: "auto"
      margin: "1.5em 0"
    prose-list:
      marginBottom: "1.25em"
      paddingLeft: "1.5em"
    prose-li:
      marginBottom: "0.5em"
      lineHeight: "{typography.lineHeight.relaxed}"
    prose-hr:
      border: "none"
      borderTop: "1px solid {semantic.border.muted}"
      margin: "2em 0"

# 间距系统（4px 基准，8px 步长）
spacing:
  "0": "0"
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  "32": "128px"

# 圆角体系
rounded:
  none: "0"
  sm: "4px"
  md: "6px"
  lg: "10px"
  xl: "14px"
  "2xl": "18px"
  "3xl": "24px"
  full: "9999px"

# 动效 tokens
motion:
  duration:
    instant: "100ms"
    fast: "150ms"
    base: "200ms"
    slow: "300ms"
    entrance: "350ms"
  easing:
    default: "cubic-bezier(0.4, 0, 0.2, 1)"
    out: "cubic-bezier(0, 0, 0.2, 1)"
    in: "cubic-bezier(0.4, 0, 1, 1)"
    hold: "cubic-bezier(0.2, 0, 0, 1)"

# ============================================================
# 第三层：Component Tokens — 组件级别的具体规格
# ============================================================
components:
  # 按钮
  button:
    primary:
      background: "{semantic.interaction.accent}"
      color: "{semantic.text.on-accent}"
      hoverBackground: "{semantic.interaction.accent-hover}"
      pressedBackground: "{semantic.interaction.accent-pressed}"
      disabledOpacity: "0.5"
    secondary:
      background: "{semantic.surface.muted}"
      color: "{semantic.text.primary}"
      hoverBackground: "{semantic.surface.subtle}"
    tertiary:
      background: "transparent"
      color: "{semantic.text.accent}"
      hoverBackground: "{semantic.interaction.accent-soft}"
    danger:
      background: "{semantic.text.error}"
      color: "#FFFFFF"
    sizes:
      sm:
        height: "32px"
        padding: "0 14px"
        fontSize: "{typography.fontSize.sm}"
      md:
        height: "40px"
        padding: "0 20px"
        fontSize: "{typography.fontSize.base}"
      lg:
        height: "48px"
        padding: "0 24px"
        fontSize: "{typography.fontSize.lg}"
    borderRadius: "{rounded.full}"

  # 输入框
  input:
    background: "{semantic.surface.card}"
    color: "{semantic.text.primary}"
    borderColor: "{semantic.border.default}"
    borderRadius: "{rounded.lg}"
    height: "42px"
    padding: "0 14px"
    fontSize: "{typography.fontSize.base}"
    focus:
      borderColor: "{semantic.border.focus}"
      outline: "none"
    placeholder:
      color: "{semantic.text.placeholder}"
    error:
      borderColor: "{semantic.border.error}"

  # 卡片
  card:
    background: "{semantic.surface.card}"
    color: "{semantic.text.primary}"
    borderRadius: "{rounded.xl}"
    padding: "{spacing.8}"
    border: "1px solid {semantic.border.muted}"

  # 徽章
  badge:
    accent:
      background: "{semantic.interaction.accent-soft}"
      color: "{semantic.text.accent}"
    success:
      background: "{semantic.surface.success}"
      color: "{semantic.text.success}"
    warning:
      background: "{semantic.surface.warning}"
      color: "{semantic.text.warning}"
    error:
      background: "{semantic.surface.error}"
      color: "{semantic.text.error}"
    fontSize: "{typography.fontSize.xs}"
    padding: "3px 10px"
    borderRadius: "{rounded.full}"

  # 标签页
  tabs:
    height: "40px"
    fontSize: "{typography.fontSize.sm}"
    color: "{semantic.text.secondary}"
    activeColor: "{semantic.text.primary}"
    indicatorColor: "{semantic.text.primary}"

---

# Parchment Design System v2.0

> 云雾白设计系统 — 云雾是舞台，冷墨是主角。
> 为内容工具、编辑器、认知产品而生。

---

## 设计哲学

### 1. 内容优先
UI 是隐形的脚手架，不是视觉焦点。界面像博物馆的墙面——白得恰到好处，衬得展品更亮。

### 2. 单色原则
全系统只有 1 个低饱和强调色（石墨蓝），其余全部用云雾色和墨色的灰阶。彩色面积占比 ≤ 5%，宁可让界面「看起来像没上色」，也不要跳。

### 3. 排版即设计
大字重对比、精确的行高字距、衬线与无衬线的搭配——这就是最好的装饰。

### 4. 无阴影界面
层级靠云雾深浅和 1px 墨线区分，不靠 box-shadow。阴影只允许出现在实物图片下方。

### 5. 云雾质感
所有圆角饱满，所有过渡丝滑。界面摸起来应该像透过薄雾看远山——有质感但不抢眼。

### 6. 充足呼吸
页面留白不低于 60%。阅读型内容行高 1.65，段落间距 1.25em。

### 7. 禁 emoji
图标用线条风格（1.8pt stroke）。装饰用纸张纹理和排版层次，不用 emoji。

---

## 克制原则 Color Restraint

> 高端工作室质感的秘密不是「用更多颜色」，而是「几乎不用颜色」。Apple、Notion、Linear 的界面看起来高级，因为 95% 的画面是灰阶，彩色只出现在最重要的一个交互点上。

### 为什么克制 = 高级

- **色彩是稀缺资源**。当彩色占比 ≤ 5%，用户会自动注意到每一个彩色元素——因为稀罕，所以醒目。
- **灰阶衬内容**。颜色越少，内容越突出。这是「博物馆墙面」原理：白墙永远比彩墙衬画。
- **灰度是专业信号**。饱和色是消费品的语言（吸引眼球），低饱和灰是工具的语言（专业可信）。
- **长时间使用不疲劳**。编辑器、阅读工具用户一天看 8 小时，灰阶界面比彩色界面耐看得多。

### 色阶主导，色相点缀

Parchment 的颜色策略可以概括为一句话：

```
灰阶为主（95%）+ 低饱和点缀（≤5%）
```

| 层级 | 占比 | 颜色 | 用途 |
|------|------|------|------|
| 灰阶 | 95% | parchment / ink / dark-fog / dark-ink | 背景、文字、边框、卡片 |
| 点缀色 | 5% | accent 石墨蓝 / 莫兰迪语义色 | 主操作按钮、链接、状态标记 |

### 彩色出现的三种合法位置

1. **交互点**：主按钮背景、链接文字、聚焦边框——告诉用户「这里可以点」
2. **状态信息**：成功/警告/错误的徽章和小圆点——告诉用户「这里的状态是什么」
3. **数据区分**：图表里的数据系列——告诉用户「哪条线是什么」

除此之外的任何位置，默认用灰阶。

### 判断标准：删掉颜色还成立吗？

设计时问自己三个问题：
1. 这个彩色是必要的吗？—— 删掉，界面还能正常理解吗？
2. 这个彩色能换成灰阶吗？—— 如果文字/图标本身就能传达，就别上色
3. 这个彩色够低调吗？—— 饱和度超过莫兰迪范围的，一律降下来

三个问题只要有一个答案不理想，就回去改。

### Apple / Notion 怎么做

| 系统 | 主色 | 用法 |
|------|------|------|
| Apple | 系统蓝（低饱和）| 只用于交互元素，界面其余全是灰阶 |
| Notion | 几乎无色 | 默认连按钮都是灰的，彩色只用于标签和链接 |
| Linear | 紫灰（低饱和）| 主 CTA 用，其余全灰 |
| Parchment | 石墨蓝 #5A6590 | 主操作、链接、聚焦态，其余全灰 |

共同点：**彩色面积小 + 饱和度低 + 位置固定**。这三个缺一不可。

---

## 文案指南 Voice & Tone

> 界面文案是产品的一部分。Parchment 是内容工具的设计系统，文案质量直接决定产品的「专业感」。好文案像好排版——克制、清楚、不说废话。

### 声音原则

- **冷静专业**。像一位可靠的编辑，不像推销员，也不像客服。
- **直接清楚**。说「保存失败」，不说「糟糕，出了点问题」。
- **人话优先**。说「文件太大，超过 10MB」，不说「文件大小超过限制阈值」。
- **简短优先**。能 6 个字说清，不用 12 个字。
- **不居高临下**。不说「您必须」，说「建议先保存」。
- **不假装热情**。不用「恭喜！太棒了！」这种廉价兴奋。

### 按钮文案

| 场景 | 写 | 不写 |
|------|-----|------|
| 保存操作 | 保存更改 | 提交 / 确定 |
| 删除操作 | 删除项目 | 移除 / 清理 |
| 危险确认 | 删除（不可恢复）| 是的 / OK |
| 取消 | 取消 | 返回 |
| 关闭 | 关闭 | 完成 |
| 下一步 | 继续 | Next |
| 学习更多 | 了解更多 | 点击这里 |

**规则**：
- 动词 + 名词结构（「保存更改」「导出数据」）
- 不超过 6 个字
- 危险操作写明后果（「删除后无法恢复」）
- 同一个动作全产品用同一个词，不换花样

### 错误文案

**格式**：什么出了问题 + 为什么 + 用户能做什么。

```
✗ 密码格式错误
✓ 密码至少需要 8 位，包含一个数字

✗ 操作失败
✓ 保存失败：网络连接中断，请重试

✗ 无权限
✓ 你没有权限编辑这个文档，请联系文档所有者
```

**规则**：
- 不说技术术语（500 Internal Server Error → 服务器暂时不可用）
- 不给用户添堵的废话（「请联系管理员」只在管理员真能解决时写）
- 能自动恢复的告诉用户会自动重试
- 错误出现的位置：字段错误在字段下方，全局错误在页面顶部或 Toast

### 空状态文案

**结构**：标题（动词开头）+ 描述（1 句话）+ CTA 按钮。

```
✓ 还没有笔记     ← 标题，名词短语
  记录你的第一个想法，灵感会累积成体系。
  [新建笔记]      ← CTA，动词开头

✗ 暂无数据       ← 模糊，没有引导
```

**规则**：
- 标题说「现在是什么状态」（还没有笔记），不说「暂无数据」这种空洞词
- 描述给用户一个理由：为什么这里值得有内容
- CTA 用动词开头（「新建」「导入」「连接」）
- 空状态也是功能入口，不是死胡同

### 微文案（Microcopy）

| 场景 | 写 | 不写 |
|------|-----|------|
| 必填标记 | *（图例说明「* 为必填项」）| 「必填」两个字重复每个字段 |
| 占位符 | name@example.com | 请输入邮箱 |
| 上传区域 | 拖拽文件到这里，或点击选择 | 上传文件 |
| 加载中 | 正在加载… | Loading… |
| 无结果 | 没有找到「{关键词}」的结果 | 无数据 |
| 保存状态 | 已保存 / 保存中… / 未保存更改 | — |

### 数字 & 单位

- 用数字不用中文数字：3 个文件，不是三个文件
- 千位分隔：1,234（英文环境）/ 1234（中文环境不强制分隔）
- 百分比：45%
- 时间：统一格式（「3 分钟前」或「2026-08-12」），不混用
- 文件大小：10 MB（MB 与数字之间空格）

### 语气分级

| 场景 | 语气 | 示例 |
|------|------|------|
| 成功反馈 | 平静陈述 | 已保存 / 发布成功 |
| 错误 | 直接说明 | 保存失败：磁盘空间不足 |
| 警告 | 提醒 | 删除后无法恢复，建议先备份 |
| 引导 | 建议式 | 建议开启自动保存 |
| 新功能 | 说明式 | 现在可以拖拽调整顺序了 |

**不要用**：感叹号（！）、颜文字、过度口语（「亲」「哦~」）、英文夹生（「please 注意」）。

---

## 空状态规范 Empty State

> 空状态不是「没内容」，是「内容的起点」。每个空状态都是一次引导用户开始的机会。

### 何时出现

- 首次使用：用户还没创建任何内容
- 筛选/搜索无结果：条件过滤后为空
- 数据被清空：用户删光了所有条目
- 权限不足：没有访问权限看到的区域

### 结构 Anatomy

```
┌──────────────────────────────┐
│                              │
│        ○ 插画 / 图标          │  ← 64-80px，线条风格
│                              │
│        还没有笔记             │  ← 标题（1 句话，16-20px）
│                              │
│  记录你的第一个想法，          │  ← 描述（1-2 句，14px tertiary）
│  灵感会累积成体系。          │
│                              │
│        [ 新建笔记 ]          │  ← CTA（最多 1 个主按钮）
│                              │
└──────────────────────────────┘
```

### 布局规则

- 内容垂直居中，上下留白对称
- 最大宽度 320px，不占满容器
- 插画/图标 64-80px，tertiary 色线条风格
- 标题 16-20px，medium 字重
- 描述 14px，tertiary 色，最多 2 句
- CTA 最多 1 个主按钮；必要时加 1 个次要链接

### 三种场景的文案模板

**首次使用**

| 位置 | 标题 | 描述 | CTA |
|------|------|------|-----|
| 笔记列表 | 还没有笔记 | 记录你的第一个想法，灵感会累积成体系。 | 新建笔记 |
| 项目列表 | 创建你的第一个项目 | 项目帮你组织目标、任务和进度。 | 新建项目 |
| 收藏夹 | 收藏夹是空的 | 看到喜欢的内容，点收藏保存到这里。 | 去发现内容 |

**搜索/筛选无结果**

| 位置 | 标题 | 描述 | CTA |
|------|------|------|-----|
| 搜索 | 没有找到「{关键词}」的结果 | 换个关键词试试，或清空筛选。 | 清空筛选 |
| 筛选 | 没有符合条件的内容 | 试试放宽筛选条件。 | 重置筛选 |

**数据被清空**

| 位置 | 标题 | 描述 | CTA |
|------|------|------|-----|
| 回收站 | 回收站已清空 | 删除的内容将永久消失。 | 返回列表 |

### 插画规范 Illustration

- 线条风格（1.8pt stroke），与图标系统一致
- 只用 tertiary 色（灰），不画彩色插画
- 简单几何 + 抽象线条，不做写实插画
- 不占用过多空间（64-80px 足够）
- 插画是可选元素：没插画只有图标（如一个 24px 线条图标放大版）也可以

### 无障碍

- 插画加 `aria-hidden="true"`（装饰性）
- 标题用 h2/h3 语义标签
- CTA 按钮正常可聚焦
- 颜色不是信息载体（灰插画 + 文字已经足够）

### Don't

- 不要「暂无数据」这种空洞标题（什么都没说）
- 不要没 CTA 的空状态（用户不知道下一步）
- 不要全屏大插画（空状态不是插画展）
- 不要用纯空白替代空状态
- 不要给空状态加太多装饰（它是提示，不是页面）

---

## 第一层：Palette Tokens（色板层）

> 纯描述性的原始色值，不涉及用途。只描述「是什么」，不描述「用来干什么」。

### 云雾白色系 Parchment

| Token | 色值 | 直观感受 |
|-------|------|---------|
| parchment-0 | #FDFDFC | 最白的云雾，卡片表面 |
| parchment-50 | #F6F7F9 | 云雾白本色，页面背景 |
| parchment-100 | #EEF0F3 | 浅云雾，次级表面 |
| parchment-200 | #E2E5EA | 云雾阴影，分割线 |
| parchment-300 | #CED3DB | 深云雾色，边框 |
| parchment-400 | #A9B0BC | 最深云雾色，禁用态 |

### 油墨色系 Ink

> 冷调墨灰，和云雾白搭配。没有暖褐色的陈旧感，更现代更干净。

| Token | 色值 | 用途 |
|-------|------|------|
| ink-900 | #1F2330 | 浓墨，主文字 |
| ink-700 | #3D4457 | 淡墨，次级文字 |
| ink-500 | #6B7280 | 浅墨，辅助说明 |
| ink-400 | #949BA8 | 极淡墨，占位符 |
| ink-300 | #B4BAC5 | 淡墨分割线 |
| ink-100 | #E2E5EA | 最淡，背景级 |

### 强调色 Graphite（石墨蓝）

> 低饱和。像石墨笔在纸上的蓝，不是屏幕上的饱和 UI 蓝。全系统唯一的彩色来源。

| Token | 色值 |
|-------|------|
| accent-50 → 900 | 从 #F4F5F8 到 #333A52 |
| **accent-600**（默认） | **#5A6590** |

### 语义色板（莫兰迪低饱和，像旧印章）

| 类型 | 浅色背景 | 主色 | 深色文字 |
|------|---------|------|---------|
| 成功（灰绿）| #F0F4F1 | #6B8F7A | #4A6B57 |
| 警告（灰琥珀）| #FAF6EE | #B58A5A | #8A653F |
| 错误（灰红）| #F7F0F0 | #B06A63 | #8A4A44 |

### 深雾色（深色模式背景）

> 云雾白的另一面——深夜雾色。冷灰蓝调，不发黄不发褐，干净现代。

| Token | 色值 | 用途 |
|-------|------|------|
| dark-fog-900 | #15171C | 最深的雾，页面背景 |
| dark-fog-800 | #1C1F26 | 深雾，次级背景 |
| dark-fog-700 | #262A33 | 卡片背景 |
| dark-fog-600 | #333842 | 次级表面 |
| dark-fog-500 | #454B58 | 边框 |

### 银墨色（深色模式文字）

> 冷调银灰，和深雾色搭配。不是纯白（太刺眼），是月光白。

| Token | 色值 | 用途 |
|-------|------|------|
| dark-ink-100 | #ECEEF2 | 银白墨，主文字 |
| dark-ink-300 | #C0C6D1 | 次级文字 |
| dark-ink-500 | #8690A0 | 辅助文字 |
| dark-ink-700 | #5A6374 | 占位符 |

---

## 第二层：Semantic Tokens（语义层）

> 按用途命名的「角色」token。组件引用语义层，不直接引用色板层。换主题/换深色模式只改语义层的值。

**命名规则：用途而非外观。** `surface-muted` 而不是 `light-gray`，`text-primary` 而不是 `dark-gray`。

### 背景 Semantic Surface

| Token | 浅色默认 → 深色默认 | 用途 |
|-------|-------------------|------|
| surface-page | parchment-50 → dark-fog-900 | 页面最底层 |
| surface-card | parchment-0 → dark-fog-700 | 卡片、弹窗 |
| surface-muted | parchment-100 → dark-fog-800 | 次级表面、输入框背景 |
| surface-subtle | parchment-200 → dark-fog-600 | 三级、按下态 |
| surface-accent | accent-50 → rgba(90,101,144,0.15) | 强调色背景 |

### 文字 Semantic Text

| Token | 浅色 → 深色 | 用途 |
|-------|------------|------|
| text-primary | ink-900 → dark-ink-100 | 标题、正文 |
| text-secondary | ink-700 → dark-ink-300 | 副标题、次要说明 |
| text-tertiary | ink-500 → dark-ink-500 | 辅助说明、元信息 |
| text-placeholder | ink-400 → dark-ink-700 | 占位符 |
| text-accent | accent-600 → accent-400 | 链接、强调文字 |

### 边框 Semantic Border

| Token | 浅色 → 深色 | 用途 |
|-------|------------|------|
| border-default | parchment-200 → dark-fog-500 | 默认边框 |
| border-muted | parchment-100 → dark-fog-600 | 次级边框 |
| border-focus | accent-500 → accent-400 | 聚焦态边框 |
| border-accent | accent-600 → accent-400 | 强调边框 |

### 为什么要三层？

```
改主题色 → 只改 Palette 的 accent-600 值 → Semantic 自动变 → 所有组件自动变
改深色模式 → 只改 Semantic 的 dark 覆盖 → 组件代码零改动
改一个组件的颜色 → 只改 Component Token → 不影响其他组件
```

每层只对上一层负责，不会牵一发动全身。

---

## 第三层：Component Tokens（组件层）

> 组件级 token 是「一个组件自己的属性值」。它引用语义层，不直接碰色板。改一个组件的外观只动这一层，不影响其他组件。

**命名规则：`组件-属性-状态`**。如 `button-bg-hover`（按钮-背景-悬停态）。

### 为什么组件不能直接引语义 token？

语义 token 是「全局角色」，组件是「局部实现」。直接用语义 token 的后果：
- 想单独调 Button 的 hover 色，会牵连所有用同 token 的组件
- 组件样式散落在语义层，无法一眼看出组件的完整样式
- 换组件实现时，找不到哪些 token 属于它

Component Tokens 把每个组件的样式「封起来」，改组件只动自己的文件。

### 核心组件 Tokens

**Button**

| Token | 默认值（引用语义）| 用途 |
|-------|------------------|------|
| button-bg-default | interaction.accent | primary 背景 |
| button-bg-hover | interaction.accent-hover | primary 悬停 |
| button-bg-pressed | interaction.accent-pressed | primary 按下 |
| button-bg-secondary | surface.muted | secondary 背景 |
| button-bg-secondary-hover | surface.subtle | secondary 悬停 |
| button-text-primary | text.on-accent | primary 文字 |
| button-text-secondary | text.primary | secondary 文字 |
| button-radius | rounded.full | 胶囊形 |
| button-height-sm | 32px | sm 高度 |
| button-height-md | 40px | md 高度 |
| button-height-lg | 48px | lg 高度 |
| button-padding-x | spacing 系统（14/20/24px）| 左右内边距 |

**Input / Textarea / Select**

| Token | 默认值 | 用途 |
|-------|--------|------|
| field-bg | surface.card | 输入区背景 |
| field-bg-disabled | surface.muted | 禁用背景 |
| field-border | border.default | 默认边框 |
| field-border-focus | border.focus | 聚焦边框 |
| field-border-error | border.error | 错误边框 |
| field-text | text.primary | 输入文字 |
| field-placeholder | text.placeholder | 占位符 |
| field-radius | rounded.lg | 圆角 |
| field-height | 42px (md) | 高度 |
| field-padding-x | 14px | 左右内边距 |
| field-label | typography.label | 标签样式 |
| field-helper | typography.caption | 辅助文字样式 |

**Card**

| Token | 默认值 | 用途 |
|-------|--------|------|
| card-bg | surface.card | 卡片背景 |
| card-border | border.muted | 边框 |
| card-border-hover | border.default | 悬停边框 |
| card-border-selected | border.accent | 选中边框 |
| card-radius | rounded.xl | 圆角 |
| card-padding | 24-32px | 内边距 |

**Modal / Drawer**

| Token | 默认值 | 用途 |
|-------|--------|------|
| overlay-bg | rgba(15, 17, 22, 0.5) | 遮罩 |
| panel-bg | surface.card | 面板背景 |
| panel-radius | rounded.xl | 圆角 |
| panel-shadow | shadow.lg | 阴影 |
| panel-padding | 32px | 内边距 |
| panel-width-sm | 400px | sm 宽 |
| panel-width-md | 560px | md 宽 |
| panel-width-lg | 720px | lg 宽 |

**Table**

| Token | 默认值 | 用途 |
|-------|--------|------|
| table-header-bg | surface.muted | 表头背景 |
| table-row-bg | surface.card | 行背景 |
| table-row-hover | surface.muted | 行悬停 |
| table-row-selected | surface.accent | 行选中 |
| table-row-divider | border.muted | 行分隔线 |
| table-row-height | 48px (Comfortable) / 36px (Compact) | 行高 |
| table-header-text | text.tertiary | 表头文字 |

### 引用链验证

```css
/* Component Token → Semantic → Palette */
.parchment-btn--primary {
  background: var(--button-bg-default);   /* → interaction.accent → accent-600 */
}
.parchment-btn--primary:hover {
  background: var(--button-bg-hover);     /* → interaction.accent-hover → accent-500 */
}
```

改 Button 的 hover 色：只改 `--button-bg-hover` 的值，其他组件零影响。
改全局主题：只改 Palette 或 Semantic，所有组件跟随。

### Component Tokens 与密度的关系

密度系统通过覆盖组件 token 实现，不通过语义层：

```css
[data-density="compact"] {
  --button-height-md: 32px;   /* 40 → 32 */
  --field-height: 34px;       /* 42 → 34 */
  --table-row-height: 36px;   /* 48 → 36 */
  --card-padding: 24px;       /* 32 → 24 */
}
```

密度是「组件自己的事」，所以放在组件层覆盖。

---

## 排版系统 Typography

### 字体族三套

| 族 | 字体 | 用途 |
|----|------|------|
| **Serif 衬线** | Source Serif Pro / Noto Serif SC / Songti SC | 大标题、引言、引用块、长文阅读 |
| **Sans 无衬线** | SF Pro Text / PingFang SC | 正文、UI 元素、导航、按钮 |
| **Mono 等宽** | SF Mono / JetBrains Mono | 代码、数字、ID、命令 |

**核心设计选择**：大标题用衬线（纸张感、内容感），UI 控件用无衬线（清晰、高效），代码用等宽。两套字体搭配是 Parchment 的识别特征。

### 字体角色 Typography Roles

| 角色 | 字号 | 字重 | 行高 | 字距 | 字体族 | 用途 |
|------|------|------|------|------|--------|------|
| display-xl | 96px | 600 | 1.15 | -0.02em | serif | 英雄区主标题 |
| display-lg | 60px | 600 | 1.15 | -0.01em | serif | 产品页主标题 |
| display-md | 36px | 600 | 1.15 | -0.01em | serif | 区块大标题 |
| heading-lg | 24px | 600 | 1.3 | 0 | sans | 内容大标题 |
| heading-md | 20px | 600 | 1.3 | 0 | sans | 内容中标题 |
| heading-sm | 16px | 600 | 1.3 | 0 | sans | 小标题 |
| lead | 20px | 300 | 1.65 | 0 | serif | 引言、副标题 |
| body-lg | 18px | 400 | 1.65 | 0 | sans | 大正文 |
| body-md | 16px | 400 | 1.65 | 0 | sans | 标准正文 |
| body-sm | 14px | 400 | 1.5 | 0 | sans | 小正文 |
| caption | 12px | 400 | 1.5 | 0 | sans | 辅助文字 |
| caption-strong | 12px | 500 | 1.5 | 0.02em | sans | 强调辅助 |
| label | 12px | 500 | 1.5 | 0.02em | sans | 表单标签 |
| mono | 14px | 400 | 1.5 | 0 | mono | 代码 |
| mono-sm | 12px | 400 | 1.5 | 0 | mono | 小代码 |

### 内容排版 Prose（长文阅读规范）

长文阅读是 Parchment 的核心场景。所有文档、笔记、文章页面必须遵守以下排版规范：

**正文**
- 行高 1.65（宽松阅读）
- 段落间距 1.25em
- 行长控制：65-75 字符 / 行（约 720px 最大宽度）
- 首段不缩进

**标题层级**
- h1：36px 衬线 600，上间距 2em，下间距 0.8em
- h2：24px 衬线 600，上间距 1.8em，下间距 0.6em
- h3：20px 无衬线 600，上间距 1.5em，下间距 0.5em
- h4：16px 无衬线 600，上间距 1.2em，下间距 0.4em（heading-sm）

**引用块 Blockquote**
- 左侧 3px 墨线装饰
- 左侧内边距 1.25em
- 衬线斜体
- 颜色淡一级（text-secondary）
- 上下间距 1.5em

**代码**
- 行内代码：等宽字体 + 浅纸色背景 + 4px 圆角 + 微内边距
- 代码块：浅纸色背景 + 8px 圆角 + 1.25em 内边距 + 横向滚动 + 上下间距 1.5em

**列表**
- 左内边距 1.5em
- 列表项间距 0.5em
- 行高同正文 1.65

**分割线**
- 1px 淡墨线
- 上下间距 2em

**中英文混排**
- 中文与英文/数字之间留一个空格（「使用 AI 工具」）
- 中文与英文之间不加空格的情况：全角标点旁（「AI。」）
- 中文字体 PingFang SC / Noto Serif SC，英文用 Source Serif Pro
- 英文单词保持完整，不拆词换行（word-break: normal）

**标点**
- 中文标点全角（，。！？：；「」）
- 英文标点半角（, . ! ? : ;）
- 中文引号用「」''，不用英文引号
- 书名号《》只在书、刊、剧名用
- 省略号用……（两个三点），不用...

**数字与单位**
- 数字用半角阿拉伯数字（2026 年，3 个）
- 千位分隔跟随 locale
- 单位与数字间空格（10 MB、3 秒）
- 百分比：45%

**行内代码 / 快捷键**
- 行内代码：等宽字体 + 浅纸色背景 + 4px 圆角 + 微内边距
- 快捷键：⌘K 用等宽字体 + 浅灰底 + 圆角，和行内代码区分（无代码语义）
- 长代码块：横向滚动 + 不自动折行

**图片与图表**
- 图片最大宽度 100%，居中
- 图表与正文间距 1.5em，图表标题（caption）12px tertiary 居中
- 图片 alt 必填

**标题层级**
- 标题不被孤立：标题后至少跟一行正文
- 标题不跳级：h2 → h3 → h4 逐级，不 h2 → h4
- 长文档每 2-3 屏内容至少一个标题（扫描友好）

---

## 间距 & 布局 Spacing & Layout

### 间距尺度（4px 基准）

0 → 4 → 8 → 12 → 16 → 20 → 24 → 32 → 40 → 48 → 64 → 80 → 96 → 128 px

**使用规则**：
- 组件内间距：8-16-24
- 卡片内边距：32px (8)
- 组件间间距：16-24
- 区块间距：48-96
- 大章节间距：96-128

### 布局原则

- 内容居中，两侧大量留白
- 最大内容宽度：1280px（标准产品页），720px（阅读型）
- 12 列栅格（见「栅格系统 Grid System」章节）
- 垂直节奏统一：每个区块上下 padding 一致
- 对齐永远对齐到 4px 网格

### 断点

| 断点 | 宽度 | 命名 |
|------|------|------|
| sm | < 640px | 手机 |
| md | 640 - 1024px | 平板 |
| lg | 1024 - 1280px | 小桌面 |
| xl | > 1280px | 大桌面 |

### 栅格系统 Grid System

> 12 列栅格是布局的骨架。内容在栅格内流动，组件按列宽组合。

**基础结构**：容器（container）→ 行（row）→ 列（col）

```
┌── 容器 container（最大宽度 1280px，居中）──────┐
│ ┌ 行 row ──────────────────────────────────┐ │
│ │ 列(3)  列(3)  列(3)  列(3)              │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

**规格**：

| 项 | 值 |
|----|-----|
| 列数 | 12 |
| 列间距（gutter）| 24px（桌面）/ 16px（平板）/ 12px（移动） |
| 容器最大宽度 | 1280px（产品页）/ 720px（阅读页，不套栅格） |
| 容器左右边距 | 24px（桌面）/ 16px（移动） |
| 列宽 | 百分比弹性（12 等分），不设固定像素 |

**列分布示例**：

| 用途 | 列比例 |
|------|--------|
| 主内容 + 侧边栏 | 8 + 4 |
| 三栏卡片 | 4 + 4 + 4 |
| 四栏统计 | 3 + 3 + 3 + 3 |
| 双栏表单 | 6 + 6 |
| 宽主内容 + 窄侧栏 | 9 + 3 |

**响应式列行为**：

| 断点 | 行为 |
|------|------|
| xl（>1280px）| 12 列全量展开 |
| lg（1024-1280px）| 12 列，gutter 24px |
| md（640-1024px）| 12 列但可叠 2 层（col 自动折行），gutter 16px |
| sm（<640px）| 全部变单列（stack），gutter 12px |

**布局规则**：
- 页面最多 2 个栅格层级（页面级栅格 + 区块内栅格），不嵌套第三层
- 栅格内不用固定像素宽度
- 阅读型内容（正文、文章）不套栅格，用 720px 阅读容器
- 栅格只用于布局，不用来控制组件内部间距
- 断点切换时组件自身尺寸不变，只变排列

---

## 层级 & 阴影 Elevation

**没有阴影的界面。** 层级通过以下方式表达：

1. **纸张颜色切换** — 从 page 到 card 到 muted，纸色越浅层级越高
2. **1px 墨线** — border-default 强分割，border-muted 弱分割
3. **卡片边框** — 1px 淡边框 + 白底 = 浮起感
4. **毛玻璃** — 导航栏用 backdrop-blur

**唯一允许阴影的地方**：产品图片 / 摄影作品下方用 shadow-product（0 20px 40px rgba(44,41,37,0.08)），让图片像放在桌面上一样。

---

## 圆角 Shapes

圆角尺度：0 → 4 → 6 → 10 → 14 → 18 → 24 → full

- 按钮：full（胶囊形）
- 卡片 / 模态框：14px (xl)
- 输入框 / 选择器：10px (lg)
- 徽章 / 标签：full
- 图标按钮：full
- 复选框：6px (md)
- 代码块 / 小标签：8px（lg 偏小）

**规则**：按钮永远是胶囊形。越大的容器圆角越大。同一界面圆角不超过 3 种。

---

## 图标 Icons

**风格**：细线条，均匀线宽，几何精确。像铅笔速写，不像商业插画。

### 绘制规范

- 线宽：1.8pt stroke，fill="none"
- 端点：圆头（stroke-linecap: round）
- 连接：圆角连接（stroke-linejoin: round）
- 网格：图标绘制在 24×24 网格内，主体占 20×20（四周留 2px）
- 透视：单平面，无 3D 效果
- 颜色：默认继承文字颜色（text-primary / text-secondary）
- 交互态：hover 变深，active 变更深
- 禁止填充图标（选中态实心圆点等特定场景除外）
- 禁止 emoji、禁止彩色图标（accent 色可用于高亮状态）

### 尺寸档位

| 档位 | 尺寸 | 使用位置 |
|------|------|---------|
| xs | 14px | 紧凑表格、行内小图标 |
| sm | 16px | 默认尺寸，按钮、表单、徽章 |
| md | 20px | 导航、工具栏、列表项 |
| lg | 24px | 大图标、页面空状态 |
| xl | 32px | 欢迎页、结果页主图标 |

**规则**：
- 同一上下文只用一种尺寸，不混用
- 图标按钮：sm 档（28×28px 按钮内 16px 图标）
- 尺寸变化时按 2px 步进（16→20→24），不出现奇数尺寸

### 图标类型

| 类型 | 用途 | 风格 |
|------|------|------|
| 操作图标 | 新建、保存、删除、导出 | 线条，中性色 |
| 导航图标 | 首页、搜索、设置、账户 | 线条，中性色 |
| 状态图标 | 成功、警告、错误、信息 | 线条 + 语义色 |
| 内容图标 | 文档、图片、视频、链接 | 线条，中性色 |

### 图标清单（核心集）

**操作类**：新建（+）、编辑（铅笔）、保存、删除（垃圾桶）、复制、导出、下载、上传、分享、更多（⋯）、关闭（×）、添加、移除、重命名、打印

**导航类**：首页、搜索、设置（齿轮）、账户（人形）、通知（铃铛）、收藏（星）、返回、前进、菜单、关闭面板

**内容类**：文档（文件）、图片、视频、音频、链接、代码、表格、日历、文件夹、标签、笔记、列表

**状态类**：成功（✓ 圆）、警告（! 三角）、错误（× 圆）、信息（i 圆）、帮助（? 圆）

**编辑类**（内容工具专用）：加粗、斜体、下划线、标题、列表、引用、代码块、图片插入、链接插入、撤销、重做、查找、替换、附件、检查（拼写）

### 图标按钮规则

- 图标按钮：纯图标无文字，必须有 aria-label 或 title
- 图标 + 文字按钮：图标在文字左侧（16px），间距 8px
- 图标仅作装饰时 aria-hidden="true"
- 图标颜色变化不能是唯一的状态反馈（配合背景变化）

### 无障碍

- 功能性图标必须有 aria-label（「删除文件」不是「删除」）
- 装饰性图标 aria-hidden="true" + focusable="false"
- 状态图标必须配文字（颜色不是唯一信息载体）
- 图标与文字同用时，图标可标记为装饰

---

## 动效设计 Motion

> 动效不是装饰，是信息。动效告诉用户「发生了什么」「从哪里来」「到哪里去」。
>
> Parchment 的动效原则：克制、有目的、让人感觉快，而不是让人看动效。

### 设计原则

- **动效服务于功能**。没有明确目的的动效一律砍掉。
- **快于人眼感知**。微交互 100-150ms，页面过渡 250-300ms。感觉不到存在但感觉顺畅。
- **缓动不是线性的**。所有动效用 cubic-bezier 缓动曲线，不用 linear。
- **一致的节奏**。全系统用一套 duration 和 easing token，不每个组件各搞各的。
- **尊重系统偏好**。用户开了「减少动态效果」（prefers-reduced-motion）就全关。
- **硬件加速**。只动画 transform 和 opacity，不动画 width/height/top/left。

### Duration Tokens 时长令牌

| Token | 值 | 用途 | 示例 |
|-------|----|------|------|
| --motion-duration-instant | 100ms | 瞬间反馈，几乎无过渡 | 按钮按下、开关切换 |
| --motion-duration-fast | 150ms | 微交互 | hover 态、focus 环 |
| --motion-duration-base | 200ms | 标准过渡 | 折叠展开、tab 切换 |
| --motion-duration-slow | 300ms | 页面/面板过渡 | 模态框进出、侧边栏 |
| --motion-duration-entrance | 350ms | 入场动画 | 新页面进入、卡片出现 |

**规则**：
- 大多数组件用 fast 或 base
- 只有大面积/大位移的动效用 slow 及以上
- 超过 400ms 的动效必须有充分理由（很少有）
- 循环动画（spinner、骨架屏）单独定义周期

### Easing Tokens 缓动曲线

| Token | 曲线 | 用途 | 感觉 |
|-------|------|------|------|
| --motion-easing-default | cubic-bezier(0.4, 0, 0.2, 1) | 默认，大多数动效 | 自然加速减速 |
| --motion-easing-in | cubic-bezier(0.4, 0, 1, 1) | 入场（从静止到运动） | 渐进加速 |
| --motion-easing-out | cubic-bezier(0, 0, 0.2, 1) | 出场（从运动到静止） | 渐进减速 |
| --motion-easing-hold | cubic-bezier(0.2, 0, 0, 1) | 快速弹出（tooltip、popover） | 先快后稳 |

**选曲线的规则**：
- 元素出现（进入视图）→ easing-out：开始快，结束慢，让人觉得「弹出来」
- 元素消失（离开视图）→ easing-in：开始慢，结束快，让人觉得「收回去」
- 双向切换（tab、折叠）→ easing-default：对称自然

### 动效分类 & 规范

#### 1. 微交互 Micro-interactions

按钮、输入框、开关等小元素的状态变化。

- **时长**：100-150ms
- **曲线**：easing-default
- **触发**：hover / focus / pressed / selected
- **动画属性**：background-color、border-color、transform (scale)、opacity
- **示例**：
  - 按钮 hover：背景色 150ms 过渡
  - 按钮 pressed：scale(0.98) + 背景变暗，100ms
  - 开关切换：圆点位移 150ms easing-default

#### 2. 展开折叠 Expand / Collapse

手风琴、下拉菜单、详情展开等。

- **时长**：200ms
- **曲线**：easing-out
- **动画属性**：height + opacity 组合
- **注意**：
  - 展开时 easing-out（从 0 到有，感觉弹出来）
  - 折叠时 easing-in（从有到无，感觉收回去）
  - 内容不随高度挤压文字（避免文字重排跳动）
  - 箭头图标同步旋转 180°，同时长

#### 3. 浮层进出 Overlay Entrance / Exit

模态框、下拉菜单、tooltip、popover 等。

**进入**：
- opacity: 0 → 1
- translateY: 4px → 0 或 scale: 0.96 → 1
- 时长：Modal/Drawer 用 slow（300ms），Tooltip/Popover 用 base（200ms）
- 曲线：easing-out

**离开**：
- opacity: 1 → 0
- translateY: 0 → -4px 或 scale: 1 → 0.98
- 时长：150-200ms
- 曲线：easing-in

**遮罩（backdrop）**：
- opacity: 0 → 0.5
- 时长：200ms
- 比容器先淡入，比容器后淡出

#### 4. 页面过渡 Page Transition

路由切换、视图切换。

- **时长**：slow（300ms）
- **动画类型**：
  - 淡入淡出（最简单，最常用）
  - 水平滑动（有前后关系时，比如详情←列表）
  - 垂直滑动（上下层级，比如模态层）
- **规则**：
  - 不要做炫技的页面切换动画
  - 淡入淡出是默认，够用了
  - 前进和后退的动画方向相反

#### 5. 列表动画 List Animation

列表项的添加、删除、重排。

- **添加**：opacity 0→1 + translateY 20px→0，200ms easing-out
- **删除**：opacity 1→0 + height 从有到无，150ms easing-in
- **重排**：FLIP 技术，transform 位移，200ms easing-default
- **规则**：
  - 多项同时出现时用 stagger 错峰（每项延迟 30ms）
  - 不要让列表项一个个从很远的地方飞进来

#### 6. 加载动画 Loading Animation

spinner、骨架屏、进度条。

**Spinner**：
- 大小：16px（小按钮）/ 20px（默认）/ 32px（大/全屏）
- 动画：旋转 1s linear 无限循环
- 样式：accent 色圆环，一端透明

**骨架屏微光**：
- 动画：shimmer 从左到右扫过，1.5s linear 无限循环
- 微光颜色：从透明到白色半透明再到透明
- 不要让骨架屏闪得太明显（克制的微光）

**进度条**：
- 确定进度：宽度从 0 到 100%，200ms per 更新
- 不确定进度：左移右移来回的条纹动画，1.5s 循环

### 不要做的动效

- 不要 3D 翻转、弹性回弹这类「炫技动效」
- 不要循环的背景动画（干扰注意力）
- 不要页面滚动视差（性能差 + 恶心）
- 不要超过 500ms 的单步动效
- 不要所有元素都有动效（有动效=有信息，都动=都没信息）

### 无障碍 & 性能

**减少动态效果**：
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**性能保证**：
- 只动画 `transform` 和 `opacity`（GPU 加速）
- 避免动画 `width`、`height`、`top`、`left`、`margin`（触发重排）
- 大量元素同时动画时，用 `will-change` 提示浏览器（但不要滥用）
- 低端设备上自动降级动效

---

## 组件库 Components

> 每个组件完整文档包含六部分：Anatomy（解剖）/ Usage（用法）/ Variants & Sizes（变体与尺寸）/ States（状态）/ Content Guidelines（内容指南）/ Accessibility（无障碍）/ Tokens（引用的语义 token）。
>
> 所有组件引用 Semantic Tokens，不直接引用 Palette。

### Button 按钮

**组件描述**：触发即时操作的交互元素。Parchment 的按钮永远是胶囊形。

#### Anatomy 解剖

```
┌──────────────────────────────────┐
│  [icon]  Button Label  [icon]   │  ← 内容区（图标可选，左右各一个）
└──────────────────────────────────┘
  ← padding-x →             ← padding-x →
         ←── content ──→
```

| 部分 | 名称 | 说明 |
|------|------|------|
| 容器 | container | 胶囊形容器，决定尺寸和背景 |
| 前置图标 | leading icon | 可选，文字左侧 |
| 文字标签 | label | 必须，动词开头 |
| 后置图标 | trailing icon | 可选，文字右侧 |

#### Usage 用法

**Do**
- 一个页面最多 1 个 primary 按钮（主 CTA）
- 按钮文字用动词开头（「保存」「创建」「删除」「下载」）
- 同一行的按钮按重要性从右到左排列（primary 在最右）
- 危险操作用 danger 变体，并加二次确认
- 加载中显示 spinner 图标，文字保持不变或变「处理中」

**Don't**
- 不要在一个按钮里放两个以上的图标
- 不要用按钮做导航（用链接或 nav item）
- 不要把按钮做得太宽（宽度由内容决定，最多占满容器）
- 不要在 primary 按钮旁边放另一个 primary 按钮
- 不要用图标按钮承载主要操作（图标按钮只用于次要/工具操作）

#### Variants & Sizes 变体与尺寸

**变体**

| 变体 | 背景 | 文字 | 适用场景 |
|------|------|------|---------|
| primary | accent-600 | white | 主要操作、主 CTA |
| secondary | surface-muted | text-primary | 次要操作、取消、返回 |
| tertiary | transparent | text-accent | 三级操作、链接式按钮 |
| danger | error-500 | white | 危险操作、删除 |
| ghost | transparent | text-primary | 工具栏、取消（与 secondary 选一个风格统一） |

**尺寸**

| 尺寸 | 高度 | 左右内边距 | 字号 | 适用场景 |
|------|------|-----------|------|---------|
| sm | 32px | 14px | 13px | 表格操作、标签页 |
| md | 40px | 20px | 15px | 默认尺寸，表单、弹窗 |
| lg | 48px | 24px | 16px | 营销页、Hero 区 |

**图标按钮尺寸**

| 尺寸 | 尺寸 | 图标大小 |
|------|------|---------|
| sm | 28×28 | 16px |
| md | 36×36 | 18px |
| lg | 44×44 | 20px |

#### States 状态

| 状态 | 视觉表现 | 触发条件 |
|------|---------|---------|
| Default | 默认颜色 | 正常可点击 |
| Hover | 背景色微亮/微暗一级 | 鼠标悬停 |
| Pressed | 背景色微暗一级 | 鼠标按下 / 触摸按下 |
| Focus | 2px accent 外边框 + 2px 间距 | 键盘聚焦 |
| Disabled | 50% 透明度，cursor: not-allowed | 不可操作 |
| Loading | spinner 图标 + 文字变灰或不变 | 异步操作中 |

**状态过渡**：150ms cubic-bezier(0.4, 0, 0.2, 1)

#### Content Guidelines 内容指南

- 文案用动词 + 名词的结构：「保存更改」「删除文件」「导出数据」
- 不超过 6 个字（中文），英文不超过 3 个单词
- 危险操作明确说出后果：「删除项目」而不是「移除」
- 加载中用「处理中…」「保存中…」，不要只显示 spinner
- 确认按钮用动作词，不用「确定」「是的」这种模糊词

#### Accessibility 无障碍

- 使用原生 `<button>` 元素，不要用 div 模拟
- 图标按钮必须有 `aria-label` 或 `title` 属性
- 加载状态设置 `aria-busy="true"`
- 禁用状态用 `disabled` 属性，不要只用 CSS 样式
- 支持 Enter 和 Space 键触发
- 触摸目标最小 44×44px（移动端）

#### Tokens 引用

```
background → semantic.interaction.accent / semantic.surface.muted
color → semantic.text.on-accent / semantic.text.primary / semantic.text.accent
borderRadius → rounded.full
padding → spacing 系统
fontSize → typography.fontSize
transition → motion.duration.fast / motion.easing.default
```

---

### Input 输入框

**组件描述**：单行文本输入控件。用于收集用户文本数据。

#### Anatomy 解剖

```
Label
┌──────────────────────────────────┐
│ [icon]  placeholder text    [x]  │
└──────────────────────────────────┘
Helper text / Error message
```

| 部分 | 名称 | 说明 |
|------|------|------|
| 标签 | label | 上方标签，说明输入什么 |
| 前置图标 | leading icon | 可选，搜索/邮箱等图标提示 |
| 输入区 | input field | 主要输入区域 |
| 后置操作 | trailing action | 可选，清除按钮/密码可见切换 |
| 辅助文字 | helper text | 下方说明，默认 tertiary 色 |
| 错误提示 | error message | 错误态红色文字 |

#### Usage 用法

**Do**
- 标签始终可见（不要只靠 placeholder）
- 输入框宽度应该暗示预期的输入长度（手机号短、地址长）
- 聚焦时边框变 accent 色，清晰明确
- 错误态显示具体原因，不说「输入无效」
- 有默认值时预填，减少用户输入

**Don't**
- 不要在输入框内放标签（浮动标签慎用，Parchment 不推荐）
- 不要用 placeholder 替代标签（placeholder 会消失）
- 不要在输入框里塞太多图标（最多左右各一个）
- 不要在用户输入过程中就报红（失焦后再验证）
- 不要混用不同高度的输入框在同一个表单里

#### Variants 变体

| 变体 | 外观 | 适用场景 |
|------|------|---------|
| Default | 白底 + 1px 边框 | 表单、弹窗 |
| Filled | 浅灰底 + 无边框 | 搜索、筛选栏 |
| Underline | 只有底部边线 | 极简表单、登录页 |

**尺寸**

| 尺寸 | 高度 | 左右内边距 | 字号 |
|------|------|-----------|------|
| sm | 36px | 12px | 13px |
| md | 42px | 14px | 15px |
| lg | 48px | 16px | 16px |

#### States 状态

| 状态 | 边框 | 文字色 | 辅助元素 |
|------|------|--------|---------|
| Default | border-default | text-primary | placeholder: text-placeholder |
| Hover | 边框深一级 | text-primary | — |
| Focus | border-focus (accent) | text-primary | 无 glow，只用边框颜色 |
| Filled | border-default | text-primary | 标签保持可见 |
| Error | border-error | text-error | 下方红色错误提示 |
| Disabled | 背景变灰，边框降一级 | text-placeholder | 50% 透明度 |
| Read-only | 无边框，透明底 | text-primary | — |

#### Content Guidelines 内容指南

- 标签用名词，不加冒号：「邮箱」「密码」「姓名」
- 标签字数控制在 2-4 个字
- placeholder 给示例，不说「请输入…」：「name@example.com」而不是「请输入邮箱」
- 错误提示说清楚原因 + 怎么办：「密码至少需要 8 位」而不是「密码格式错误」
- 辅助文字说明格式要求或用途，不要重复标签

#### Accessibility 无障碍

- 使用原生 `<input>` 元素
- 用 `<label for>` 关联标签，不要只用 placeholder
- 错误态设置 `aria-invalid="true"` 和 `aria-describedby` 指向错误文字
- 必填字段标记 `required` 属性
- 支持 Tab 键聚焦，Enter 键提交
- 自动聚焦到表单第一个输入框（模态框内）

#### Tokens 引用

```
background → semantic.surface.card / semantic.surface.muted
borderColor → semantic.border.default / semantic.border.focus / semantic.border.error
color → semantic.text.primary
placeholderColor → semantic.text.placeholder
borderRadius → rounded.lg
height → 42px (md)
padding → 14px
label → typography.label (12px, 500, +0.02em)
helperText → caption (12px, 400)
```

---

### Select 下拉选择

**用途**：从预定义选项中选择一个值。选项超过 5 个时用 Select，少于 5 个用 Radio。

**Anatomy**：触发器（点击展开）+ 浮层列表 + 选项 + 选中标记（✓）+ 分隔线（分组时）

**变体**：
- **Default**：输入框外观，展开列表
- **Searchable**：可输入过滤选项，选项超过 10 个时推荐
- **Multi**：多选，选中项以 Tag 显示在触发器内

**尺寸**：sm(36px) / md(42px) / lg(48px)，与 Input 一致

**States**：default / hover / focus / open（浮层展开）/ error / disabled

**交互**：
- 点击触发器展开，点击外部或 ESC 收起
- 上下方向键导航，Enter 选中，ESC 关闭
- 打开时自动聚焦到当前选中项
- 多选时 Backspace 可删除最后一个选中项

**Content Guidelines**：选项文案用名词短语（「简体中文」），不加「选择」前缀；分组标题用 tertiary 色小字。

**Accessibility**：role="combobox" + aria-expanded + aria-activedescendant 指向当前高亮项。

**Tokens**：外观与 Input 一致（border-default / surface-card / rounded.lg），浮层 = surface-card + border + shadow.lg。

---

### Checkbox 复选框

**用途**：从一组选项中选择多个，或表示「是/否」的独立选项。

**Anatomy**：方块 + 标签文字 +（可选）辅助描述 +（可选）部分选中态

**尺寸**：方框 18×18px，圆角 6px (md)；触摸目标 ≥ 24×24px（加 padding 扩展）

**States**：
- unchecked：白底 + 1px border-default
- checked：accent-600 底 + 白色 ✓
- indeterminate：accent-600 底 + 白色短横线（部分选中）
- hover / focus / disabled：与 Input 规则一致

**用法**：
- 独立 Checkbox 表示开关式同意（「我同意条款」）
- 组内 Checkbox 垂直排列，间距 12px
- 全选逻辑：全选 checkbox 支持 indeterminate 态

**Content Guidelines**：标签用肯定句（「接收通知」），不用否定句（「不接收通知」）；标签放在方框右侧。

**Accessibility**：原生 input[type=checkbox] + label for 关联；组用 fieldset + legend 包裹；indeterminate 用 JS 属性设置。

---

### Radio 单选按钮

**用途**：从一组互斥选项中选择一个。选项 2-5 个时用 Radio，多于 5 个用 Select。

**Anatomy**：圆点 + 标签文字 +（可选）辅助描述

**尺寸**：圆点 18×18px；触摸目标 ≥ 24×24px

**States**：
- unchecked：白底 + 1px border-default
- checked：accent-600 实心圆点 + 白边内圈
- hover / focus / disabled：与 Checkbox 一致

**用法**：
- 选项互斥，默认选中一个（避免空选态）
- 垂直排列为主，2 个短选项可水平排列
- 选项 2-5 个，超过用 Select

**Content Guidelines**：选项之间用对比句式（「公开 / 仅自己可见」）；避免「是 / 否」式提问（用具体选项）。

**Accessibility**：原生 input[type=radio] + fieldset/legend 分组；方向键在组内切换。

---

### Switch 开关

**用途**：立即生效的二元设置。与 Checkbox 的区别：Switch 表示「状态开关」且立即生效，Checkbox 表示「选项选择」需随表单提交。

**Anatomy**：轨道（32×18px）+ 滑块（14×14px 圆点）+（可选）文字标签

**States**：
- off：border-default 轨道 + 白色滑块
- on：accent-600 轨道 + 白色滑块
- hover / focus / disabled

**交互**：点击或 Enter/Space 切换，滑块 150ms 位移动画。

**Content Guidelines**：标签用「名词 + 动词」结构（「自动保存」）；on 状态不要额外加文字（轨道颜色已经传达），off 状态可加「关」辅助。

**Accessibility**：role="switch" + aria-checked；不要只用颜色区分状态（滑块位置本身已传达）。

---

### Textarea 多行输入

**用途**：多行文本输入。2 行以上内容用 Textarea，1 行用 Input。

**Anatomy**：标签 + 文本区 +（可选）字符计数 +（可选）底部操作栏

**尺寸**：
- 最小高度 84px（3 行），默认 120px（4-5 行）
- 宽度默认 100% 容器
- 可拖拽右下角调整大小（resize: vertical，只允许垂直）

**States**：与 Input 一致（default / hover / focus / error / disabled / read-only）

**用法**：
- 长内容编辑（评论、描述、正文）用 Textarea
- 需要富文本时用编辑器组件，不用 Textarea
- 字符限制：显示「123 / 500」计数，超过 90% 时变 warning 色

**Content Guidelines**：placeholder 给示例不给指令；错误提示在失焦后出现；行数暗示预期内容长度（短评论 3 行，长正文 8 行）。

**Accessibility**：label for 关联；aria-describedby 指向计数和错误文字；支持 Cmd/Ctrl+Enter 提交（如有）。

---

### Form 表单容器

**用途**：组织一组表单字段，管理校验、提交和错误展示。

**Anatomy**：表单标题（可选）+ 字段组 +（可选）分段标题 + 提交操作栏 +（可选）底部说明

**结构规则**：
- 字段垂直排列，间距 20px（Comfortable）/ 16px（Compact）
- 标签在上，输入框全宽
- 必填标记：字段名后加红色 *，图例说明「* 为必填项」
- 错误显示：字段下方红色文字 + 字段边框变红 + aria-invalid
- 提交按钮固定在底部操作栏（左取消右提交）

**校验时机**：
- 失焦时校验单个字段（不打扰输入）
- 提交时校验全部字段
- 错误信息显示在对应字段下方，顶部显示错误汇总（可点击跳转）

**布局变体**：
- 单列：默认，最大宽度 560px
- 双列：字段 2 列排布，最大宽度 720px
- 分段：字段按主题分组，每组有小标题
- 内联：横向排列（搜索表单、筛选栏），字段间 12px

**Content Guidelines**：错误提示格式 = 原因 + 解决（「密码至少 8 位，请重新输入」）；提交按钮用具体动作（「保存更改」不用「提交」）；成功反馈用 Toast 或结果页。

**Accessibility**：form 元素语义化；错误时 aria-describedby 关联错误文字 + aria-invalid="true"；Enter 键在单输入表单可提交。

---

### Card 卡片

**组件描述**：承载一组相关信息的容器。靠纸色差异和细边框浮起，不靠阴影。

#### Anatomy 解剖

```
┌──────────────────────────────────┐
│  Card Header (可选)              │  ← 标题、操作按钮
│  ─────────────────────────────── │  ← 分割线（可选）
│                                  │
│  Card Body                       │  ← 主要内容区
│                                  │
│  ─────────────────────────────── │  ← 分割线（可选）
│  Card Footer (可选)              │  ← 操作按钮、元信息
└──────────────────────────────────┘
```

| 部分 | 名称 | 说明 |
|------|------|------|
| 头部 | header | 可选，标题 + 可选操作 |
| 内容区 | body | 必须，主要内容 |
| 底部 | footer | 可选，操作按钮/元信息 |
| 分割线 | divider | 可选，分隔各区域 |

#### Usage 用法

**Do**
- 卡片内的信息是同一主题的
- 卡片可以独立存在，也可以在网格中排列
- 卡片内边距统一 32px（小卡片 24px）
- 卡片之间用 16-24px 间距
- 可点击的卡片 hover 时边框微变 + 鼠标变手型

**Don't**
- 不要给卡片加阴影（Parchment 原则：无阴影界面）
- 不要在卡片里再嵌套卡片（最多两层，且内层用不同背景色区分）
- 不要用卡片承载表单的单一字段（用 form field）
- 不要让所有内容都在卡片里（页面本身就是最大的容器）
- 不要混用不同圆角和边框样式的卡片

#### Variants 变体

| 变体 | 外观 | 适用场景 |
|------|------|---------|
| Elevated | surface-card + 1px 边框 | 主要内容卡片、网格布局 |
| Filled | surface-muted + 无边框 | 次要信息、统计卡片 |
| Outlined | 透明底 + 1px 边框 | 信息展示、选项卡 |
| Plain | 透明底 + 无边框 | 列表项、紧凑布局 |

**尺寸**

| 尺寸 | 内边距 | 标题大小 | 适用场景 |
|------|--------|---------|---------|
| sm | 16-20px | 16px | 小部件、侧栏 |
| md | 24px | 18px | 默认，通用 |
| lg | 32px | 20px | 主内容区、营销卡 |

#### States 状态

| 状态 | 表现 | 触发条件 |
|------|------|---------|
| Default | 默认边框 | 正常 |
| Hover | 边框深一级 / 背景微变 | 鼠标悬停（可点击卡片） |
| Pressed | 背景变暗一级 | 按下时 |
| Selected | accent 色边框 + accent-soft 背景 | 选中态 |
| Disabled | 50% 透明度 | 不可操作 |
| Loading | 骨架屏遮罩 | 数据加载中 |

#### Content Guidelines 内容指南

- 卡片标题用名词短语，不超过 12 个字
- 卡片描述用 1-2 句话，不超过 40 字
- 操作按钮不超过 2 个（主 + 次）
- 元信息（时间、作者、标签）放在底部或右上角，用 tertiary 色
- 图片卡片的图片在上，文字在下，图片圆角与卡片一致

#### Accessibility 无障碍

- 可点击卡片用 `<button>` 或 `<a>` 包裹，不要用 div + onclick
- 卡片内有多个操作时，分别设 tab 焦点，不要整张卡一个焦点
- 使用 `aria-labelledby` 关联标题
- 加载状态用 `aria-busy="true"`
- 选中状态用 `aria-selected` 或 `aria-pressed`

#### Tokens 引用

```
background → semantic.surface.card / semantic.surface.muted
border → semantic.border.muted / semantic.border.accent
borderRadius → rounded.xl (14px)
padding → spacing.8 (32px) / spacing.6 (24px)
```

---

### Modal 模态框

**组件描述**：打断用户当前流程，聚焦处理单一任务的浮层容器。

#### Anatomy 解剖

```
   ┌──────────────────────────────────┐
   │  Modal Title            [close] │  ← Header
   │  ─────────────────────────────── │
   │                                  │
   │  Modal Body（主要内容）          │  ← Body
   │                                  │
   │  ─────────────────────────────── │
   │  [取消]              [确认操作]  │  ← Footer
   └──────────────────────────────────┘
              (遮罩层 backdrop)
```

| 部分 | 名称 | 说明 |
|------|------|------|
| 遮罩层 | backdrop | 半透明遮罩，点击可关闭 |
| 容器 | container | 白色卡片，居中显示 |
| 头部 | header | 标题 + 关闭按钮 |
| 内容区 | body | 表单/信息/确认内容 |
| 底部 | footer | 操作按钮组 |

#### Usage 用法

**Do**
- 只用于需要用户立即处理的关键操作
- 标题明确说明要做什么：「删除项目」「导出数据」
- 操作按钮放在底部右侧，主按钮在最右
- 按 ESC 键可以关闭
- 点击遮罩层可以关闭（确认类弹窗例外）
- 打开时自动聚焦到第一个输入框或主按钮

**Don't**
- 不要用模态框展示大量内容（应该用页面或抽屉）
- 不要在模态框里再开模态框（最多一层）
- 不要只有一个按钮的模态框（那是 alert，不是 modal）
- 不要没有关闭方式的模态框
- 不要用模态框做欢迎引导（用 onboarding 流程）

#### Variants 变体

| 变体 | 宽度 | 适用场景 |
|------|------|---------|
| sm | 400px | 确认框、简单表单 |
| md | 560px | 默认，大多数场景 |
| lg | 720px | 复杂表单、详情查看 |
| full | 90vw / max 960px | 大量内容、配置面板 |

**内容类型**：
- Confirmation 确认框 — 短文本 + 确认/取消
- Form 表单 — 输入表单 + 提交/取消
- Info 信息展示 — 只读内容 + 关闭

#### States 状态

| 状态 | 表现 |
|------|------|
| 进入动画 | opacity 0→1 + translateY(10px→0)，300ms ease-out |
| 离开动画 | opacity 1→0 + translateY(0→-5px)，200ms ease-in |
| 遮罩 | 50% 黑色透明度，背景模糊可选 |
| 加载 | 内容区遮罩 + spinner |

#### Content Guidelines 内容指南

- 标题用动词 + 名词：「删除项目」「编辑设置」「新建文档」
- 确认按钮说具体动作：「删除」「保存」「导出」，不说「确定」「是」
- 危险操作的确认框，用一句话说明后果：「删除后无法恢复」
- 正文不超过 3 行，再多应该用页面
- 表单类模态框字段不超过 6 个，多了用抽屉或分步表单

#### Accessibility 无障碍

- 打开时焦点 trap 在模态框内
- 按 ESC 关闭
- 关闭后焦点回到触发按钮
- 使用 `role="dialog"` 和 `aria-modal="true"`
- 用 `aria-labelledby` 指向标题
- 遮罩层 `aria-hidden="true"`
- 背后页面内容 `inert`（或滚动锁定 + 焦点管理）

#### Tokens 引用

```
background → semantic.surface.card
borderRadius → rounded.xl (14px) / 可选 18px
boxShadow → shadow.lg（极少使用阴影的场景之一）
padding → 32px
backdrop → rgba(0,0,0,0.5)
animation → duration.slow (300ms) / easing.out
```

---

### Table 表格

**组件描述**：结构化展示数据行和列的组件。用于数据密集的内容展示场景。

#### Anatomy 解剖

```
┌───────────────────────────────────────────┐
│  Header（可选）— 标题 / 筛选 / 操作按钮   │
├───────────────────────────────────────────┤
│  Column 1  │  Column 2  │  Column 3     │  ← thead
├───────────────────────────────────────────┤
│  Row 1-1   │  Row 1-2   │  Row 1-3      │  ← tbody
│  Row 2-1   │  Row 2-2   │  Row 2-3      │
│  ...       │  ...       │  ...          │
├───────────────────────────────────────────┤
│  Footer（可选）— 分页 / 统计 / 全选操作  │
└───────────────────────────────────────────┘
```

| 部分 | 名称 | 说明 |
|------|------|------|
| 头部 | table header | 列标题行 |
| 正文 | table body | 数据行 |
| 底部 | table footer | 分页、统计 |
| 工具栏 | toolbar | 可选，筛选/搜索/批量操作 |

#### Usage 用法

**Do**
- 数据结构清晰，行列对齐工整
- 列标题用名词，居中或左对齐
- 第一列通常是名称/标题，左对齐
- 数字右对齐，状态居中对齐
- 重要数据用粗体或 accent 色标记
- 行高 44-48px，保证可读性

**Don't**
- 不要在表格里放太多列（超过 8 列考虑横向滚动或精简）
- 不要给单元格加竖线（Parchment 风格只有横线）
- 不要用斑马纹（靠行间距和分割线已经够清晰了）
- 不要让表头消失（滚动时表头固定）
- 不要用表格做布局（用 CSS Grid）

#### Variants 变体

| 变体 | 外观 | 适用场景 |
|------|------|---------|
| Default | 浅灰表头 + 细横线 | 数据展示、列表页 |
| Borderless | 无边框，只有行分隔 | 极简风格、卡片内表格 |
| Compact | 行高 36px，更小字号 | 数据密集场景 |
| Zebra | 隔行变色（Parchment 不推荐） | 超宽表格辅助阅读 |

#### States 状态

| 状态 | 表现 |
|------|------|
| Default | 白色背景 + 底部分割线 |
| Hover | 整行背景变 surface-muted |
| Selected | 整行 accent-soft 背景 |
| Empty | 空状态提示 + 图标 |
| Loading | 骨架屏行 |
| Error | 错误提示 + 重试按钮 |

**列状态**：
- 排序中：标题旁显示排序箭头
- 筛选中：标题旁显示筛选图标
- 可调整列宽：右侧拖拽手柄

#### Content Guidelines 内容指南

- 列标题 2-6 个字，不用动词
- 单元格内容简洁，不超过两行
- 日期用「2026-08-11」或「3 分钟前」格式，保持统一
- 数字用等宽字体或 tabular figures，方便对齐比较
- 状态用徽章 + 文字，不要只用颜色点

#### Accessibility 无障碍

- 使用语义化 `<table>` + `<thead>` + `<tbody>` + `<th>`
- 表头单元格 `scope="col"` 或 `scope="row"`
- 可排序的列设置 `aria-sort`
- 选中行设置 `aria-selected`
- 支持键盘导航（方向键移动焦点）
- 空状态有文字说明，不只显示空白
- 分页控件有 `aria-current` 标记当前页

#### Tokens 引用

```
headerBackground → semantic.surface.muted
rowBackground → semantic.surface.card
rowDivider → semantic.border.muted
hoverBackground → semantic.surface.muted
selectedBackground → semantic.surface.accent
headerText → semantic.text.tertiary (12px, 500, +0.02em)
cellText → semantic.text.primary (14px)
rowHeight → 48px (default) / 36px (compact)
```

---

### Toast 消息通知

**用途**：操作结果的短暂反馈，2-4 秒后自动消失。不打断用户操作。

**Anatomy**：图标 + 文案 +（可选）操作按钮 +（可选）关闭按钮

**变体**：
- success：灰绿图标 + 操作结果文案
- error：灰红图标 + 失败原因
- warning：灰琥珀图标 + 警告信息
- info：石墨蓝图标 + 中性信息
- loading：spinner 图标 + 处理中（不自动消失）

**结构规则**：
- 位置：右下角堆叠（桌面端）/ 顶部居中（移动端）
- 单条 Toast 包含：图标 16px + 文案 + 可选操作
- 堆叠间距 8px，最多同时显示 3 条
- 出现动画：slide-in-right + fade，200ms ease-out
- 消失动画：fade-out，150ms ease-in
- 自动消失：success/info 2 秒，warning 4 秒，error 4 秒

**Content Guidelines**：文案格式 = 动作 + 结果（「已保存」「发布成功」）；错误带原因（「保存失败：网络连接中断」）；操作按钮用动词（「撤销」「重试」）。

**Accessibility**：role="status"（非错误）/ role="alert"（错误）；自动消失的 Toast 要能被键盘聚焦暂停（hover 暂停计时）。

**Tokens**：surface-card 底 + border + shadow.lg，图标用语义色。

---

### Progress 进度条

**用途**：显示任务完成度或加载进度。

**变体**：
- **Determinate 确定进度**：有明确百分比，宽度动画
- **Indeterminate 不确定进度**：任务时间未知，条纹循环滑动
- **Circular 环形**：紧凑空间显示百分比

**尺寸**：
- 线形：4px（细）/ 8px（标准）/ 12px（粗）
- 环形：20px（按钮内）/ 32px（页面）/ 48px（大屏）

**States**：
- 默认：surface-muted 轨道 + accent-600 进度
- 完成 100%：进度变 success 灰绿
- 错误中断：进度变 error 灰红
- disabled：50% 透明度

**用法**：
- 明确耗时（上传、导入）用 Determinate
- 未知耗时（连接中、等待响应）用 Indeterminate
- 进度变化用百分比文字辅助（「上传中 45%」）

**Content Guidelines**：文案格式 = 动作 + 百分比（「上传中 45%」）；完成提示用「完成」不用「100%」。

**Accessibility**：role="progressbar" + aria-valuemin/max/now；进度变化用 aria-valuenow 更新。

---

### Drawer 抽屉

**用途**：从侧边滑出的面板，承载较多内容或操作。比 Modal 轻，不打断上下文。

**Anatomy**：遮罩（可选）+ 侧滑面板 + 头部（标题 + 关闭）+ 内容区 +（可选）底部操作栏

**位置**：右侧（默认，操作面板）/ 左侧（导航）/ 底部（移动端筛选）

**尺寸**：
- 右侧：360px（窄）/ 480px（标准）/ 720px（宽）
- 移动端：85% 屏宽

**交互**：
- 滑入动画 300ms ease-out，滑出 200ms ease-in
- ESC 关闭，点击遮罩关闭
- 焦点 trap 在面板内，关闭后焦点回到触发器
- 面板内滚动独立于页面

**用法**：
- 表单字段 6 个以上用 Drawer（Modal 只适合 ≤ 6 字段）
- 详情查看、配置面板、通知列表用 Drawer
- 需要保留上下文的操作（编辑器设置）用 Drawer

**Content Guidelines**：标题说明面板目的（「高级设置」）；底部操作 = 取消 + 主操作。

**Accessibility**：role="dialog" + aria-modal="false"（Drawer 不阻断页面阅读，但焦点仍应 trap）。

**Tokens**：surface-card + border + shadow.lg，宽度按档位。

---

### Spinner 加载指示器

**用途**：局部或全局的加载中状态。圆形旋转指示。

**尺寸**：16px（按钮内）/ 20px（默认）/ 32px（区块）/ 48px（全屏）

**样式**：accent 色圆环，顶部开口，旋转 1s linear 循环。3/4 圆弧，缺口朝右上。

**用法**：
- 按钮加载：spinner 替换图标位，文字保留（「保存中…」）
- 区块加载：区块中央 20px spinner + 可选文字
- 全屏加载：页面中央 48px spinner + 文字
- 加载 > 1 秒时考虑换 Skeleton（信息密度更高）

**Content Guidelines**：纯 spinner 无文字时加 aria-label="加载中"；配合文字用「加载中…」「处理中…」。

**Accessibility**：aria-busy="true"；全屏加载时焦点移入加载区域。

---

### Badge 徽章

**用途**：标记状态、分类、数量。小胶囊形文字标签。

**变体**：accent / success / warning / error / gray（默认）
**尺寸**：md（12px，3px 10px padding）/ lg（13px，5px 12px padding）
**风格**：soft（浅色底+深色字，默认）/ solid（实心底+白字）/ outline（边框+透明底）

**用法**：状态用颜色+文字双重标识，不只靠颜色。数字徽章用 solid 风格。

**无障碍**：用 `aria-label` 说明语义，比如 `aria-label="3 条未读消息"`。

---

### Tabs 标签页

**用途**：在同一页面内切换不同内容视图。

**变体**：line（底部下划线，默认）/ pill（胶囊背景）/ card（卡片式）
**尺寸**：md（高度 40px）/ sm（高度 32px）

**布局规则**：
- 标签数量 2-6 个，超出用横向滚动或「更多」下拉
- 默认选中第一个
- 切换动画 200ms，下划线滑动过渡
- 禁用的标签置灰，不可点击

**内容区**：切换时内容区平滑淡入（opacity 150ms），不要有跳动。

**无障碍**：role="tablist" + role="tab" + aria-selected，支持左右方向键切换。

---

### Dropdown Menu 下拉菜单

**用途**：点击触发后显示一组操作或选项。

**结构**：触发器（按钮/图标）+ 浮层菜单 + 菜单项 + 分隔线 + 子菜单（可选）

**菜单项类型**：
- 默认项：文字 + 可选前置图标 + 可选快捷键
- 危险项：红色文字（删除、移除）
- 禁用项：灰色文字，不可选
- 分隔线：1px 横线，用于分组

**交互**：
- 点击触发器打开，点击外部或按 ESC 关闭
- 打开时自动聚焦到第一项
- 上下方向键导航，Enter 选中
- 带箭头的菜单项 hover 展开子菜单

**样式**：白底 + 细边框 + 8px 圆角 + 轻量阴影（极少用阴影的组件之一），内边距 4px。

---

### Accordion 手风琴

**用途**：折叠展开内容，节省页面空间。常用于 FAQ、设置分组、详情展开。

**结构**：标题栏（左标题 + 右箭头图标）+ 内容区（展开时显示）

**变体**：
- single：同时只能展开一个
- multiple：可同时展开多个

**交互**：点击标题栏切换展开/收起，箭头图标 180 度旋转 200ms，内容区高度动画 200ms ease-out。

**样式**：默认无边框，只有底部分割线。标题 44px 高，展开内容上下 padding 16px。

**无障碍**：role="button" + aria-expanded + aria-controls，支持 Enter/Space 切换。

---

### Pagination 分页

**用途**：长列表分页浏览。

**结构**：上一页 + 页码（含省略号）+ 下一页 + 每页数量选择器（可选）+ 跳转到第 X 页（可选）

**规则**：
- 页码按钮 32×32px，圆角 6px
- 当前页 accent 实心背景 + 白字
- 省略号不可点击
- 首尾始终显示，当前页前后各显示 1-2 个页码
- 上一页/下一页用文字+箭头图标，比页码按钮稍宽

**禁用态**：第一页时「上一页」禁用，最后一页时「下一页」禁用。

---

### Alert 提示框

**用途**：页面内展示重要信息，不打断用户操作。

**变体**（4 种）：
- info：蓝色，说明提示
- success：绿色，成功提示
- warning：黄色，警告提示
- error：红色，错误提示

**结构**：左侧图标 + 标题 + 描述（可选）+ 右侧操作按钮/关闭按钮（可选）

**样式**：左侧 4px 彩色竖条 + 浅色背景 + 1px 同色边框。内边距 16px。

**规则**：
- 可以被关闭，关闭后不显示
- 操作按钮不超过 1 个
- 标题加粗，描述常规字重
- 同一页面最多 2 个 alert，多了用 Toast

---

### Skeleton 骨架屏

**用途**：数据加载过程中，用页面结构的占位轮廓减少等待焦虑。

**类型**：
- 文本骨架：灰色横线，模拟文字行
- 卡片骨架：灰色块，模拟卡片
- 表格骨架：灰色行，模拟表格
- 头像骨架：圆形/方形灰色块

**样式**：浅灰色背景 + 从左到右的微光扫过动画（1.5s 循环，linear）。

**规则**：
- 骨架结构要和真实内容结构一致（形状、大小、位置）
- 不要全页都有骨架，只有动态加载的部分有
- 加载时间 < 300ms 时不显示骨架，避免闪烁
- 不要用 spinner 代替骨架（骨架信息密度更高）

---

### Breadcrumb 面包屑

**用途**：显示当前页面在层级结构中的位置，提供向上导航。

**结构**：层级 1 / 层级 2 / ... / 当前页

**样式**：
- 分隔符用「/」或 chevron-right 图标，tertiary 色
- 可点击的层级用 accent 色或 primary 色
- 当前页用 primary 色加粗，不可点击
- 字号 13-14px

**规则**：
- 超过 4 层时中间用「…」省略，只保留首尾 + 当前
- 移动端只显示上一级和返回按钮
- 始终放在页面顶部、标题上方

**无障碍**：nav aria-label="breadcrumb" + ol/li 结构 + aria-current="page"。

---

### Slider 滑块

**用途**：在连续范围内选择一个值（或两个值的区间）。

**类型**：单值滑块 / 区间滑块（两个手柄）

**结构**：轨道（底色）+ 进度条（已选部分）+ 手柄（圆形拖拽点）+ 刻度（可选）+ 值标签（可选）

**样式**：
- 轨道高度 4px，圆角 2px
- 进度条 accent 色
- 手柄 18px 直径，白底 + accent 色边框（2px）
- hover/拖拽时手柄 22px 直径

**交互**：点击轨道任意位置跳转到该位置，拖拽手柄实时改变值，显示气泡提示当前数值。

**无障碍**：role="slider" + aria-valuemin/max/now + 方向键微调。

---

### Tooltip 文字提示

**用途**：鼠标悬停或聚焦时，显示额外的说明信息。

**规则**：
- 只用来补充说明，不放重要信息（键盘用户和触屏用户可能看不到）
- 内容简短，1-2 行，不超过 40 字
- 延迟 300ms 显示，避免误触发
- 12px 文字，深色底 + 白字 + 小箭头
- 四个方向：上/下/左/右，默认在上
- 鼠标移出后 100ms 内消失

**不要用来做**：操作按钮的主要说明、表单错误提示、导航。这些用 Popover 或 Alert。

---

### Command Palette 命令面板

**用途**：全局快捷键触发的搜索+命令面板，快速执行操作或跳转。

**触发**：⌘K / Ctrl+K（全局标准）

**结构**：
- 搜索输入框（自动聚焦）
- 结果列表（分组显示）
  - 命令组：可执行操作
  - 导航组：跳转页面
  - 文件组：快速打开文件
- 底部快捷键提示

**样式**：
- 居中或靠顶部显示
- 宽度 560-640px
- 白底 + 细边框 + 轻微阴影
- 搜索框无框，只有底部分割线
- 结果项 40px 高，hover/focus 时浅灰背景
- 快捷键用 mono 字体 + 浅灰底 + 圆角

**交互**：
- 上下键导航，Enter 执行，ESC 关闭
- 输入实时过滤结果
- 支持模糊搜索

---

### Callout 标注块

**用途**：在正文中突出显示一段补充信息。内容工具的差异化组件，Notion 高频。

**Anatomy**：图标（可选）+ 标题（可选）+ 正文 + 背景块

**变体**（按信息类型）：
- **Note 注释**：石墨蓝图标 + 淡灰背景——补充说明
- **Tip 提示**：灰绿图标 + 淡灰绿背景——小技巧
- **Warning 警告**：灰琥珀图标 + 淡琥珀背景——注意事项
- **Error 错误**：灰红图标 + 淡灰红背景——错误说明

**样式**：
- 背景：语义色 50 级（极淡），正文区 surface-muted
- 圆角 10px，内边距 16px
- 图标 20px，在左上角
- 标题 14px 600，正文 14px 常规
- 正文内行高 1.6

**用法**：
- 正文中需要停顿强调的信息用 Callout
- 不打断阅读流（区别于 Modal）
- 内容超过 3 行时要有标题
- 同一页面最多 3 个 Callout，多了信息就没重点了

**Content Guidelines**：标题用名词短语（「使用技巧」）；正文一句话说完，不超过 2 句。

**无障碍**：正文结构语义化；图标装饰性 aria-hidden；深色模式下背景用对应深雾色。

---

### 代码块 Code Block

**用途**：展示代码、命令、配置片段。

**Anatomy**：工具栏（语言标签 + 复制按钮）+ 代码区 +（可选）行号

**样式**：
- 背景：ink-900 深色底（代码区永远深色，保证对比）
- 文字：mono 14px，行高 1.6
- 圆角 10px，内边距 16px
- 工具栏：语言标签 12px tertiary + 复制按钮（右侧）
- 语法高亮：低饱和配色（不刺眼的 mono 高亮）

**语法高亮色板**（低饱和）：
- 关键字：#77819A（石墨蓝）
- 字符串：#6B8F7A（灰绿）
- 注释：#6B7280（灰）+ 斜体
- 函数名：#B58A5A（灰琥珀）
- 数字：#7D6B8F（灰紫）

**用法**：
- 单行命令用 inline code，多行用 Code Block
- 行号：超过 10 行的代码显示行号
- 复制按钮：悬停显示，点击后变「已复制」

**无障碍**：复制按钮 aria-label="复制代码"；代码区用 pre + code 语义；行号 aria-hidden。

---

### 编辑器工具栏 Editor Toolbar

**用途**：内容编辑器的格式操作栏（加粗、标题、列表、引用等）。

**Anatomy**：分组工具按钮 + 分隔线 +（可选）右侧扩展操作

**结构规则**：
- 高度 40px，与 Input 一致
- 工具按钮 28×28px，图标 16px
- 分组间 8px 分隔线（垂直 1px，muted）
- 激活态：accent-soft 背景 + accent-600 图标
- hover：surface-muted 背景
- 支持 Tab 聚焦，←→ 在按钮间导航

**工具栏分组**：
- 文本格式：加粗 / 斜体 / 下划线 / 删除线
- 块格式：标题 / 引用 / 代码块 / Callout
- 列表：无序 / 有序 / 待办
- 插入：图片 / 链接 / 分隔线 / 附件
- 编辑：撤销 / 重做

**快捷键**：工具栏按钮必须配快捷键（⌘B 加粗等），快捷键在 Tooltip 中显示。

**规则**：
- 不折叠到「更多」菜单（编辑操作要一次可见）
- 移动端：工具栏可以横向滚动，不折叠
- 激活状态必须可见（不只是图标颜色）

---

### 专注模式 Focus Mode

**用途**：隐藏 UI 干扰，让用户专注内容本身。内容工具的差异化体验。

**Anatomy**：无工具栏、无侧栏、无导航——只剩编辑区 + 极简光标

**规则**：
- 触发：快捷键（⌘Shift+F）或工具栏按钮
- 隐藏：导航、侧栏、工具栏、状态栏、浮层
- 保留：编辑区（最大宽度 720px 居中）、最小化光标位置指示
- 退出：ESC 或快捷键
- 进入/退出动画：200ms fade，不位移（避免焦点丢失）

**变体**：
- **专注编辑**：只留编辑区
- **打字机模式**：当前行始终居中（写作场景）
- **阅读模式**：无编辑 UI 的只读排版

**Content Guidelines**：进入时显示一次性提示「专注模式已开启，按 ESC 退出」（3 秒自动消失）。

---

### Avatar 头像

**用途**：展示用户身份。内容工具的个人工作台、协作、评论场景高频。

**Anatomy**：圆形/圆角方形图片 +（可选）在线状态点 +（可选）姓名缩写

**尺寸**：xs 24px / sm 32px / md 40px / lg 56px / xl 80px

**内容优先级**：头像图片 → 姓名缩写（前 2 字）→ 默认占位图标。图片加载失败自动降级为缩写。

**变体**：
- 图片头像：圆形裁剪，object-fit: cover
- 缩写头像：背景 surface-muted，文字 12-20px 随尺寸
- 状态点：右下角 8px 圆点（在线绿/离线灰），仅协作场景用

**规则**：同一列表内头像尺寸统一；头像不加边框（除非深色背景上需要）；点击进入个人主页。

**无障碍**：img 有 alt="用户姓名"；纯装饰头像 alt=""。

---

### Chip 标签

**用途**：短文本标记，可被点击、选中、删除。与 Badge 的区别：Chip 是可交互的（选择、过滤、输入），Badge 是纯展示。

**Anatomy**：文本 +（可选）前置图标 +（可选）删除按钮（×）

**尺寸**：高度 28px（默认）/ 24px（紧凑），padding 0 12px，13px 文字

**States**：default / hover / selected（accent-soft 底 + accent 文字）/ disabled / removable

**用法**：
- 筛选条件、标签输入、多选回显用 Chip
- 超过 8 个字截断或换行，不横向溢出
- 可删除的 Chip：hover 显示 × 按钮，点击删除

**Content Guidelines**：文本用名词短语（「摄影」「婚礼」），不加「筛选：」前缀。

**无障碍**：可删除 Chip 的 × 按钮有 aria-label="移除 {标签}"；selected 态用 aria-pressed。

---

### Upload 上传

**用途**：上传文件（图片、视频、附件）。内容工具核心组件。

**Anatomy**：拖拽区域 + 浏览按钮 +（可选）文件列表 + 进度指示

**变体**：
- **拖拽区 Dropzone**：虚线边框 + 图标 + 「拖拽文件到这里，或点击选择」
- **按钮式 Button**：上传按钮 + 隐藏 input[type=file]
- **内联式**：图片上传后直接内联预览（编辑器场景）

**结构规则**：
- 拖拽区高度 120-160px，虚线 1.5px border-muted，hover 变 accent
- 文件类型/大小限制说明放拖拽区下方
- 上传中：文件列表显示文件名 + Progress
- 上传成功：文件名 + ✓ 图标 + 缩略图（图片）
- 失败：文件名 + 灰红错误 + 重试按钮
- 可删除：每个文件有移除按钮

**文件类型**：图片（jpg/png/webp/gif）、视频（mp4）、文档（pdf/doc/md）按产品需要配置，限制说明必须可见。

**Accessibility**：拖拽区同时支持键盘（Enter 打开选择器）；input[type=file] 不可见但可聚焦；进度用 role=progressbar。

---

### Nav 导航

**用途**：应用级导航——顶部栏、侧边栏、二级导航。

**Anatomy**：Logo/产品名 + 导航项 +（可选）用户区 +（可选）操作按钮

**变体**：
- **顶部栏 Top Bar**：高度 56px，Logo 左、导航中、操作右
- **侧边栏 Sidebar**：宽度 240px（展开）/ 64px（收起），可折叠
- **标签导航 Tab Nav**：页面内二级导航

**导航项规格**：
- 高度 36px，圆角 8px，padding 0 12px
- 图标 16px + 文字 14px，间距 8px
- 当前项：surface-muted 背景 + 600 字重（不用彩色底）
- hover：surface-muted 背景
- 分组标题：12px tertiary 大写（仅侧边栏）

**规则**：
- 导航层级最多 3 层，超过用折叠树
- 当前页高亮不用 accent 色背景（克制原则：彩色只留给 CTA）
- 移动端：顶部栏保留 Logo + 汉堡菜单，侧边栏抽屉化
- 收起态：只显图标，hover 显示 Tooltip

**Accessibility**：nav 语义 + aria-current="page" 标记当前项；移动端抽屉 ESC 关闭 + 焦点管理。

---

### Stepper 步骤条

**用途**：多步骤流程（引导、注册、复杂表单分步）。

**Anatomy**：步骤指示器（编号/图标 + 标签）+ 连接线 + 内容区 + 操作区

**规格**：
- 步骤指示器：32px 圆（未完成 border-default / 当前 accent / 完成 success 灰绿 + ✓）
- 连接线：2px，完成段 accent，未完成段 border-muted
- 标签：14px，当前步骤 600 字重
- 操作区：左「上一步」次按钮，右「下一步/完成」主按钮

**状态**：待开始（灰）/ 进行中（accent）/ 已完成（灰绿 ✓）/ 错误（灰红）

**规则**：
- 步骤 3-7 个，超过分两步表单而不是更多步骤
- 已完成步骤可回点跳转；当前步骤不可跳过
- 每步校验通过才允许进入下一步
- 移动端：步骤条可横向滚动，或只显示当前步骤 + 进度条

**Accessibility**：aria-current="step" 标记当前步骤；步骤区域 role=group + aria-labelledby。

---

### Date Picker 日期选择

**用途**：选择日期或日期区间。

**Anatomy**：触发器（输入框外观）+ 日历浮层 + 月份导航 + 日期网格

**变体**：单日期 / 日期区间（两个端点）/ 日期时间（含时间选择）

**日历规格**：
- 网格 7 列（日一二三四五六），日期格 36×36px
- 今天：accent 色文字 + 细边框
- 选中：accent-600 圆角背景 + 白字
- 区间：两端 accent-600，中间 accent-soft 背景
- 禁用日期：50% 透明度，不可选
- 月份导航：‹ 上月 2026年8月 下月 ›

**触发器**：与 Input 同尺寸同边框，右侧日历图标，值格式「2026-08-12」。

**无障碍**：role=grid + aria-selected + 方向键移动焦点；触发按钮 aria-haspopup="dialog"。

---

### Tree 树形控件

**用途**：层级结构展示与导航（文件夹、笔记大纲、分类）。

**Anatomy**：树节点（展开箭头 + 图标 + 标签 + 操作）+ 缩进连接线

**规格**：
- 节点高度 32px，圆角 6px
- 缩进 16px/级
- 展开箭头：12px，展开时旋转 90°
- 选中节点：surface-muted 背景
- hover：surface-muted 背景

**交互**：
- 点击箭头展开/收起
- 点击节点选中
- 键盘：↑↓ 移动，← 收起/到父级，→ 展开/到子级，Enter 选中
- 可拖拽排序（如笔记层级）需明确拖拽手柄

**规则**：
- 层级超过 5 层考虑改用侧边大纲折叠
- 懒加载：大量子节点按需加载，加载中显示 spinner
- 展开状态记忆：切换页面后保持

**Accessibility**：role=tree + aria-expanded + aria-selected；焦点管理在节点间。

---

## 设计模式 Design Patterns

> 组件是零件，模式是组装说明书。Design Patterns 告诉你「常见的页面类型应该用哪些组件、怎么组合、遵循什么布局原则」。
>
> Parchment 为内容类产品定义了 5 种核心页面模式。

### 设计原则

- **模式是建议，不是模板**。说明结构和原则，不规定具体像素。
- **同一个问题只用一种模式**。不要同时存在 3 种列表页布局。
- **模式解决 80% 的场景**。特殊场景可以定制，但要有充分理由。
- **模式内的组件调用顺序固定**。例如表单页永远是：标题 → 描述 → 表单项 → 底部操作栏。

---

### 1. 列表页模式 List Page

**用途**：展示一组同类型的数据条目，支持筛选、搜索、排序、分页。

**典型场景**：笔记列表、项目列表、文章列表、用户列表。

**页面结构**

```
┌─────────────────────────────────────────────────────┐
│  Page Header                                       │
│  · 页面标题（可选副标题）                           │
│  · 主操作按钮（「新建」「创建」）                    │
├─────────────────────────────────────────────────────┤
│  Toolbar                                            │
│  · 搜索框（左）                                      │
│  · 筛选器 / 标签切换（中）                          │
│  · 视图切换（列表/网格）（右）                      │
├─────────────────────────────────────────────────────┤
│  数据区                                             │
│  · 表格 / 卡片网格 / 列表（三选一）                  │
│  · 空状态（无数据时）                               │
│  · 骨架屏（加载中）                                 │
├─────────────────────────────────────────────────────┤
│  Pagination（可选）                                 │
│  · 分页器（右对齐）                                  │
│  · 批量操作（左对齐，选中时显示）                    │
└─────────────────────────────────────────────────────┘
```

**布局规则**
- 页面标题 + 主按钮在同一行，左标题右按钮
- 工具栏高度 48px，元素垂直居中
- 表格占满容器宽度，左右不留额外边距
- 筛选条件超过 3 个时，收纳到「高级筛选」中
- 数据为空时显示空状态 + 引导操作

**变体**
- **表格列表 Table List** — 数据密集、多字段对比
- **卡片网格 Card Grid** — 视觉为主、图片多
- **简单列表 Simple List** — 标题 + 一行描述，极简

**Do**
- 列表项数量默认 20 条/页
- 默认按更新时间倒序
- 行高随密度模式调整（Comfortable 48px，Compact 36px）
- 操作列放在最右侧，不超过 3 个操作

**Don't**
- 不要在列表页塞太多操作（超过 3 个放更多菜单里）
- 不要默认开启全部筛选条件
- 不要没有空状态的列表页

---

### 2. 详情页模式 Detail Page

**用途**：展示单个实体的完整信息，支持查看和编辑。

**典型场景**：笔记详情、项目详情、文章详情、用户资料页。

**页面结构**

```
┌─────────────────────────────────────────────────────┐
│  Header                                             │
│  · 返回按钮 + 页面标题                                │
│  · 面包屑（可选）                                    │
│  · 操作按钮组（右）                                  │
├──────────────────────┬──────────────────────────────┤
│                      │                              │
│  Main Content        │  Side Panel                  │
│  · 标题区            │  · 元信息卡片                │
│  · 正文内容          │  · 状态卡片                  │
│  · 操作区            │  · 相关链接                  │
│                      │                              │
└──────────────────────┴──────────────────────────────┘
```

**布局规则**
- 主内容区 : 侧边栏 = 2:1 或 3:1
- 主内容最大宽度 720px（阅读型）或 800px（表单型）
- 侧边栏宽度 320-360px，放元信息、状态、快捷操作
- 标题区字号 24-32px，衬线字体
- 操作按钮放在右上角，主操作在最右

**变体**
- **阅读型详情** — 文档、文章、笔记。大段文字，行长控制
- **数据型详情** — 订单、项目、用户。多字段结构化展示
- **编辑器详情** — 富文本编辑器、配置表单。左右分栏或上下布局

**Do**
- 详情页的返回按钮要能回到列表页，并且保留列表的筛选状态
- 保存按钮始终可见（固定顶部或底部）
- 长内容用分段标题组织，不要一整坨

**Don't**
- 不要把侧边栏放得比主内容还重
- 不要在详情页藏太多功能（功能应该在列表页或操作面板里）
- 不要没有返回路径的详情页

---

### 3. 表单页模式 Form Page

**用途**：收集用户输入，完成创建或编辑任务。

**典型场景**：新建项目、编辑设置、注册表单、配置向导。

**页面结构**

**单列表单（简单）**

```
┌─────────────────────────────────────────────────────┐
│  页面标题 + 简短描述                                 │
├─────────────────────────────────────────────────────┤
│                                                      │
│  表单项（标签在上，输入框全宽）                       │
│  · 字段 1                                           │
│  · 字段 2                                           │
│  · ...                                              │
│                                                      │
├─────────────────────────────────────────────────────┤
│  [取消]                              [保存/提交]     │
└─────────────────────────────────────────────────────┘
```

**双列表单（复杂）**

```
┌─────────────────────────────────────────────────────┐
│  页面标题 + 描述                                     │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────┐  ┌─────────────┐                   │
│  │  字段 1     │  │  字段 2     │                   │
│  └─────────────┘  └─────────────┘                   │
│  ┌───────────────────────────────┐                  │
│  │  字段 3（全宽）                │                  │
│  └───────────────────────────────┘                  │
│  ...                                                │
│                                                      │
├─────────────────────────────────────────────────────┤
│  [取消]                              [保存并发布]     │
└─────────────────────────────────────────────────────┘
```

**分段表单**

字段按主题分组，每组有小标题。超过 8 个字段的表单必须分段。

```
基本信息
  ├─ 名称
  ├─ 描述
  └─ 分类

高级设置
  ├─ 权限
  ├─ 通知
  └─ 集成
```

**布局规则**
- 表单最大宽度 560px（单列）或 720px（双列）
- 标签在上，输入框全宽
- 字段垂直间距 20px（Comfortable）/ 16px（Compact）
- 底部操作栏左取消右确认
- 必填字段用星号标记，可选字段标「可选」

**Do**
- 表单字段按「用户填写顺序」排列，不是按重要性
- 相关字段放在一起（地址省市区放一组）
- 错误在提交后统一显示，不要边输边报
- 提交后有成功反馈（Toast 或结果页）
- 长表单有自动保存草稿

**Don't**
- 不要一屏超过 8 个字段（多分几栏或分步骤）
- 不要用下拉框放只有 2-3 个选项的字段（用单选按钮）
- 不要「重置」按钮（用户很少需要，容易误点）
- 不要让用户猜格式要求（错误提示说清楚）

---

### 4. 结果页模式 Result Page

**用途**：告知用户一个操作的结果——成功、失败、处理中。

**典型场景**：提交成功、支付成功、删除确认、加载失败、404 页面。

**页面结构**

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│                                                      │
│                    ○ 图标 / 插图                     │
│                                                      │
│                  标题（一句话结果）                   │
│                                                      │
│               描述（1-2 句话，说明详情）             │
│                                                      │
│            [主操作按钮]  [次操作按钮]                │
│                                                      │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**布局规则**
- 内容垂直居中，页面留白大
- 图标尺寸 64-80px
- 标题 24px，衬线或无衬线均可
- 描述 14-16px，secondary 色
- 按钮不超过 2 个，主按钮在左还是右看场景（成功页主操作在左更自然）

**变体**
- **成功页 Success** — 绿色图标 + 正向文案
- **错误页 Error** — 红色图标 + 说明原因 + 解决方案
- **加载中 Processing** — 动画 spinner + 进度条 + 预计时间
- **空状态 Empty** — 引导操作 + 「新建」按钮
- **404 / 不存在** — 友好文案 + 返回首页按钮

**Do**
- 标题说清楚发生了什么：「保存成功」「付款失败」「页面不存在」
- 描述告诉用户接下来怎么办：「返回列表」「重新尝试」「联系支持」
- 给一个明确的下一步操作按钮
- 错误态给出具体原因，不要只说「出错了」

**Don't**
- 不要用技术术语（比如「500 Internal Server Error」）
- 不要只有图标没有文字（颜色不是唯一的信息传达方式）
- 不要结果页停留时间太短用户来不及看（至少 2 秒或等用户点）

---

### 5. 看板 / 工作台模式 Dashboard

**用途**：概览信息 + 快捷入口 + 数据统计。用户打开应用看到的第一页。

**典型场景**：个人工作台、项目概览、数据仪表盘、管理后台首页。

**页面结构**

```
┌─────────────────────────────────────────────────────┐
│  Welcome 区（可选）                                  │
│  · 问候语 + 用户头像                                 │
│  · 今日摘要 / 一句话提示                              │
├─────────────────────────────────────────────────────┤
│  数据卡片网格（4 列或 3 列）                         │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                       │
│  │ ① │ │ ② │ │ ③ │ │ ④ │  统计数据                │
│  └────┘ └────┘ └────┘ └────┘                       │
├─────────────────────────────────────────────────────┤
│  ┌──────────────────────────┐ ┌───────────────────┐ │
│  │  最近活动 / 待办列表      │ │  快捷操作         │ │
│  │  （主内容区，占 2/3）     │ │  （侧栏，占 1/3） │ │
│  └──────────────────────────┘ └───────────────────┘ │
├─────────────────────────────────────────────────────┤
│  更多模块（按产品需求增加）                          │
│  · 图表区                                           │
│  · 最近访问                                         │
│  · 推荐内容                                         │
└─────────────────────────────────────────────────────┘
```

**布局规则**
- 数据卡片 4 列（桌面）/ 2 列（平板）/ 1 列（手机）
- 主内容 + 侧边栏 = 2:1 或 3:1 分栏
- 区块间距 32px
- 每个区块有标题 + 可选「更多」链接

**Do**
- 数据卡片上数字要大（32-40px），标签要小要淡
- 待办列表按优先级排序，未完成在前
- 快捷操作不超过 6 个
- 有数据就展示数据，没有就给引导

**Don't**
- 不要塞满数据卡片（超过 6 个就太多了）
- 不要每个模块都是一样高度的卡片（要有主次、有呼吸感）
- 不要没有空状态的看板（新用户不知道该干嘛）

---

### 模式与组件的关系

模式使用组件，组件被模式组合。层级关系：

```
Patterns 模式（页面级）
    ↓ 组合
Components 组件（按钮、表格、卡片…）
    ↓ 引用
Semantic Tokens 语义层（surface、text、border…）
    ↓ 引用
Palette Tokens 色板层（parchment、ink、accent…）
```

新增一个模式时，应该优先用已有组件组合。只有当所有现有组件都满足不了时，才考虑新增组件。

---

## 深色模式 Dark Mode

> 不是简单反色，是「云雾的另一面」——深雾色 + 银白墨。冷调、干净、不刺眼。

**核心规则**：
- 背景不是纯黑，是深雾色 #15171C（冷灰蓝调）
- 卡片比背景浅一级（#262A33），视觉上浮起
- 文字不是纯白，是银白墨 #ECEEF2（月光白，不刺眼）
- 强调色在深色模式下用 accent-400（稍亮一档，保持低饱和）
- 边框是深雾色（#454B58）

**切换机制**：只改 Semantic Tokens 的值，组件代码零改动。

```css
:root { --surface-page: #F6F7F9; --text-primary: #1F2330; }
.dark { --surface-page: #15171C; --text-primary: #ECEEF2; }
```

---

## 国际化 i18n / RTL

> Parchment 面向中英文市场，从第一天就要考虑国际化。不是「以后再说」，是组件开发时就做对。

### 语言支持

| 语言 | 优先级 | 说明 |
|------|--------|------|
| 简体中文 | P0 | 主市场，默认 |
| 英文 | P0 | 全球市场 |
| 繁体中文 | P1 | 港澳台市场 |
| 日语 / 韩语 | P2 | 后续扩展 |

**中英文差异处理**：
- 中文字体回退链：PingFang SC → Noto Sans SC → sans-serif
- 中文标点全角（，。！？），英文半角（, . ! ?）
- 数字在中英文中都保持半角
- 英文不自动换行规则（word-break: normal），中文允许（word-break: break-all 避免溢出）

### RTL 支持

**需要镜像的组件**：Input、Select、Dropdown、Tabs、Breadcrumb、Pagination、Slider、Drawer、Table、Toast、Tooltip、Command Palette

**镜像规则**（不要手动逐个翻转，用逻辑属性）：

| 物理属性 | 逻辑属性（RTL 自动镜像）|
|---------|----------------------|
| padding-left / right | padding-inline-start / end |
| margin-left / right | margin-inline-start / end |
| text-align: left / right | text-align: start / end |
| border-left / right | border-inline-start / end |
| 箭头方向 | 用逻辑方向图标（←→ 自动翻转）|

**需要人工处理的**：
- 图标方向语义：前进箭头在 RTL 里是 ←，用逻辑图标或翻转
- Slider 方向：从左到右 → 从右到左
- 时间轴 / 进度条：方向翻转
- 表格列顺序：首列在右

**实现**：设置 `dir="rtl"` 属性 + 逻辑属性 CSS，不用单独写一套 RTL 样式。

### 文本长度与布局

- 英文文案比中文长 30-50%，按钮宽度要预留
- 表单标签英文可能换行，label 不允许截断
- 固定宽度组件（Badge、Tag）英文要允许横向增长
- 测试：每个组件用最长文本（如「Notifications」）验证布局

### 日期 / 数字 / 时区

- 日期格式跟随 locale（2026-08-12 vs Aug 12, 2026）
- 数字分隔跟随 locale
- 时间显示本地时区
- 相对时间（3 分钟前）要 i18n 化

### 文案外置

- 所有界面文案走 i18n 文件，不硬编码在组件里
- 组件默认文案（placeholder、aria-label）也要外置
- 文案占位符：`{count}` 命名清晰（「{count} 个项目」）
- 复数处理：英文单复数（1 item / 2 items），中文无复数但格式保持兼容

---

## 无障碍 Accessibility

> Parchment 的目标是 WCAG 2.1 AA 全部通过，核心交互组件达到 AAA 部分通过。无障碍不是「加分项」，是发布前必须过的门禁。

### 对比度标准

**文字对比度（WCAG 1.4.3）**

| 文字类型 | 最小对比度 | 标准 |
|---------|-----------|------|
| 正文文字 | 4.5:1 | AA |
| 大号文字（≥24px 或 ≥19px 粗体）| 3:1 | AA |
| 辅助文字（caption、placeholder）| 4.5:1 | AA |
| 图标 / 图形 | 3:1 | AA（1.4.11）|

**Parchment 实测对比度表**

| 前景 | 背景 | 对比度 | 状态 |
|------|------|--------|------|
| ink-900 #1F2330 | parchment-50 #F6F7F9 | ~14:1 | 通过 |
| ink-700 #3D4457 | parchment-50 #F6F7F9 | ~9:1 | 通过 |
| ink-500 #6B7280 | parchment-50 #F6F7F9 | ~5.5:1 | 通过（正文可用）|
| ink-400 #949BA8 | parchment-50 #F6F7F9 | ~3.5:1 | 仅限占位符/禁用 |
| accent-600 #5A6590 | white | ~5.6:1 | 通过 |
| dark-ink-100 #ECEEF2 | dark-fog-900 #15171C | ~14:1 | 通过 |
| dark-ink-300 #C0C6D1 | dark-fog-900 #15171C | ~9:1 | 通过 |

**规则**：
- 正文和辅助文字必须用 ink-700 及以上（ink-500 只用于大号文字）
- ink-400 只允许出现在占位符和禁用态
- 新颜色加入色板前必须测对比度

### 键盘导航矩阵

| 组件 | 焦点进入 | 导航 | 触发 | 退出 |
|------|---------|------|------|------|
| Button | Tab | — | Enter / Space | Tab |
| Input / Textarea | Tab | — | 输入 | Tab |
| Select | Tab | ↑↓ 选项，Home/End 首尾 | Enter 选中，ESC 收起 | Tab 关闭 |
| Checkbox / Radio | Tab | 组内 ↑↓ | Space 切换 | Tab |
| Switch | Tab | — | Enter / Space 切换 | Tab |
| Tabs | Tab | ←→ 切换标签 | Enter / Space | Tab |
| Dropdown | Tab | ↑↓ 菜单项 | Enter 选中，ESC 关闭 | Tab / ESC |
| Modal / Drawer | 自动 trap | Tab 循环（不逃出）| ESC 关闭 | 关闭后回触发器 |
| Tooltip | 随宿主聚焦 | — | 自动显示 | 移出隐藏 |
| Slider | Tab | ←→ 微调，PgUp/PgDn 大步 | — | Tab |
| Pagination | Tab | ←→ 翻页 | Enter | Tab |
| Table | Tab | ←→↑↓ 单元格 | Enter | Tab |

**Focus 环**：
- 2px accent-500 外边框 + 2px 白色间距
- 不依赖 :hover 才显示焦点（键盘用户永远可见）
- 焦点环不可被 outline: none 去掉，除非有等价替代

### 屏幕阅读器清单

| 检查项 | 要求 |
|--------|------|
| 页面结构 | 语义化 HTML（header/nav/main/article/footer）|
| 标题层级 | h1 → h2 → h3 逐级，不跳级 |
| 表单 | label for 关联所有字段 |
| 错误提示 | aria-invalid + aria-describedby 关联 |
| 图片 | 功能性 alt，装饰性 alt="" |
| 图标按钮 | aria-label（「删除文件」）|
| 模态框 | role=dialog + aria-modal + aria-labelledby |
| 状态变化 | aria-live（Toast 用 polite，错误用 assertive）|
| 键盘焦点 | 焦点顺序 = 视觉顺序 |
| 表格 | th scope + caption 或 aria-label |
| 进度 | role=progressbar + aria-valuenow |
| 动态内容 | 内容出现后焦点移动或 aria-live 告知 |

### 触控目标

- 最小 44×44px（移动端）
- 紧凑密度下最小 32×32px（WCAG 2.2 的 24×24 是底线，Parchment 用更严的 32）
- 相邻目标间距 ≥ 8px（防止误触）
- 图标按钮通过 padding 扩展触控区，不靠图标本身尺寸

### 色盲友好

- 颜色永远不是唯一信息载体（图标 + 文字 + 颜色三重）
- 成功/错误不用红绿对比（配图标：✓ 和 ✗）
- 图表数据系列用形状/图案辅助区分
- 测试：用 grayscale 滤镜检查信息是否仍完整

### 常见误区

- outline: none 去掉焦点环 → 必须提供替代焦点样式
- 用 div 模拟按钮 → 用原生 button
- 点击区域只有图标本身大小 → 用 padding 扩展
- aria-label 全部大写 → 保持自然语言大小写
- 只用颜色区分状态 → 配文字或图标
- 模态框关闭后焦点丢失 → 焦点必须回触发器

---

## 数据可视化 Data Visualization

> 数据可视化不是把数字变成图，是让读者 3 秒内看懂「什么东西变了多少」。
>
> Parchment 的图表风格：克制、清晰、数据为主、装饰为零。没有 3D、没有渐变填充、没有炫技动画。

### 设计原则

- **数据墨水比最大化**。能去掉的装饰都去掉——网格线淡化、坐标轴精简、边框去掉。
- **颜色用来区分类别，不是装饰**。一个图表里最多 6 种颜色，超过用形状或图案辅助。
- **强调色只用在重点数据上**。大多数数据是灰色，只有想让用户看的那条是 accent 色。
- **文字层次分明**。标题 > 数据标签 > 坐标轴 > 辅助说明，用字号和字重区分。
- **图表类型固定**。同一类数据永远用同一种图，不要今天折线明天柱状。

### 图表色板 Chart Palette

**分类色板 Categorical（6 色）**

用于区分不同类别。最多 6 类，超过就该合并类别或换图表类型。全部低饱和，灰里透色。

| 序号 | 色值 | 名称 | 适合场景 |
|------|------|------|---------|
| 1 | #5A6590 | 石墨蓝（主色）| 默认第一序列、最重要的数据 |
| 2 | #8E6B62 | 陶土红 | 第二序列、对比数据 |
| 3 | #6B8F7A | 灰绿 | 增长、正面数据 |
| 4 | #B58A5A | 灰琥珀 | 警告、中性数据 |
| 5 | #7D6B8F | 灰紫 | 第五序列 |
| 6 | #5F7E8E | 灰蓝 | 第六序列 |

**使用规则**：
- 按顺序取色，不要挑着用
- 只有一个数据系列时，只用第 1 色（石墨蓝）
- 两个系列对比时，用第 1 色和第 2 色
- 正/负对比时，用第 3 色（灰绿）和第 4 色（灰琥珀）

**单色渐变色板 Sequential**

用于展示数值大小（热力图、地图着色等）。用 accent 色的透明度梯度。

| 级别 | 色值 | 说明 |
|------|------|------|
| 1 | rgba(90, 101, 144, 0.1) | 最浅 |
| 2 | rgba(90, 101, 144, 0.25) | |
| 3 | rgba(90, 101, 144, 0.4) | |
| 4 | rgba(90, 101, 144, 0.6) | |
| 5 | rgba(90, 101, 144, 0.8) | 最深 |

**发散色板 Diverging**

用于正负对比（增长 vs 下降、满意 vs 不满意）。两侧低饱和，中间灰。

| 级别 | 色值 | 含义 |
|------|------|------|
| -3 | #8E6B62 | 强负面 |
| -2 | #A98A82 | 中负面 |
| -1 | #C5ABA5 | 弱负面 |
| 0 | #E7E5E4 | 中性 |
| +1 | #A3BCAE | 弱正面 |
| +2 | #87A692 | 中正面 |
| +3 | #6B8F7A | 强正面 |

### 图表类型选择指南

| 想表达的关系 | 推荐图表 | 不要用 |
|-------------|---------|--------|
| 随时间变化的趋势 | 折线图 Line Chart | 柱状图（时间点少的时候可以） |
| 不同类别数量对比 | 柱状图 Bar Chart | 折线图、饼图 |
| 部分占整体的比例 | 饼图（≤5 份）/ 堆叠柱状图 | 3D 饼图、南丁格尔玫瑰图 |
| 两个变量的相关性 | 散点图 Scatter | 折线图 |
| 数据分布 | 直方图 Histogram / 箱线图 | 柱状图 |
| 进度/完成率 | 进度条 Progress Bar | 饼图、仪表盘 |
| 排名 | 横向柱状图 Bar Chart | 表格 |
| 地理数据 | 地图 Map | 表格 |

**铁律**：
- 时间序列 → 折线图（不要用柱状图做趋势）
- 类别对比 → 柱状图（不要用饼图做超过 5 份的对比）
- 占比 → 堆叠柱状图或简单饼图（不要用 3D 饼图）

### 图表组件规范

#### 通用结构

```
图表标题（左对齐，16px 600）
描述文字（可选，13px secondary 色）
┌─────────────────────────────────────┐
│  ↑ Y轴标签                          │
│  │                                  │
│  │  ── 数据系列 1                   │
│  │  ── 数据系列 2                   │
│  │                                  │
│  └──────────────────────────────→   │
│         X轴标签                     │
└─────────────────────────────────────┘
      图例（底部居中或右上）
      数据来源（右下，12px tertiary）
```

**边距**：图表内容区周围 24px 留白。
**背景**：透明或 surface-card，不要有底色。
**边框**：无边框，最多一条底部分割线。

#### 折线图 Line Chart

- 线条粗细：2px（主系列）/ 1.5px（其他系列）
- 数据点：默认不显示圆点，hover 时显示 6px 圆点
- 网格线：只有水平网格线，1px，极淡（border-muted）
- 坐标轴：只有 X 轴线，Y 轴不画线
- 刻度标签：12px，tertiary 色
- 填充区域：可选，0.1 透明度的同色渐变填充
- 动画：从左到右依次绘制，500ms easing-out（首次加载）

#### 柱状图 Bar Chart

- 柱子宽度：占间距的 60-70%，不要太粗也不要太细
- 圆角：顶部 2px 圆角，底部直角
- 颜色：单色（所有柱子同色）或分类色（每类一种）
- 数据标签：柱子顶部显示数值，12px 500
- 网格线：可选，水平方向辅助线
- 动画：从下往上生长，400ms easing-out

#### 饼图 Pie Chart

- 起始角度：12 点钟方向，顺时针排列
- 排序：从大到小排列
- 标签：外部引线标注 + 百分比
- 中心空洞：环形图（donut）时，中心可放总数或主要占比
- 最多 5 片，超过合并为「其他」
- 不要 3D、不要分离切片（除了强调某一片）

#### 进度条 Progress Bar

- 高度：4px（细）/ 8px（标准）/ 12px（粗）
- 圆角：full rounded
- 轨道颜色：surface-muted
- 进度颜色：accent-600（默认）/ success（完成 100%）
- 文字标签：左侧名称 + 右侧百分比，12px
- 动画：从 0 到目标值，500ms easing-out

### 交互规范

**Hover 提示 Tooltip**
- 鼠标悬停显示详细数据
- 深色底白字 + 小箭头
- 内容：数据系列名 + 数值 + 单位 + 时间/类别
- 12px 文字，行高 1.5
- 数字用等宽字体或 tabular figures

**空状态**
- 图表区域显示「暂无数据」文字 + 淡色占位线
- 不要显示空白画布

**加载状态**
- 骨架屏：灰线模拟图表形状
- 不要放 spinner 在图表中间（太突兀）

### 配色禁忌

- 不要用彩虹色板（rainbow palette）——类别多时颜色区分度差
- 不要只用颜色区分数据——加图案、形状、标签辅助（无障碍）
- 不要用大红大绿做对比（红绿配色色盲分不清）
- 不要给背景加渐变或纹理
- 不要在图表里加 emoji 或插图装饰

### 无障碍

- 颜色不是唯一的信息传达方式（标签 + 图案 + 文字）
- 图表有 text 或 aria-label 描述
- 数据表格作为备选（屏幕阅读器可读取）
- 对比度 ≥ 3:1（图表元素之间）
- 支持键盘导航聚焦数据点

---

## 密度系统 Density System

> 内容类产品有两种典型使用场景：阅读（宽松优先）和编辑（效率优先）。密度系统通过切换 Semantic Tokens 的值，在不改变组件代码的前提下，整体切换信息密度。

### 设计原则

- **两套密度，一套组件**。组件代码不感知密度，只引用语义 token。
- **密度切换是整体的**。不是单个组件调大小，而是全局统一的疏密感受。
- **Compact 不是「小一号」**。是信息密度优化——行高更小、间距更紧、组件更扁，但不牺牲可读性。
- **默认 Comfortable**。用户主动选择才切换到 Compact。

### 三档密度

| 密度 | 行高系数 | 间距系数 | 组件高度系数 | 圆角系数 | 适用场景 |
|------|---------|---------|------------|---------|---------|
| **Comfortable 宽松** | × 1.0 | × 1.0 | × 1.0 | × 1.0 | 默认、阅读、浏览、消费内容 |
| **Regular 标准** | × 0.9 | × 0.875 | × 0.92 | × 0.9 | 均衡态、通用应用 |
| **Compact 紧凑** | × 0.8 | × 0.75 | × 0.82 | × 0.8 | 编辑、数据密集、工具型界面 |

Parchment 推荐用 Comfortable（默认）和 Compact 两档。Regular 作为中间态，适合复杂应用。

### Density Tokens 密度语义层

密度通过覆盖 Semantic Tokens 实现。核心修改的 token：

**间距**

| Token | Comfortable | Regular | Compact |
|-------|-------------|---------|---------|
| --space-1 | 4px | 4px | 2px |
| --space-2 | 8px | 6px | 4px |
| --space-4 | 16px | 14px | 12px |
| --space-6 | 24px | 20px | 16px |
| --space-8 | 32px | 28px | 24px |
| --space-12 | 48px | 40px | 32px |
| --space-16 | 64px | 56px | 44px |
| --space-24 | 96px | 80px | 64px |

**字体 & 行高**

| Token | Comfortable | Regular | Compact |
|-------|-------------|---------|---------|
| body-md fontSize | 16px | 15px | 14px |
| body-md lineHeight | 1.65 | 1.55 | 1.45 |
| body-sm fontSize | 14px | 13px | 12px |
| heading-md fontSize | 20px | 19px | 18px |
| heading-md lineHeight | 1.3 | 1.3 | 1.25 |
| caption fontSize | 12px | 11px | 11px |

**组件高度**

| 组件 | Comfortable | Regular | Compact |
|------|-------------|---------|---------|
| Button (md) | 40px | 36px | 32px |
| Input (md) | 42px | 38px | 34px |
| Table row | 48px | 42px | 36px |
| List item | 44px | 38px | 32px |
| Tabs height | 40px | 36px | 32px |

**圆角**

| Token | Comfortable | Regular | Compact |
|-------|-------------|---------|---------|
| rounded-xl (卡片/模态框) | 14px | 12px | 10px |
| rounded-lg (输入框) | 10px | 8px | 6px |
| rounded-full (按钮) | 9999px | 9999px | 9999px |

### 切换机制

**实现方式**：通过 CSS class 覆盖 CSS 变量。

```css
/* 默认 Comfortable */
:root {
  --space-4: 16px;
  --body-size: 16px;
  --button-height: 40px;
}

/* 紧凑模式 */
[data-density="compact"] {
  --space-4: 12px;
  --body-size: 14px;
  --button-height: 32px;
}
```

**触发方式**：
- 用户设置：在应用设置中提供「密度」切换选项
- 自动检测：内容编辑页面自动切到 Compact，阅读页面自动切到 Comfortable
- URL 参数：`?density=compact` 临时切换

**切换动画**：密度切换时，相关属性 300ms ease-out 过渡。只对 spacing 和 size 做动画，不对 layout 关键属性做。

### 使用场景指导

**什么时候用 Comfortable**
- 文档阅读、文章浏览、笔记查看
- 营销页面、落地页
- 内容消费为主的界面
- 面向非专业用户的产品

**什么时候用 Compact**
- 编辑器、IDE、数据表格
- 后台管理、配置面板
- 内容生产为主的界面
- 面向专业用户的工具产品
- 小屏幕设备上需要展示更多信息时

**注意事项**
- 同一应用内密度应该统一，不要一个页面宽松一个页面紧凑（除非是明确的「阅读模式」切换）
- 切换密度后要检查布局是否有错位、截断
- 图标尺寸建议同步缩小（16px → 14px）
- 触摸目标在 Compact 模式下仍然不低于 32px（WCAG 要求）

### 密度与组件的关系

不是所有组件都需要三档密度。组件可以声明自己支持哪些密度：

| 组件类型 | Comfortable | Compact | 说明 |
|---------|:-----------:|:-------:|------|
| 按钮 / 输入框 | ✓ | ✓ | 核心交互组件 |
| 表格 / 列表 | ✓ | ✓ | 信息密度差异最大 |
| 模态框 / 弹窗 | ✓ | ~ | 主要调内边距，整体尺寸变化不大 |
| 卡片 | ✓ | ~ | 内边距和标题大小变化 |
| Hero / 大标题 | ✓ | ✗ | 营销/展示组件不需要紧凑模式 |
| 徽章 / 标签 | ✓ | ✓ | 微调字号和内边距 |

`~` = 部分变化，不需要专门设计。
`✗` = 不支持紧凑模式，保持宽松尺寸。

---

## 加载策略 Loading Strategy

> 加载不是「等待」，是「维持预期」。好的加载体验让用户感觉系统快，差的加载让用户感觉系统坏。统一加载策略避免每个团队各写各的。

### 决策树

```
数据加载时 →
├─ 已知结构（列表/表格/卡片）→ Skeleton 骨架屏
├─ 未知结构（随机内容）→ Spinner + 文字
└─ 后台静默刷新 → 不显示（旧数据保持，更新后替换）

操作提交时 →
├─ 结果很快（<300ms）→ 不显示加载（避免闪烁）
├─ 操作需等待 → 按钮内 spinner + 禁用
└─ 长任务（>3s）→ Progress 进度条 + 可取消

页面切换时 →
├─ 首屏 → 整页 Skeleton
└─ 切换 tab → 内容区 Skeleton，保持导航可点
```

### 加载层级

| 层级 | 场景 | 方案 | 时长参考 |
|------|------|------|---------|
| 微加载 | 按钮、图标按钮 | 按钮内 spinner（16px）| <1s |
| 区块加载 | 卡片、面板 | 区块 Skeleton / spinner + 文字 | 1-3s |
| 页面加载 | 路由切换、首屏 | 整页 Skeleton | 1-5s |
| 全局加载 | 冷启动、全屏初始化 | 居中 spinner + 品牌提示 | >3s |
| 长任务 | 上传、导入、导出 | Progress + 百分比 + 可取消 | >3s |

### Skeleton vs Spinner 的选择

| 判断 | Skeleton | Spinner |
|------|---------|---------|
| 内容结构已知 | ✓ 用 | |
| 内容结构未知 | | ✓ 用 |
| 加载 > 1s | ✓ 用（信息密度高）| |
| 加载 < 1s | | ✓ 用（更轻）|
| 需要显示进度 | | ✓ 用（配合百分比）|

### 细节规则

- **300ms 法则**：加载 <300ms 不显示任何加载指示（避免闪烁）
- **1s 法则**：加载 >1s 必须显示加载指示，否则用户以为卡死
- **保持布局稳定**：Skeleton 尺寸 = 真实内容尺寸，加载完成内容出现时不跳动
- **不阻塞导航**：加载时导航和返回按钮保持可用
- **可取消**：长任务（>3s）必须提供取消按钮
- **重试**：失败后显示错误 + 重试按钮，不回到加载态
- **骨架屏动画**：1.5s shimmer，尊重 prefers-reduced-motion（关闭动画）

### 禁止

- 整页空白 + 无提示（用户以为崩溃了）
- 全屏遮罩 spinner 锁死所有操作（长任务除外，且要有取消）
- 加载中隐藏页面标题（标题应该先出现，内容再加载）
- 每个小按钮都转圈（微操作用乐观更新：先执行，失败再回滚提示）

---

## Headless 架构方案

> Parchment 是设计系统（样式层），不是组件库（逻辑层）。交互行为和可访问性由 Headless UI 原语负责，Parchment 只负责「长什么样」。
>
> 推荐底座：**Radix UI Primitives**（React）。其他框架有对应替代：React Aria / Kobalte（Solid）/ Floating UI（底层定位）。

### 为什么用 Headless？

- **行为和样式解耦**。交互逻辑（键盘导航、ARIA、焦点管理）和视觉样式是两件事，应该分开维护。
- **无障碍不用自己写**。Radix 的每个原语都经过严格的 WAI-ARIA 测试，比自己写靠谱 10 倍。
- **换皮肤不换逻辑**。今天用 Parchment 风格，明天换另一套设计系统，组件逻辑不动。
- **包体积更小**。只用你需要的原语，不带来一整套组件库的重量。

### 架构分层

```
┌─────────────────────────────────────────┐
│  Patterns 页面模式层                    │  ← 页面级组合
├─────────────────────────────────────────┤
│  Parchment Components 组件层            │  ← 样式 + 模板 + 文档
├─────────────────────────────────────────┤
│  Headless Primitives 原语层             │  ← 行为 + 无障碍 + 状态
│  (Radix UI / React Aria / Kobalte)     │
├─────────────────────────────────────────┤
│  Parchment Design Tokens 令牌层         │  ← 颜色 / 间距 / 字体 / 动效
└─────────────────────────────────────────┘
```

**Parchment 组件 = Headless 原语 + Parchment 样式 + 约定用法**

### 组件映射表

| Parchment 组件 | 推荐 Radix 原语 | 说明 |
|---------------|----------------|------|
| Button | （原生 button） | 不需要原语，样式包裹即可 |
| Input | （原生 input） | 不需要原语 |
| Card | （无） | 纯展示组件 |
| Modal / Dialog | `@radix-ui/react-dialog` | 焦点 trap、ESC 关闭、背景 inert |
| Dropdown Menu | `@radix-ui/react-dropdown-menu` | 方向键导航、子菜单、定位 |
| Tabs | `@radix-ui/react-tabs` | 方向键切换、ARIA |
| Accordion | `@radix-ui/react-accordion` | 键盘导航、展开管理 |
| Tooltip | `@radix-ui/react-tooltip` | 延迟显示、方向键、定位 |
| Slider | `@radix-ui/react-slider` | 键盘微调、拖拽、双值 |
| Alert Dialog | `@radix-ui/react-alert-dialog` | 焦点 trap、role=alertdialog |
| Command Palette | `cmdk` + Dialog 原语 | 搜索 + 命令面板 |
| Pagination | （自行实现） | 逻辑简单，不值得引原语 |
| Breadcrumb | （无） | 纯导航展示 |
| Badge | （无） | 纯展示 |
| Skeleton | （无） | 纯展示 |
| Alert | （无） | 纯展示 |

### 集成模式

**模式 1：包装组件（推荐）**

每个 Parchment 组件是一个 Radix 原语的包装，加上 Parchment 的类名和约定配置。

```tsx
// Button.tsx — 简单组件，直接包装
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  const base = 'parchment-btn'
  const classes = [base, `${base}--${variant}`, `${base}--${size}`, className].filter(Boolean).join(' ')
  return <button className={classes} {...props} />
}
```

```tsx
// Modal.tsx — 复杂组件，包装 Radix 原语
import * as Dialog from '@radix-ui/react-dialog'

export function Modal({ open, onOpenChange, title, children, footer }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="parchment-modal__backdrop" />
        <Dialog.Content className="parchment-modal">
          <Dialog.Title className="parchment-modal__title">{title}</Dialog.Title>
          <div className="parchment-modal__body">{children}</div>
          {footer && <div className="parchment-modal__footer">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

**模式 2：CSS only（零 JS）**

只使用 Parchment 的 CSS 类名和设计令牌，不引入组件代码。适合需要完全控制逻辑的场景。

```html
<button class="parchment-btn parchment-btn--primary parchment-btn--md">
  保存更改
</button>
```

**模式 3：Headless + 样式类名（手动组合）**

直接用 Radix 原语，手动加 Parchment 类名。灵活性最高，但需要开发者熟悉规范。

### 样式实现方案

**CSS 变量驱动**

所有样式通过 CSS 变量（设计令牌）控制，换主题、换密度、换深色模式只改变量值。

```css
/* tokens.css — 设计令牌 */
:root {
  --pc-surface-card: #F6F7F9;
  --pc-text-primary: #1F2330;
  --pc-accent-600: #5A6590;
  --pc-radius-lg: 14px;
  --pc-space-4: 16px;
  --pc-motion-fast: 150ms;
}

/* 深色模式覆盖 */
[data-theme="dark"] {
  --pc-surface-card: #262A33;
  --pc-text-primary: #ECEEF2;
}

/* 紧凑模式覆盖 */
[data-density="compact"] {
  --pc-space-4: 12px;
}
```

**组件样式文件**

每个组件一个 CSS 文件，引用 token，不写死颜色或尺寸。

```css
/* components/button.css */
.parchment-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--pc-space-2);
  border-radius: var(--pc-radius-full);
  font-weight: 500;
  transition: all var(--pc-motion-fast) var(--pc-easing-default);
  cursor: pointer;
  border: none;
}

.parchment-btn--primary {
  background: var(--pc-accent-600);
  color: white;
}
.parchment-btn--primary:hover {
  background: var(--pc-accent-500);
}
```

### 不重新造轮子的原则

- **状态管理**：用 Headless 原语的状态，不自己写 useState
- **键盘交互**：用 Headless 原语的键盘支持，不自己写 onKeyDown
- **定位**：用 Floating UI（Radix 底层就是它），不自己算 position
- **焦点管理**：用 Radix 的焦点 trap，不自己写
- **ARIA 属性**：用 Radix 自动设置的，不自己加

只有一件事是 Parchment 负责的：**视觉呈现和设计一致性**。

### 框架适配

| 框架 | Headless 库 | 状态管理 | 样式方案 |
|------|------------|---------|---------|
| React | Radix UI Primitives | 原语内置 | CSS Modules / Tailwind / CSS-in-JS |
| Vue | Radix Vue / Vue Use | 组合式 API | Scoped CSS / UnoCSS |
| Solid.js | Kobalte | 原语内置 | Solid's scoped styles |
| Svelte | Melt UI / Bits UI | 原语内置 | Svelte scoped styles |
| Web Components | （自行封装） | 内部状态 | Constructable Stylesheets |

Parchment 的设计令牌和设计规范是框架无关的。组件层是框架相关的，可以有多套实现共用同一套 tokens。

### 版本策略

- **Tokens 版本**：独立版本号，遵循 semver。改色值是 minor，删 token 是 major。
- **组件版本**：跟随框架实现的版本号。
- **规范文档版本**：即本文件版本（v2.0），大版本号对应架构变化。

---

## 组件成熟度分级 & 治理模型

> 不是所有组件一出生就是稳定的。用明确的分级告诉使用者「这个组件能不能用在生产环境」。

### 五级成熟度模型

| 级别 | 名称 | 含义 | 使用建议 |
|------|------|------|---------|
| **Alpha** | 实验中 | 刚做出来，API 和外观随时可能变 | 只在内部项目、非关键页面试用 |
| **Beta** | 测试中 | API 基本稳定，可能还有小调整 | 可以在非核心页面使用，准备接受变化 |
| **Stable** | 稳定 | API 和外观固定，向后兼容 | 可以在生产环境任何地方使用 |
| **Mature** | 成熟 | 经过大量项目验证，文档完善 | 首选组件，优先使用 |
| **Deprecated** | 废弃 | 不再推荐使用，有替代方案 | 新项目不要用，老项目计划迁移 |

### 每一级别需要满足什么

**Alpha → Beta**
- [x] 基础功能可用
- [x] 有基本的使用示例
- [x] 主要状态齐全（default/hover/pressed/disabled/focus）
- [x] 基本的键盘可访问性

**Beta → Stable**
- [x] API 设计经过至少一次实际项目验证
- [x] 完整的六件套文档（Anatomy/Usage/States/Content/A11y/Tokens）
- [x] 完整的无障碍支持（屏幕阅读器 + 键盘 + ARIA）
- [x] 深色模式适配
- [x] 双密度适配
- [x] 响应式设计验证
- [x] 有单元测试覆盖关键行为
- [x] 至少 2 个不同项目实际使用过

**Stable → Mature**
- [x] 6 个月以上没有 API 变更
- [x] 5 个以上不同项目使用
- [x] 有完整的视觉回归测试
- [x] 有性能基准测试
- [x] 文档包含常见问题和最佳实践

**进入 Deprecated**
- 有明确的替代组件或方案
- 在文档中标注迁移指南
- 保留至少一个大版本的兼容期
- 控制台输出 deprecation warning（开发模式）

### 版本兼容性规则

**Patch 版本**（x.y.**Z**）
- 修复 bug
- 微调颜色/间距等视觉细节（不影响使用）
- 文档更新

**Minor 版本**（x.**Y**.z）
- 新增组件
- 新增属性/变体
- 新增尺寸
- 新增主题或密度
- **不破坏**现有 API

**Major 版本**（**X**.y.z）
- 重命名或删除组件
- 重命名或删除属性
- 大幅调整外观（需要手动适配）
- 令牌架构变化
- **会破坏**现有使用，需要迁移

### 新增组件流程

1. **提案**：在设计系统讨论区发起提案，说明用途和需求场景
2. **设计**：出设计稿 + 定义 API + 编写设计规范
3. **Alpha 实现**：编码实现，放入 Alpha 区域
4. **试点**：在 1-2 个项目中试用，收集反馈
5. **迭代**：根据反馈调整 API 和设计
6. **进入 Beta**：文档完善，对外宣布可用
7. **稳定化**：6 个月无大改动 → 升 Stable

### 变更治理

**设计令牌变更**
- 新增 token：随时，minor 版本
- 修改 token 值：minor 版本（视觉变化小）或 major 版本（视觉变化大）
- 删除 token：必须先 Deprecated 一个版本，再在下个 major 删除
- 重命名 token：别名兼容一个版本，下个 major 删别名

**组件变更**
- 新增属性：minor 版本
- 修改默认值：major 版本
- 删除属性：Deprecated → major 删除
- 重命名组件：别名兼容 → major 删除

### 质量门禁

每个组件在升稳前必须通过：

- **视觉一致性**：和设计规范 100% 对齐
- **无障碍**：WCAG AA 级以上
- **性能**：渲染不超过 16ms（60fps）
- **浏览器兼容**：Chrome / Safari / Firefox 最新两个版本
- **响应式**：移动端 / 平板 / 桌面端正常显示
- **深色模式**：深浅两套主题都测试过
- **密度**：宽松和紧凑都测试过

---

## Do's and Don'ts

**Do**
- 一个页面只有 1 个主按钮
- 用字重和大小区分层级，不靠颜色
- 大量留白，宁多勿少
- 所有可交互元素有完整的 5 种状态
- 按钮用胶囊形
- 图标用线条风格
- 引用块用衬线斜体
- 长文控制行长在 65-75 字符
- 彩色面积占比 ≤ 5%，让彩色「稀缺」才显高级
- 不确定该不该上色时，用灰阶。灰阶永远是对的

**Don't**
- 同一页面超过 2 种彩色
- 给按钮加渐变或阴影
- 用 box-shadow 做卡片效果
- 用 emoji 当图标或装饰
- 混用 3 种以上圆角
- 给正文文字加背景高亮
- 用纯黑或纯白
- 长文行高低于 1.5
- 用高饱和色（#FF0000、#00FF00 这种纯色直接禁用）
- 大面积彩色背景（彩色只能出现在 4px 以下的小元素上）
- 用颜色装饰非信息元素
