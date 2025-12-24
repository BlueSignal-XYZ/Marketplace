#!/bin/bash

# Setup environment variables for Vite build
# This script writes VITE_* environment variables to a .env file
# so Vite can pick them up during the build process.
#
# This is needed because some CI/CD environments (like Cloudflare Pages)
# may not pass environment variables directly to the Vite build process.

ENV_FILE=".env"

echo "Setting up environment variables for Vite build..."

# Create or overwrite .env file with all VITE_* environment variables
> "$ENV_FILE"

# Write each VITE_* variable to .env file
env | grep "^VITE_" | while read -r line; do
    echo "$line" >> "$ENV_FILE"
done

# Count how many variables were written
COUNT=$(grep -c "^VITE_" "$ENV_FILE" 2>/dev/null || echo "0")

if [ "$COUNT" -gt 0 ]; then
    echo "Wrote $COUNT VITE_* environment variables to $ENV_FILE"
    # Show variable names (not values) for debugging
    echo "Variables configured:"
    grep "^VITE_" "$ENV_FILE" | cut -d'=' -f1 | sed 's/^/  - /'
else
    echo "Warning: No VITE_* environment variables found!"
    echo "Make sure environment variables are configured in your CI/CD settings."
fi
