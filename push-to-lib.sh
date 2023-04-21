#!/bin/bash

# Prompt the developer for the target branch name
echo "Enter the target branch name:"
read target_branch

# Build the React library
npm run build

# Clone the target repository
git clone git@bitbucket.org:mintoak/mintoak-ui-library.git

# Change directory to the cloned repository
cd mintoak-ui-library

# Check if the target branch exists in the origin
if git ls-remote --heads origin $target_branch | grep -q $target_branch; then
  # If the target branch exists, checkout the branch
  git checkout $target_branch
else
  # If the target branch doesn't exist, checkout the develop branch
  git checkout develop
  # Create a new branch from the develop branch
  git checkout -b $target_branch
fi

# Remove all files except package.json in the target directory
shopt -s extglob # Enable extended globbing
rm -rf !(package.json)

# Copy the contents of the dist folder to the target directory
cp -r <library_dir>/dist/* .

# Update the version number in package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{print $1"."$2"."$3+1}')
npm version $NEW_VERSION

# Commit the changes to the cloned repository
git add .
git commit -m "Update version and add dist folder"

# Push the changes to the remote repository
git push origin $target_branch

# Delete the cloned repository
cd ..
rm -rf <cloned_repo_dir>
