#!/bin/bash

echo "🚀 Starting Loveable cleanup..."

# 1. Remove config/lock files
rm -f lovable.config.json
rm -f lovable.lock

# 2. Remove any workflows referencing Loveable
find .github/workflows -type f -name "*lovable*.yml" -exec rm -f {} \; 2>/dev/null

# 3. Remove frontend/backend files with "lovable" in name
find . -type f -name "*lovable*" -exec rm -f {} \;

# 4. Remove public assets with "lovable" in name
find public -type f -name "*lovable*" -exec rm -f {} \; 2>/dev/null

# 5. Clean up environment variables (LOVABLE_* entries)
if [ -f ".env" ]; then
  sed -i.bak '/^LOVABLE_/d' .env && echo "🧹 Removed LOVABLE_* vars from .env"
fi

# 6. Grep to warn about leftover references
echo "🔍 Searching for leftover 'lovable' references..."
grep -ri "lovable" . --exclude-dir=.git --exclude=remove_loveable.sh || echo "✅ No leftover references found."

echo "🎉 Loveable cleanup complete!"
