import "justfiles/web.justfile"
import "justfiles/nix.justfile"
import "justfiles/gitignore.justfile"

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
    # `just` and `nu` can be omited because without them this recipe could not run
    ["pnpm" "npm" "addlicense" "jq"] | each {|command|
        print $"Info: Checking '($command)'"

        if (which $command | length) < 1 {
            print $"Error: The command '($command)' is not available!"
            exit 1
        }
    }

    # Here comes Python installation hell (https://xkcd.com/1987/)

    mut python_executable = "python3"

    if ((sys host).name | str contains --ignore-case windows) {
        $python_executable = "py -3"
    }

    let python_version = ^$"($python_executable)" --version | parse "{name} {mayor}.{minor}.{patch}"
    print $python_version

    print "Info: Every tool is available!"

# Setup the environment of the monorepo
setup: setup-web

# Check, lint and format everything
[script]
check: check-meta check-projects
    print "Info: Everything is ok!"

# Check, lint and format projects independent files
[script]
check-meta: check-web
    # Check if the Nix CLI is available, if it is then lint and format all Nix files
    if (which nix | length) >= 1 {
        just check-nix
    } else {
        print "Warning: Nix CLI is not installed, ignoring its linting"
    }

# Run check, linting and formating recipes in a project
[script]
check-project project_path:
    let project_stylized_name = "{{project_path}}" | path basename

    if not ("{{project_path}}/README.md" | path exists) {
        print $"Error: The project '($project_stylized_name)' is missing a README.md file"
        exit 1
    }
    
    let justfile_path = $"{{project_path}}/justfile"

    let project_justfile_json = just --dump-format json --dump -f $justfile_path | from json

    ["setup", "check"] | each { |recipe|
        if "script" in ($project_justfile_json.recipes | get $recipe | get attributes | columns) {
            return
        }

        print $"Error: The project '($project_stylized_name)' is missing in its justfile a '($recipe)' recipe"
        exit 1
    }

    just -f $justfile_path check

# Run check, linting and formating recipes in all projects
[script]
check-projects:
    ls ./projects/ | where type == dir | each { |project|
        just check-project $project.name
    }

# Create a new templated project
[script]
new-project project_name:
    cp -r ./templates/project projects/{{project_name}}