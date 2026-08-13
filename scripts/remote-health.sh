#!/usr/bin/env bash
set -uo pipefail

# remote-health.sh — 三端 remote 健康检查（配置 + 连通性）
# 不推送、不改动，只报告三端 remote 是否配好、能否连通。
#
# 用法: ./scripts/remote-health.sh

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

echo "REMOTE HEALTH"
echo "=============="

GH="$(detect_remote 'github\.com' || true)"
GITCODE="$(detect_remote 'gitcode\.com' || true)"
GITEE="$(detect_remote 'gitee\.com' || true)"

all_ok=0
for name in github gitcode gitee; do
  case "$name" in
    github) remote="$GH" ;;
    gitcode) remote="$GITCODE" ;;
    gitee) remote="$GITEE" ;;
  esac
  if [[ -z "$remote" ]]; then
    printf '  ✗ %-10s 未配置 remote\n' "$name"
    all_ok=1
    continue
  fi
  url="$(git remote get-url "$remote" 2>/dev/null || echo '')"
  # 连通性：ls-remote 拿 HEAD（空则失败）
  sha="$(git ls-remote "$remote" "refs/heads/${BRANCH}" 2>/dev/null | awk '{print $1}')"
  if [[ -n "$sha" ]]; then
    printf '  ✓ %-10s %s  HEAD=%s\n' "$name" "$url" "${sha:0:12}"
  else
    printf '  ✗ %-10s %s  无法连通（检查网络/SSH key/token）\n' "$name" "$url"
    all_ok=1
  fi
done

echo ""
if (( all_ok )); then
  echo "RESULT: 有 remote 异常"
  exit 1
fi
echo "RESULT: ALL REMOTES HEALTHY"
