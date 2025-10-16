#!/bin/bash

# Simple script to rename all .js files to .jsx in src directory only
# This avoids touching any configuration files

echo "🔄 Starting to rename .js files to .jsx in src directory..."
echo "============================================================"

# Check if src directory exists
if [ ! -d "src" ]; then
    echo "❌ Error: src directory not found!"
    exit 1
fi

# Counter for renamed files
count=0

# Find all .js files in the src directory only
echo "📁 Searching for .js files in src directory..."

# List files that will be renamed (for confirmation)
js_files=$(find src -name "*.js" -type f)

if [ -z "$js_files" ]; then
    echo "✅ No .js files found in src directory. All files might already be .jsx!"
    exit 0
fi

echo ""
echo "📋 Files to be renamed:"
echo "$js_files"
echo ""

# Ask for confirmation
read -p "🤔 Do you want to proceed with renaming these files? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Operation cancelled."
    exit 0
fi

echo ""
echo "🚀 Proceeding with renaming..."

# Rename each file
while IFS= read -r file; do
    if [ -n "$file" ]; then
        # Get the directory and filename without extension
        dir=$(dirname "$file")
        filename=$(basename "$file" .js)
        
        # New filename with .jsx extension
        new_file="${dir}/${filename}.jsx"
        
        echo "  📝 Renaming: $file → $new_file"
        
        # Rename the file
        mv "$file" "$new_file"
        
        # Increment counter
        ((count++))
    fi
done <<< "$js_files"

echo ""
echo "✅ Completed! Renamed $count files from .js to .jsx"
echo ""
echo "📂 Current .jsx files in src directory:"
find src -name "*.jsx" -type f | sort
echo ""
echo "⚠️  Important reminders:"
echo "   1. Update any import statements that explicitly reference .js extensions"
echo "   2. Test your application with: npm run dev"
echo "   3. Check for any compilation errors"
echo ""
echo "🎉 Transformation complete!"
