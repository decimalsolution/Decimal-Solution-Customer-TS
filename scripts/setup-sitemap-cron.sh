#!/bin/bash

# Sitemap Cron Job Setup Script for Decimal Solution
# This script sets up automated sitemap generation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
CRON_LOG="/var/log/sitemap-generation.log"
CRON_SCRIPT="$SCRIPT_DIR/generate-sitemap.js"

echo -e "${BLUE}=== Decimal Solution Sitemap Cron Setup ===${NC}"

# Check if running as root for system-wide cron
if [[ $EUID -eq 0 ]]; then
    echo -e "${YELLOW}Running as root - setting up system-wide cron job${NC}"
    CRON_USER="root"
else
    echo -e "${YELLOW}Running as user - setting up user cron job${NC}"
    CRON_USER="$USER"
fi

# Make scripts executable
echo -e "${BLUE}Making scripts executable...${NC}"
chmod +x "$SCRIPT_DIR/generate-sitemap.js"
chmod +x "$SCRIPT_DIR/advanced-sitemap-generator.js"

# Create log directory
echo -e "${BLUE}Creating log directory...${NC}"
mkdir -p "$PROJECT_DIR/logs"
mkdir -p "$(dirname "$CRON_LOG")"

# Create cron job entry
CRON_ENTRY="0 */6 * * * cd $PROJECT_DIR && node $CRON_SCRIPT >> $CRON_LOG 2>&1"

echo -e "${BLUE}Proposed cron job entry:${NC}"
echo -e "${YELLOW}$CRON_ENTRY${NC}"
echo ""

# Ask for confirmation
read -p "Do you want to add this cron job? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Add to crontab
    (crontab -l 2>/dev/null; echo "$CRON_ENTRY") | crontab -
    echo -e "${GREEN}✓ Cron job added successfully!${NC}"
    echo -e "${GREEN}✓ Sitemap will be generated every 6 hours${NC}"
else
    echo -e "${YELLOW}Cron job not added. You can add it manually later.${NC}"
fi

# Create additional cron options
echo ""
echo -e "${BLUE}=== Additional Cron Options ===${NC}"
echo "You can also set up different schedules:"
echo ""
echo -e "${YELLOW}Every hour:${NC}"
echo "0 * * * * cd $PROJECT_DIR && node $CRON_SCRIPT >> $CRON_LOG 2>&1"
echo ""
echo -e "${YELLOW}Every 4 hours:${NC}"
echo "0 */4 * * * cd $PROJECT_DIR && node $CRON_SCRIPT >> $CRON_LOG 2>&1"
echo ""
echo -e "${YELLOW}Daily at 2 AM:${NC}"
echo "0 2 * * * cd $PROJECT_DIR && node $CRON_SCRIPT >> $CRON_LOG 2>&1"
echo ""
echo -e "${YELLOW}Every 12 hours:${NC}"
echo "0 */12 * * * cd $PROJECT_DIR && node $CRON_SCRIPT >> $CRON_LOG 2>&1"

# Create manual test script
echo ""
echo -e "${BLUE}Creating manual test script...${NC}"
cat > "$SCRIPT_DIR/test-sitemap.sh" << 'EOF'
#!/bin/bash
echo "Testing sitemap generation..."
cd "$(dirname "$0")/.."
node scripts/generate-sitemap.js
echo "Test completed. Check logs/sitemap-generation.log for details."
EOF
chmod +x "$SCRIPT_DIR/test-sitemap.sh"

echo -e "${GREEN}✓ Manual test script created: scripts/test-sitemap.sh${NC}"

# Show current crontab
echo ""
echo -e "${BLUE}Current crontab for $CRON_USER:${NC}"
crontab -l 2>/dev/null || echo "No crontab entries found"

echo ""
echo -e "${GREEN}=== Setup Complete ===${NC}"
echo -e "To test the sitemap generation manually, run:"
echo -e "${YELLOW}./scripts/test-sitemap.sh${NC}"
echo ""
echo -e "To view logs, run:"
echo -e "${YELLOW}tail -f logs/sitemap-generation.log${NC}"
echo ""
echo -e "To remove the cron job, run:"
echo -e "${YELLOW}crontab -e${NC}"
echo -e "Then delete the sitemap generation line"
