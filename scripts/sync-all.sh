#!/usr/bin/env bash
set -uo pipefail

# sync-all.sh — 三端同步引擎（本地单一真相源 → 三端只读镜像）
# 不硬编码 remote 名，按域名自动探测，可复用到 Creator OS / Parchment / 任意仓库。
#
# 用法:
#   ./scripts/sync-all.sh                # 要求 working tree 干净，直接推三端 + SHA 校验
#   ./scripts/sync-all.sh -m "msg"       # 自动 add+commit 再推
#   ./scripts/sync-all.sh -m "msg" --skip-gitcode   # 跳过某端
#   ./scripts/sync-all.sh --pull         # 云端领先时自动 fetch+merge 再推
#
# 安全保证:
#   - 云端领先本地时，push 会被 git 拒绝（non-fast-forward），不会覆盖
#   --pull 时自动 fetch + merge --ff-only（线性才合并，分叉则报告让你手动处理）
#
# 可覆盖环境变量:
#   PARCHMENT_BRANCH=main

BRANCH="${PARCHMENT_BRANCH:-main}"
COMMIT_MSG=""
SKIP=""
DO_PULL=false

# ── 参数解析 ──
while [[ $# -gt 0 ]]; do
  case "$1" in
    -m|--message) COMMIT_MSG="$2"; shift 2 ;;
    --skip-*) SKIP="${SKIP} ${1#--skip-}"; shift ;;
    --pull) DO_PULL=true; shift ;;
    *) echo "未知参数: $1"; exit 1 ;;
  esac
done

skip() { for s in $SKIP; do [[ "$s" == "$1" ]] && return 0; done; return 1; }

# ── 按域名探测 remote 名（不硬编码 origin/github）──
detect_remote() {
  local pattern="$1"
  local r url
  for r in $(git remote); do
    url="$(git remote get-url "$r" 2>/dev/null || echo '')"
    if [[ -n "$url" ]] && echo "$url" | grep -qiE "$pattern"; then
      echo "$r"; return 0
    fi
  done
  return 1
}

GH="$(detect_remote 'github\.com' || true)"
GITCODE="$(detect_remote 'gitcode\.com' || true)"
GITEE="$(detect_remote 'gitee\.com' || true)"

# ── working tree 处理 ──
if [[ -n "$(git status --porcelain)" ]]; then
  if [[ -z "$COMMIT_MSG" ]]; then
    echo "ERROR: working tree 不干净。先 commit，或用 -m \"msg\" 自动提交。"
    exit 1
  fi
  git add -A
  git commit -m "$COMMIT_MSG"
  echo "已提交: $COMMIT_MSG"
fi

LOCAL_SHA="$(git rev-parse "$BRANCH")"

# ── 推送前预检：三端是否有领先本地的 commit ──
echo ""
echo "PRE-CHECK: 云端领先检测"
echo "=========================="

AHEAD_REMOTES=""
NEEDS_PULL=false

for pair in "github:$GH" "gitcode:$GITCODE" "gitee:$GITEE"; do
  name="${pair%%:*}"; remote="${pair#*:}"
  [[ -z "$remote" ]] && continue
  skip "$name" && continue

  REMOTE_SHA="$(git ls-remote "$remote" "refs/heads/${BRANCH}" 2>/dev/null | awk '{print $1}')"

  if [[ -z "$REMOTE_SHA" ]]; then
    echo "  ⚠ $name: 无法获取 HEAD（可能是空仓库或网络问题）"
    continue
  fi

  if [[ "$REMOTE_SHA" == "$LOCAL_SHA" ]]; then
    echo "  ✓ $name: 已同步"
  elif git merge-base --is-ancestor "$REMOTE_SHA" "$LOCAL_SHA" 2>/dev/null; then
    # 远端 SHA 在本地历史里 → 本地领先，正常推送即可
    echo "  ✓ $name: 本地领先（安全推送）"
  else
    # 远端有本地没有的 commit
    AHEAD_REMOTES="${AHEAD_REMOTES} ${name}:${remote}"
    NEEDS_PULL=true
    # 尝试获取领先的 commit 列表
    git fetch "$remote" "$BRANCH" >/dev/null 2>&1
    COMMITS_AHEAD=$(git log --oneline "${LOCAL_SHA}..${remote}/${BRANCH}" 2>/dev/null | wc -l | tr -d ' ')
    echo "  ⚠ $name: 云端领先 ${COMMITS_AHEAD} 个 commit"
    git log --oneline "${LOCAL_SHA}..${remote}/${BRANCH}" 2>/dev/null | head -5 | sed 's/^/      /'
  fi
done

# ── 云端领先处理 ──
if [[ "$NEEDS_PULL" == true ]]; then
  echo ""
  if [[ "$DO_PULL" == true ]]; then
    echo "AUTO-PULL: 正在拉取云端领先的 commit..."
    # 选第一个领先端做 fetch+merge
    FIRST_AHEAD=""
    for entry in $AHEAD_REMOTES; do
      FIRST_AHEAD="${entry#*:}"; break
    done
    git fetch "$FIRST_AHEAD" "$BRANCH" >/dev/null 2>&1
    if git merge --ff-only "FETCH_HEAD" 2>/dev/null; then
      echo "  ✓ 已 fast-forward 合并（线性，无冲突）"
      LOCAL_SHA="$(git rev-parse "$BRANCH")"
      echo "  本地更新到 ${LOCAL_SHA:0:12}"
    else
      echo "  ✗ 无法 fast-forward（分叉了，需要手动处理）"
      echo ""
      echo "云端和本地都有各自的新 commit，产生了分叉。"
      echo "手动处理方式："
      echo "  git fetch <领先端> main"
      echo "  git merge <领先端>/main    # 会产生 merge commit"
      echo "  # 解决冲突后："
      echo "  ./scripts/sync-all.sh"
      exit 3
    fi
  else
    echo "⚠  检测到云端有本地没有的 commit！"
    echo "    直接推送会被 git 拒绝（保护机制，不会覆盖）。"
    echo ""
    echo "处理方式："
    echo "  方式 1（推荐）：拉取合并后再推"
    echo "    ./scripts/sync-all.sh --pull"
    echo ""
    echo "  方式 2：手动拉取"
    echo "    git fetch <领先端> main && git merge --ff-only <领先端>/main"
    echo "    # 如果分叉了，解决冲突后重新推"
    echo ""
    echo "  方式 3：确认云端那些 commit 不要了（危险）"
    echo "    git push <remote> main --force-with-lease"
    echo ""
    exit 1
  fi
fi

echo ""
echo "PARCHMENT REPOSITORY SYNC"
echo "=========================="
echo "本地 $BRANCH @ ${LOCAL_SHA:0:12}"
echo ""

# ── 推送三端（独立推送，一端失败不阻塞其他端）──
TARGETS=""
for pair in "github:$GH" "gitcode:$GITCODE" "gitee:$GITEE"; do
  name="${pair%%:*}"; remote="${pair#*:}"
  [[ -z "$remote" ]] && { echo "  ⚠ $name: 未配置 remote，跳过"; continue; }
  skip "$name" && { echo "  ⚠ $name: 手动跳过"; continue; }
  if git push "$remote" "${BRANCH}:${BRANCH}" >/dev/null 2>&1; then
    echo "  ✓ $name 已推送"
    TARGETS="${TARGETS} ${name}:${remote}:OK"
  else
    echo "  ✗ $name 推送失败"
    TARGETS="${TARGETS} ${name}:${remote}:FAIL"
  fi
done

echo ""
echo "SHA Integrity Check"
echo "=========================="

failed=0
for entry in $TARGETS; do
  name="${entry%%:*}"; rest="${entry#*:}"
  remote="${rest%%:*}"; state="${rest##*:}"
  if [[ "$state" == "FAIL" ]]; then
    printf '  ✗ %-10s push failed\n' "$name"
    failed=1
    continue
  fi
  REMOTE_SHA="$(git ls-remote "$remote" "refs/heads/${BRANCH}" 2>/dev/null | awk '{print $1}')"
  if [[ "$REMOTE_SHA" == "$LOCAL_SHA" ]]; then
    printf '  ✓ %-10s %s\n' "$name" "${REMOTE_SHA:0:12}"
  else
    printf '  ✗ %-10s expected=%s actual=%s\n' "$name" "${LOCAL_SHA:0:12}" "${REMOTE_SHA:0:12}"
    failed=1
  fi
done

echo ""
if (( failed )); then
  echo "STATUS: SYNC FAILED — remotes 不一致"
  exit 2
fi
echo "STATUS: ALL REMOTES IN SYNC"
