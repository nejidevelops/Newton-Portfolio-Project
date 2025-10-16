#!/bin/bash

# Script to rename all .js files to .jsx in a React project
# This script will:
# 1. Find all .js files in src directory
# 2. Rename them to .jsx
# 3. Update import statements in all files to reference the new .jsx extensions

echo "🚀 Starting JS to JSX transformation..."
echo "======================================"

# Change to the project directory
cd "$(dirname "$0")"

# Counter for renamed files
renamed_count=0

# Function to rename files and update imports
rename_js_files() {
    # Find all .js files in src directory (excluding node_modules)
    find src -name "*.js" -type f | while read -r file; do
        # Get the directory and filename without extension
        dir=$(dirname "$file")
        basename=$(basename "$file" .js)
        
        # New filename with .jsx extension
        new_file="$dir/$basename.jsx"
        
        echo "📝 Renaming: $file → $new_file"
        
        # Rename the file
        mv "$file" "$new_file"
        
        ((renamed_count++))
    done
}

# Function to update import statements
update_imports() {
    echo ""
    echo "🔄 Updating import statements..."
    echo "================================"
    
    # Find all .jsx, .js, and .ts files to update imports
    find src -type f \( -name "*.jsx" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" \) | while read -r file; do
        # Create a temporary file for modifications
        temp_file=$(mktemp)
        
        # Flag to track if file was modified
        modified=false
        
        # Process each line of the file
        while IFS= read -r line; do
            # Check for import statements that reference .js files
            if [[ $line =~ ^[[:space:]]*import.*from[[:space:]]+[\"\']\.[^\"\']*\.js[\"\']\;?[[:space:]]*$ ]]; then
                # Replace .js with .jsx in the import path
                updated_line=$(echo "$line" | sed 's/\.js["'"'"']/\.jsx["'"'"']/g')
                echo "$updated_line" >> "$temp_file"
                if [[ "$line" != "$updated_line" ]]; then
                    modified=true
                    echo "  ✅ Updated import in: $file"
                    echo "     Old: $line"
                    echo "     New: $updated_line"
                fi
            else
                echo "$line" >> "$temp_file"
            fi
        done < "$file"
        
        # Replace original file if modifications were made
        if [[ "$modified" == "true" ]]; then
            mv "$temp_file" "$file"
        else
            rm "$temp_file"
        fi
    done
}

# Function to update dynamic imports and require statements
update_dynamic_imports() {
    echo ""
    echo "🔄 Updating dynamic imports and require statements..."
    echo "=================================================="
    
    # Find all files and update dynamic imports
    find src -type f \( -name "*.jsx" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" \) -exec grep -l "\.js[\"']" {} \; | while read -r file; do
        # Use sed to replace .js with .jsx in dynamic imports and require statements
        sed -i.bak 's/\(import\|require\)(\([^)]*\)\.js\([\"'"'"']\))/\1(\2.jsx\3)/g' "$file"
        sed -i.bak 's/\(import\)(\([^)]*\)\.js\([\"'"'"']\))/\1(\2.jsx\3)/g' "$file"
        
        # Remove backup file if no changes were made
        if cmp -s "$file" "$file.bak"; then
            rm "$file.bak"
        else
            echo "  ✅ Updated dynamic imports in: $file"
            rm "$file.bak"
        fi
    done
}

# Function to check for any remaining .js references
check_remaining_references() {
    echo ""
    echo "🔍 Checking for any remaining .js references..."
    echo "=============================================="
    
    # Search for any remaining .js references in import/require statements
    remaining_refs=$(find src -type f \( -name "*.jsx" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" \) -exec grep -Hn "from.*\.js[\"']" {} \; 2>/dev/null)
    
    if [[ -n "$remaining_refs" ]]; then
        echo "⚠️  Found remaining .js references that may need manual review:"
        echo "$remaining_refs"
    else
        echo "✅ No remaining .js references found!"
    fi
}

# Main execution
echo "📁 Working directory: $(pwd)"
echo ""

# Step 1: Rename .js files to .jsx
echo "Step 1: Renaming .js files to .jsx..."
rename_js_files

# Step 2: Update import statements
echo "Step 2: Updating import statements..."
update_imports

# Step 3: Update dynamic imports
echo "Step 3: Updating dynamic imports..."
update_dynamic_imports

# Step 4: Check for remaining references
check_remaining_references

echo ""
echo "🎉 Transformation completed!"
echo "=========================="
echo "📊 Summary:"
echo "   - All .js files in src/ have been renamed to .jsx"
echo "   - Import statements have been updated"
echo "   - Dynamic imports have been updated"
echo ""
echo "🔧 Next steps:"
echo "   1. Test your application: npm run dev"
echo "   2. Check for any compilation errors"
echo "   3. Manually review any remaining references if reported above"
echo ""
echo "💡 If you encounter any issues, you can restore from git if needed."
echo ""
