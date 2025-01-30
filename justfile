# Default recipe of the justfile
default: help

# Show this info message
help:
    #!/usr/bin/env bash

    just --list

nix_config_dir_path := env("HOME") + "/.config/nix"
nix_config_file_path := nix_config_dir_path + "/nix.conf"

# Remove your Nix CLI configuration and set one that will only enable Nix Flakes experiment
enable-nix-flakes:
    #!/usr/bin/env bash

    rm -f {{nix_config_file_path}}
    mkdir -p {{nix_config_dir_path}}
    touch {{nix_config_file_path}}
    echo "experimental-features = nix-command flakes" > {{nix_config_file_path}}

# Open the development environment with a Bash shell
bash:
    #!/usr/bin/env bash
    nix develop

# Open the development environment with a Fish shell
fish:
    #!/usr/bin/env bash
    nix develop --command fish

# Setup the environment of the monorepo
setup:
    #!/usr/bin/env bash

    just check-tools
    pnpm i

# Check if it's installed all the commands and tools needed for all projects in the monorepo
check-tools:
    #!/usr/bin/env bash
    ./scripts/check-tools.bash

# Lint and format all files
check:
    #!/usr/bin/env bash

    just check-meta
    just check-projects

# Lint and format all files in the meta directories
check-meta:
    #!/usr/bin/env bash

    # Check if the Nix CLI is avaiable, if it's then lint and format all Nix files
    if command -v nix >/dev/null 2>&1 ; then just check-nix; else echo "Nix is not installed, ignoring its linting"; fi

    # Check Bash scripting stuff
    chmod u+x ./scripts/*
    shellcheck scripts/*
    shfmt --indent 2 --language-dialect bash --write --simplify scripts/

    # Check JS/TS/Node.js/pnpm/ stuff
    pnpm exec syncpack -- fix-mismatches
    pnpm exec syncpack -- format

# Lint and format all files in all the projects
check-projects:
    #!/usr/bin/env bash
    just -f ./sprout/justfile check

# Lint and format all Nix files
check-nix:
    #!/usr/bin/env bash
    nix fmt **/.nix