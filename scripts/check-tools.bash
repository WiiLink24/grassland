#!/usr/bin/env bash
# Check if it's installed all the commands and tools needed for all projects in the monorepo

set -euo pipefail

commands=("pnpm" "npm" "addlicense" "just" "shfmt" "shellcheck")

for commandName in "${commands[@]}"; do
  if ! command -v "$commandName" >/dev/null 2>&1; then
    echo "[ERROR] The command $commandName is not available!"
    exit 1
  fi
done

echo "[INFO] Everything is ok"
