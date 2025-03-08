use ./log.nu

# Setup the environment needed by all web related tools
export def setup [] {
    log info "Setting up Web related tools"
    pnpm install
}

# Check if web files are linted
export def check [] {
    pnpx eslint
    pnpx prettier . --check
}

# Check, lint and format all JS/TS/Node.js/Vue/Nuxt/etc files
export def fix [] {
    log info "Checking Web related tools"

    # Syncpack cannot be checked, only fixed
    # ~TRACK: https://github.com/JamieMason/syncpack/issues/216
    pnpx syncpack -- fix-mismatches --types '!local'
    pnpx syncpack -- format

    pnpx prettier . --write
    pnpx eslint --fix
}