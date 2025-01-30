# Default recipe of the justfile
default: help

# Show this info message
help:
  just --list

nix_config_dir_path := env("HOME") + "/.config/nix"
nix_config_file_path := nix_config_dir_path + "/nix.conf"

# Remove your Nix CLI configuration and set one that will only enable Nix Flakes experiment
enable-nix-flakes:
    rm -f {{nix_config_file_path}}
    mkdir -p {{nix_config_dir_path}}
    touch {{nix_config_file_path}}
    echo "experimental-features = nix-command flakes" > {{nix_config_file_path}}

# Open the development environment with a Bash shell
bash:
    nix develop

# Open the development environment with a Fish shell
fish:
    nix develop --command fish

# Setup the environment of the monorepo
setup:
    just check-tools

    pnpm i

# Check if it's installed all the commands and tools needed for all projects in the monorepo
check-tools:
    ./scripts/check-tools.bash

# Lint and format all files
check:
    just check-meta
    just check-projects

# Lint and format all files in the meta directories
check-meta:
    # Check if the Nix CLI is avaiable, if it's then lint and format all Nix files
    if command -v nix 2>&1 >/dev/null; then just check-nix; else echo "Nix is not installed, ignoring its linting"; fi

    pnpm exec syncpack -- fix-mismatches
    pnpm exec syncpack -- format

    chmod u+x ./scripts/*

# Lint and format all files in all the projects
check-projects:
    just -f ./sprout/justfile check

# Lint and format all Nix files
check-nix:
    nix fmt **/.nix