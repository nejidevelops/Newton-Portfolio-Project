#!/bin/bash

echo "🔄 Quick fix for deployment - removing react-reveal from critical components..."

# Create a simple replacement function
quick_fix() {
    local file="$1"
    echo "Fixing: $file"
    
    if [ -f "$file" ]; then
        # Simple replacements that won't break functionality
        sed -i 's/import.*react-reveal.*;//g' "$file"
        sed -i 's/<Zoom[^>]*>//g' "$file"
        sed -i 's/<\/Zoom>//g' "$file"
        sed -i 's/<Fade[^>]*>//g' "$file"
        sed -i 's/<\/Fade>//g' "$file"
        sed -i 's/<Flip[^>]*>//g' "$file"
        sed -i 's/<\/Flip>//g' "$file"
        sed -i 's/<Slide[^>]*>//g' "$file"
        sed -i 's/<\/Slide>//g' "$file"
        sed -i 's/<LightSpeed[^>]*>//g' "$file"
        sed -i 's/<\/LightSpeed>//g' "$file"
        sed -i 's/<Tada[^>]*>//g' "$file"
        sed -i 's/<\/Tada>//g' "$file"
        echo "✅ Fixed: $file"
    fi
}

# List of critical files for deployment
critical_files=(
    "src/components/aboutme/aboutmeContainer.jsx"
    "src/components/aboutme/ranking/Ranking.jsx"
    "src/components/aboutme/skills/TechnicalSkill.jsx"
    "src/components/aboutme/skills/Toolkit.jsx"
    "src/components/aboutme/skills/PersonalSkill.jsx"
    "src/components/aboutme/social_media/SocialMedia.jsx"
    "src/components/aboutme/about/About.jsx"
    "src/components/certificate/Certificate.jsx"
    "src/components/certificate/Certification.jsx"
    "src/components/projects/Projects.jsx"
    "src/pages/certificate_page/CertificatePage.jsx"
    "src/pages/resume_page/ResumePage.jsx"
)

# Fix critical files
for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        quick_fix "$file"
    fi
done

echo "🎉 Quick deployment fix completed!"
echo "📦 Your app should now deploy successfully on Netlify"
