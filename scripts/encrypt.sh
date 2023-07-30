#!/bin/bash

set -e

# Check if the encryption password is already set in the environment
if [ -z "$DOTENV_PASS" ] && [ ! -f ".env.pass" ]; then
  # Prompt the user to enter the encryption password
  read -s -p "Enter the encryption password: " encryption_password
  echo

  if [ -z "$encryption_password" ]; then
      echo "Error: Password cannot be empty."
      exit 1
  fi

  read -s -p "Confirm the encryption password: " encryption_password_confirm
  echo

  if [ "$encryption_password" != "$encryption_password_confirm" ]; then
      echo "Error: Passwords do not match."
      exit 1
  fi

  # Set the encryption password as an environment variable
  #  export DOTENV_PASS="$encryption_password"
  read -p "Do you want to store the password in the .env.pass file? (y/n): " store_password

  if [ "$store_password" = "y" ] || [ "$store_password" = "Y" ]; then
    # Save the encryption password to the .env.pass file
    echo "$encryption_password" > .env.pass
    echo "Password saved to .env.pass."
  fi
fi

# Encrypt the .env files using the provided password
npx senv encrypt .env.development > .env.development.enc
npx senv encrypt .env.production > .env.production.enc
