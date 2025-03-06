use ./log.nu

# Setup the environment needed by all web related tools
export def setup [] {
    log info "Setting up Web related tools"
    pnpm install
}

# Check, lint and format all JS/TS/Node.js/Vue/Nuxt/etc files
export def check [] {
    log info "Checking Web related tools"

    pnpm exec syncpack -- fix-mismatches
    pnpm exec syncpack -- format
}