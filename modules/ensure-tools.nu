# Check if they're installed all the commands and tools needed for working in the monorepo
export def tools-ensure [] {
    const COMMANDS_TO_CHECK = ["pnpm" "npm" "addlicense"]

     $COMMANDS_TO_CHECK | each {|command|
        log info $"Checking '($command)'"

        if (which $command | length) < 1 {
            log error $"The command '($command)' is not available!"
            exit 1
        }
    }

    ensure-python

    log info "Every tool is available!"
}

# Check if all the Python tools are properly set up
def ensure-python [] {
    # Here comes Python installation hell (https://xkcd.com/1987/)

    log info $"Checking Python installation"
    let python_version = (python3 --version | parse "{name} {mayor}.{minor}.{patch}").0 | reject name

    if ($python_version.mayor | into int) != 3 {
        log error "Somehow you have at the 'python3' command a version of Python different than 3.X.Y"
        exit 1
    }

    if ($python_version.minor | into int) < 13 {
        log error "Your Python3 installation is below 3.13.Y, please update Python"
        exit 1
    }

    if ($python_version.patch | into int) < 1 {
        log error "Your Python3 installation is below 3.13.1, please update Python"
        exit 1
    }
}
