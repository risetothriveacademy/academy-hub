#!/bin/bash
set -e

echo "🚀 Pushing code to GitHub repository..."
echo "Repository: https://github.com/risetothriveacademy/academy-learning-platform"
echo ""

# Check if git remote is set
if ! git remote get-url origin &> /dev/null; then
  git remote add origin https://github.com/risetothriveacademy/academy-learning-platform.git
else
  git remote set-url origin https://github.com/risetothriveacademy/academy-learning-platform.git
fi

# Push to main branch
echo "Pushing to main branch..."
git push -u origin main

echo "✅ Code successfully pushed to GitHub!"
echo "Visit: https://github.com/risetothriveacademy/academy-learning-platform"
