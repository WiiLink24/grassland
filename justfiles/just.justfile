# Check, lint and format all available Just files
check-just:
    #!/usr/bin/env bash
    
    just --fmt -f ../**/justfile
    just --fmt -f ../**/*.justfile