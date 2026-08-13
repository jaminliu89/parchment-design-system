#!/usr/bin/env bash
set -euo pipefail

# Parchment: one source of truth -> three read replicas.
# Run from the repository root. Configure remote URLs once, then use:
#   ./scripts/sync-all.sh

REMOTE_GITHUB="${PARCHMENT_REMOTE_GITHUB:-origin}"
REMOTE_GITCODE="${PARCHMENT_REMOTE_GITCODE:-gitcode}"
REMOTE_GITEE="${PARCHMENT_REMOTE_GITEE:-gitee}"
BRANCH="${PARCHMENT_BRANCH:-main}"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "ERROR: working tree is not clean. Commit first."
  exit 1
fi

LOCAL_SHA="$(git rev-parse "${BRANCH}")"
echo "Parchment sync: ${BRANCH} @ ${LOCAL_SHA:0:12}"

for remote in "$REMOTE_GITHUB" "$REMOTE_GITCODE" "$REMOTE_GITEE"; do
  if ! git remote get-url "$remote" >/dev/null 2>&1; then
    echo "ERROR: remote '$remote' is not configured."
    echo "Add it with: git remote add $remote <repository-url>"
    exit 1
  fi
done

for remote in "$REMOTE_GITHUB" "$REMOTE_GITCODE" "$REMOTE_GITEE"; do
  echo "→ pushing ${BRANCH} to ${remote}"
  git push "$remote" "${BRANCH}:${BRANCH}"
done

echo
echo "Remote verification"
failed=0
for remote in "$REMOTE_GITHUB" "$REMOTE_GITCODE" "$REMOTE_GITEE"; do
  REMOTE_SHA="$(git ls-remote "$remote" "refs/heads/${BRANCH}" | awk '{print $1}')"
  if [[ "$REMOTE_SHA" == "$LOCAL_SHA" ]]; then
    printf '  ✓ %-10s %s\n' "$remote" "${REMOTE_SHA:0:12}"
  else
    printf '  ✗ %-10s expected=%s actual=%s\n' "$remote" "${LOCAL_SHA:0:12}" "${REMOTE_SHA:0:12}"
    failed=1
  fi
done

if (( failed )); then
  echo "SYNC FAILED: remotes are not identical."
  exit 2
fi

echo "STATUS: ALL REMOTES IN SYNC"
