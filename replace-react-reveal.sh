#!/bin/bash

# Script to replace react-reveal with framer-motion in all JSX files

echo "🔄 Replacing react-reveal with framer-motion..."

# Function to replace in a file
replace_in_file() {
    local file="$1"
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Replace imports
    sed -i 's/import Zoom from "react-reveal\/Zoom";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import { Zoom } from "react-reveal";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import Fade from "react-reveal\/Fade";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import { Fade } from "react-reveal";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import Flip from "react-reveal\/Flip";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import { Flip } from "react-reveal";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import Slide from "react-reveal\/Slide";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import { Slide } from "react-reveal";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import LightSpeed from "react-reveal\/LightSpeed";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import { LightSpeed } from "react-reveal";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import Tada from "react-reveal\/Tada";/import { motion } from "framer-motion";/g' "$file"
    sed -i 's/import { Tada } from "react-reveal";/import { motion } from "framer-motion";/g' "$file"
}

# Find all JSX files with react-reveal imports
files=$(grep -l "react-reveal" src/**/*.jsx src/**/**/*.jsx src/**/**/**/*.jsx 2>/dev/null || true)

for file in $files; do
    if [ -f "$file" ]; then
        replace_in_file "$file"
    fi
done

echo "✅ Import replacements completed!"
echo "⚠️  Note: You'll need to manually update the JSX components to use framer-motion syntax"
echo "📝 Example: <Zoom> becomes <motion.div initial={{scale: 0}} animate={{scale: 1}}>"
