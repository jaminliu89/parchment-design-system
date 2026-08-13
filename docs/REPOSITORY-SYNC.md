# Repository Sync — 三端同步架构

> 本地 Git = 单一真相源（Single Source of Truth）。三个平台只是只读镜像，不允许三端各自开发后互相覆盖。

## 架构

```
                    ┌──────────────┐
                    │  本地 Git     │
                    │  Single Source│
                    │  of Truth     │
                    └──────┬───────┘
                           │
                    git push / mirror
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
        GitHub          GitCode         Gitee
        主仓库           镜像             镜像
```

- **本地仓库 = 唯一开发源**：所有 commit 在本地完成
- **GitHub**：主开发 / PR / CI / Agent
- **GitCode / Gitee**：国内镜像 + 国内访问
- **三端保持同一个 commit SHA**
- **不允许**三端各自开发后互相覆盖（否则三边 merge 地狱）

## 同步对象分层

| 层 | 内容 | 是否需要三端一致 |
|---|---|---|
| 01 source | `src/` `components/` `tokens/` `icons/` | ✅ 必须 |
| 02 documentation | `README.md` `DESIGN-SYSTEM.md` `COMPONENTS.md` `CHANGELOG.md` | ✅ 必须 |
| 03 preview | `parchment-preview.html` | ✅ 必须 |
| 04 repository config | `.github/` `scripts/` `sync/` | 平台专属可单独处理 |

## 脚本

全部在 `scripts/`，**不硬编码 remote 名，按域名自动探测**（github.com / gitee.com / gitcode.com），所以 Creator OS / Parchment / 任意仓库都能复用同一套。

| 脚本 | 作用 |
|---|---|
| `sync-all.sh` | 检查 working tree → commit（可选）→ push 三端 → SHA 校验 → 同步报告 |
| `sync-check.sh` | 只校验不推送，快速定位「某端领先/落后」 |
| `remote-health.sh` | 三端 remote 配置 + 连通性检查 |

### 用法

```bash
# 干净 working tree 直接推 + 校验
./scripts/sync-all.sh

# 自动 add+commit 再推
./scripts/sync-all.sh -m "feat: xxx"

# 跳过某端（如 GitCode 临时不可用）
./scripts/sync-all.sh --skip-gitcode

# 只校验不推送
./scripts/sync-check.sh

# 健康检查
./scripts/remote-health.sh
```

### 输出示例

```
PARCHMENT REPOSITORY SYNC
==========================
本地 main @ 8f31a2c

  ✓ github 已推送
  ✓ gitcode 已推送
  ✓ gitee 已推送

SHA Integrity Check
==========================
  ✓ github     8f31a2c
  ✓ gitcode    8f31a2c
  ✓ gitee      8f31a2c

STATUS: ALL REMOTES IN SYNC
```

## 出现不同步时

`sync-check.sh` 会指出领先方。对齐命令：

```bash
# 某端领先（通常是别人在 GitHub 上直接推了）
git fetch <领先端> main
git merge --ff-only <领先端>/main   # 线性则快进，本地追上

# 然后重新推三端
./scripts/sync-all.sh
```

## 平台风控 ≠ 同步问题

GitHub Agent 写入被安全拦截是**平台风控**，不是 Git 同步问题。三端同步不能绕过风控，但能降低单平台不可用的影响：GitHub 暂时不可用时，本地仍可推到 GitCode + Gitee 继续。

## remote 命名约定（建议统一）

两个仓库当前命名不一致，脚本已做域名自动探测所以不影响运行，但建议以后统一：

| 平台 | 建议 remote 名 |
|---|---|
| GitHub | `origin` |
| Gitee | `gitee` |
| GitCode | `gitcode` |

```bash
git remote add origin  git@github.com:jaminliu89/<repo>.git
git remote add gitee   git@gitee.com:jaminkim/<repo>.git
git remote add gitcode git@gitcode.com:gcw_4GDxoIZb/<repo>.git
```
