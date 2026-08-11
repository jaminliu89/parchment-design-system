# Parchment Design System v2.1（云雾白）

冷调云雾底 + 低饱和莫兰迪语义色 + 无阴影细边框 + 衬线大标题。极简、克制、高端工作室质感。

## 文件

- `Parchment-DESIGN.md` — 完整设计规范（3731 行 / 24 章节 / 三层 Token：Palette → Semantic → Component）
- `parchment.tokens.json` — 结构化 design tokens（palette / semantic / typography / rounded / spacing / motion / components）
- `parchment-preview.html` — 预览页（14 区块，浏览器直接打开）

## 核心定义

- 云雾白底 #F6F7F9 / 冷墨文字 #1F2330
- 唯一强调色：石墨蓝 #5A6590（低饱和，替代旧靛蓝 #4F46E5）
- 莫兰迪语义色：灰绿 #6B8F7A / 灰琥珀 #B58A5A / 灰红 #B06A63
- 深色模式：深雾 #15171C / 银白墨 #ECEEF2
- 无阴影 1px 边框、胶囊按钮、衬线大标题、SVG 图标（禁 emoji）

## 用法

```bash
# 预览
open parchment-preview.html

# 校验（交付前必须全 PASS）
python3 ~/.hermes/skills/devops/design-system-delivery-gate/scripts/scan_design_md.py Parchment-DESIGN.md
```

## 版本

- v2.1：石墨蓝强调色定版（原 v2.0 靛蓝 #4F46E5 已废弃）
- 深色模式 = 深雾 #15171C + 银白墨 #ECEEF2
