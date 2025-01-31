import "justfiles/web.justfile"
import "justfiles/nix.justfile"

set unstable
set script-interpreter := ["nu"]

# Default recipe of the justfile
default: help

# Show this info message
[script]
help:
    just --list

# Check if it's installed all the commands and tools needed for everything in the monorepo
[script]
ensure-tools:
    ["pnpm" "npm" "addlicense" "just" "shfmt" "shellcheck" "jq"] | each {|command|
        print $"Info: Checking '($command)'"

        if (which $command | length) < 1 {
            print "Error: The command ${commandName} is not available!"
            exit 1
        }
    }

    print "Info: Every tool is available!"

# Setup the environment of the monorepo
setup: setup-web

# Check, lint and format everything
check: check-meta check-projects

# Check, lint and format projects independent files
[script]
check-meta: check-web
    # Check if the Nix CLI is available, if it is then lint and format all Nix files
    if (which nix | length) >= 1 {
        just check-nix
    } else {
        print "Warning: Nix CLI is not installed, ignoring its linting"
    }

# Run check, linting and formating recipes in all projects
[script]
check-projects:
    ls ./projects/ | where type == dir | each { |project|
        let justfile_path = $"($project.name)/justfile"
        let project_justfile_json = just --dump-format json --dump -f $justfile_path | from json

        ["setup", "check"] | each { |recipe|
            if ($project_justfile_json.recipes | get $recipe) != "null" {
                return
            }

            print "Error: The project '$project' is missing in its justfile a '$recipe' recipe"
            exit 1
        }

        just -f $justfile_path check
    }
