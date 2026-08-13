#!/usr/bin/env bash
set -uo pipefail

# sync-all.sh — 三端同步引擎（本地单一真相源 → 三端只读镜像）
# 不硬编码 remote 名，按域名自动探测，可复用到 Creator OS / Parchment / 任意仓库。
#
# 用法:
#   ./scripts/sync-all.sh                # 要求 working tree 干净，直接推三端 + SHA 校验
#   ./scripts/sync-all.sh -m "msg"       # 自动 add+commit 再推
#   ./scripts/sync-all.sh -m "msg" --skip-gitcode   # 跳过某端
#
# 可覆盖环境变量:
#   PARCHMENT_BRANCH=main

BRANCH="${PARCHMENT_BRANCH:-main}"
COMMIT_MSG=""
SKIP=""

# ── 参数解析 ──
while [[ $# -gt 0 ]]; do
  case "$1" in
    -m|--message) COMMIT_MSG="$2"; shift 2 ;;
    --skip-*) SKIP="${SKIP} ${1#--skip-}"; shift ;;
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
