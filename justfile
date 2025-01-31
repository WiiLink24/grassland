import "justfiles/web.justfile"
import "justfiles/nix.justfile"

# Default recipe of the justfile
default: help

# Show this info message
help:
    #!/usr/bin/env bash

    just --list

# Check if it's installed all the commands and tools needed for everything in the monorepo
ensure-tools:
    #!/usr/bin/env bash
    
    commands=("pnpm" "npm" "addlicense" "just" "shfmt" "shellcheck" "jq")

    for commandName in "${commands[@]}"; do
        echo "Info: Checking '${commandName}'"

        if ! command -v "${commandName}" >/dev/null 2>&1; then
            echo "Error: The command ${commandName} is not available!"
            exit 1
        fi
    done

    echo "Info: Every tool is available!"

# Setup the environment of the monorepo
setup: setup-web

# Check, lint and format everything
check: check-meta check-projects

# Check, lint and format projects independent files
check-meta: check-web
    #!/usr/bin/env bash

    # Check if the Nix CLI is avaiable, if it is then lint and format all Nix files
    if command -v nix >/dev/null 2>&1; then
        just check-nix
    else
        echo "Warning: Nix CLI is not installed, ignoring its linting"
    fi

# Run check, linting and formating recipes in all projects
check-projects:
    #!/usr/bin/env bash

    for project in ./projects/*/; do
        project_justfile_json=$(just --dump-format json --dump -f projects/sprout/justfile)

        recipes=("setup" "check")

        for recipe in "${recipes[@]}"; do
            if [[ $(echo "${project_justfile_json}" | jq ".recipes.${recipe}") != "null" ]]; then
                continue
            fi

            echo "Error: The project '${project}' is missing in its justfile a '${recipe}' recipe"
            exit 1
        done

        just -f "$project/justfile" check
    done
