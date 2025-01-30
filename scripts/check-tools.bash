#!/usr/bin/env bash
# Check if it's installed all the commands and tools needed for all projects in the monorepo

commands=("pnpm" "npm" "addlicense" "just")

for commandName in "${commands[@]}"
do
    if ! command -v "$commandName" 2>&1 >/dev/null; then
        echo "[ERROR] The command $commandName is not available!"
        exit 1
    fi
done

echo "[INFO] Everything is ok"