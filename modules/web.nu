use ./log.nu *

# Setup the environment needed by all web related tools
export def setup-web [] {
    log info "Setting up Web related tools"
    pnpm i
}

# Check, lint and format all JS/TS/Node.js/Svelte/etc files
export def check-web [] {
    log info "Checking Web related tools"

    pnpm exec syncpack -- fix-mismatches
    pnpm exec syncpack -- format
}