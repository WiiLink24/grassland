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

    print $"Info: Checking Python installation"
    let python_version = (python3 --version | parse "{name} {mayor}.{minor}.{patch}").0 | reject name 

    if ($python_version.mayor | into int) != 3 {
        print "Error: Somehow you have at the 'python3' command a version of Python different than 3.X.Y"
        exit 1
    }

    if ($python_version.minor | into int) < 13 {
        print "Error: Your Python3 installation is below 3.13.Y, please update Python"
        exit 1
    }

    if ($python_version.patch | into int) < 1 {
        print "Error: Your Python3 installation is below 3.13.1, please update Python"
        exit 1
    }

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

# Build the Docker image of a project given a git tag. Mostly used in the CI/CD
[script]
build-docker-image tag:
    let tag = ("{{tag}}" | parse "{project}/{version}").0

    just -f $"./projects/($tag.project)/justfile" build-docker-image $tag.version

# Publish to ghcr.io the Docker image of a project given a git tag. Mostly used in the CI/CD
[script]
publish-docker-image tag:
    let tag = ("{{tag}}" | parse "{project}/{version}").0

    docker push $"ghcr.io/kutu-dev/($tag.project):($tag.version)"