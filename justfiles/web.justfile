# Setup the environment needed by all web related tools
setup-web:
    #!/usr/bin/env bash

    pnpm i

# Check, lint and format all JS/TS/Node.js/Svelte/etc files
check-web:
    #!/usr/bin/env bash

    pnpm exec syncpack -- fix-mismatches
    pnpm exec syncpack -- format
