#!/bin/bash

set -e

# Check if the decryption password is already set in the environment
if [ -z "$DOTENV_PASS" ] && [ ! -f ".env.pass" ]; then
  # Prompt the user to enter the encryption password
  read -s -p "Enter the decryption password: " decryption_password
  echo

  # Set the encryption password as an environment variable
  # Validate if the entered password is not empty
  if [ -z "$decryption_password" ]; then
    echo "Error: Password cannot be empty."
    exit 1
  fi

  export DOTENV_PASS="$decryption_password"
fi

# Decrypt the .env files using the provided password
npx senv decrypt .env.development.enc > .env.development
npx senv decrypt .env.production.enc > .env.production
