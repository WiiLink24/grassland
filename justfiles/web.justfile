# Setup the environment needed by all web related tools
[script]
setup-web:
    pnpm i

# Check, lint and format all JS/TS/Node.js/Svelte/etc files
[script]
check-web:
    pnpm exec syncpack -- fix-mismatches
    pnpm exec syncpack -- format
