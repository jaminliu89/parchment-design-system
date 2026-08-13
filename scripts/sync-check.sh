#!/usr/bin/env bash
set -uo pipefail

# sync-check.sh — 只校验不推送：三端 HEAD 与本地是否一致
# 用于 push 之后的独立复核，或发现「某端领先/落后」时快速定位。
#
# 用法: ./scripts/sync-check.sh

BRANCH="${PARCHMENT_BRANCH:-main}"

detect_remote() {
  local pattern="$1" r url
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

LOCAL_SHA="$(git rev-parse "$BRANCH")"
echo "本地 $BRANCH @ ${LOCAL_SHA:0:12}"
echo ""

failed=0
for pair in "github:$GH" "gitcode:$GITCODE" "gitee:$GITEE"; do
  name="${pair%%:*}"; remote="${pair#*:}"
  if [[ -z "$remote" ]]; then
    echo "  ⚠ $name: 未配置 remote"
    failed=1
    continue
  fi
  REMOTE_SHA="$(git ls-remote "$remote" "refs/heads/${BRANCH}" 2>/dev/null | awk '{print $1}')"
  if [[ -z "$REMOTE_SHA" ]]; then
    echo "  ✗ $name: 无法获取 HEAD（网络或权限）"
    failed=1
  elif [[ "$REMOTE_SHA" == "$LOCAL_SHA" ]]; then
    echo "  ✓ $name ${REMOTE_SHA:0:12}"
  else
    echo "  ✗ $name ${REMOTE_SHA:0:12}（本地 ${LOCAL_SHA:0:12}）"
    failed=1
  fi
done

echo ""
if (( failed )); then
  echo "RESULT: 存在不同步。领先方 = SHA 更新的一方；用 git fetch <领先端> && git merge --ff-only 对齐。"
  exit 1
fi
echo "RESULT: ALL IN SYNC"
