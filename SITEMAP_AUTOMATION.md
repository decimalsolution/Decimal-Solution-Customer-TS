# Sitemap Automation for Decimal Solution

This document explains the automated sitemap generation system for the Decimal Solution website.

## 🚀 Overview

The sitemap automation system ensures that your website's sitemap is always up-to-date with the latest content, including:

- Static pages (About, Services, Contact, etc.)
- Dynamic blog posts
- Job listings
- Service pages
- Portfolio projects

## 📁 Files Structure

```
scripts/
├── generate-sitemap.js              # Basic sitemap generator
├── advanced-sitemap-generator.js    # Advanced generator with monitoring
├── setup-sitemap-cron.sh           # Cron job setup script
└── test-sitemap.sh                 # Manual test script

.github/workflows/
└── sitemap-generation.yml          # GitHub Actions workflow

logs/
└── sitemap-generation.log          # Generation logs
```

## 🛠️ Available Scripts

### NPM Scripts

```bash
# Generate sitemap (basic)
npm run sitemap

# Generate sitemap (advanced with monitoring)
npm run sitemap:advanced

# Test sitemap generation
npm run sitemap:test

# Setup cron job for automation
npm run sitemap:setup
```

### Manual Scripts

```bash
# Basic sitemap generation
node scripts/generate-sitemap.js

# Advanced sitemap generation with monitoring
node scripts/advanced-sitemap-generator.js

# Setup cron job
./scripts/setup-sitemap-cron.sh

# Test sitemap generation
./scripts/test-sitemap.sh
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required
NEXT_PUBLIC_BASE_URL=https://www.decimalsolution.com

# Optional - for advanced features
SITEMAP_WEBHOOK_URL=https://your-webhook-url.com/sitemap-notifications
EMAIL_NOTIFICATION=true
EMAIL_RECIPIENTS=admin@decimalsolution.com,dev@decimalsolution.com
```

### Cron Job Schedules

The system supports various cron schedules:

```bash
# Every hour
0 * * * *

# Every 4 hours
0 */4 * * *

# Every 6 hours (recommended)
0 */6 * * *

# Every 12 hours
0 */12 * * *

# Daily at 2 AM
0 2 * * *
```

## 🔄 Automation Methods

### 1. Cron Jobs (Recommended for VPS/Dedicated Servers)

```bash
# Setup automated cron job
npm run sitemap:setup

# Or manually add to crontab
crontab -e

# Add this line for every 6 hours:
0 */6 * * * cd /path/to/your/project && node scripts/generate-sitemap.js >> logs/sitemap-generation.log 2>&1
```

### 2. GitHub Actions (Recommended for GitHub-hosted projects)

The GitHub Actions workflow automatically runs:

- Every 6 hours via cron
- On every push to main branch
- When manually triggered
- When sitemap-related files change

### 3. CI/CD Integration

Add to your deployment pipeline:

```yaml
# Example for various CI/CD platforms
- name: Generate Sitemap
  run: npm run sitemap
```

## 📊 Monitoring & Logging

### Log Files

- **Location**: `logs/sitemap-generation.log`
- **Format**: `[timestamp] [level] message`
- **Levels**: INFO, WARN, ERROR, SUCCESS

### View Logs

```bash
# View recent logs
tail -f logs/sitemap-generation.log

# View last 100 lines
tail -n 100 logs/sitemap-generation.log

# Search for errors
grep ERROR logs/sitemap-generation.log
```

### Performance Monitoring

The advanced generator includes performance monitoring:

- **Threshold**: 30 seconds (configurable)
- **Checkpoints**: Track generation stages
- **Alerts**: Notifications for slow generation

## 🔧 Advanced Features

### Webhook Notifications

Configure webhook notifications for sitemap generation events:

```javascript
// Example webhook payload
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "event": "sitemap_generated",
  "data": {
    "success": true,
    "urlCount": 150,
    "fileSize": 45678,
    "duration": 2500,
    "siteUrl": "https://www.decimalsolution.com"
  }
}
```

### Sitemap Validation

The system automatically validates generated sitemaps:

- ✅ XML format validation
- ✅ URL count verification
- ✅ File size checks
- ✅ Structure validation

### Error Handling

- **Retry Logic**: 3 attempts with 5-second delays
- **Graceful Degradation**: Continues on non-critical errors
- **Detailed Logging**: Comprehensive error reporting

## 🚨 Troubleshooting

### Common Issues

1. **Permission Denied**

   ```bash
   chmod +x scripts/*.sh
   chmod +x scripts/*.js
   ```

2. **Node Modules Not Found**

   ```bash
   npm install
   ```

3. **Cron Job Not Running**

   ```bash
   # Check cron service
   sudo systemctl status cron

   # Check user crontab
   crontab -l
   ```

4. **Sitemap Generation Fails**

   ```bash
   # Check logs
   tail -f logs/sitemap-generation.log

   # Test manually
   npm run sitemap:test
   ```

### Debug Mode

Run with debug information:

```bash
DEBUG=true node scripts/generate-sitemap.js
```

## 📈 Performance Optimization

### Recommendations

1. **Schedule**: Run every 6 hours (not more frequent)
2. **Timing**: Run during low-traffic hours
3. **Monitoring**: Set up alerts for failures
4. **Cleanup**: Old sitemap files are automatically cleaned up

### Resource Usage

- **CPU**: Minimal (runs for ~5-30 seconds)
- **Memory**: ~50-100MB during generation
- **Disk**: ~1-5MB for sitemap files
- **Network**: Fetches dynamic content from API

## 🔒 Security Considerations

- Scripts run with minimal permissions
- No sensitive data in logs
- Webhook URLs should use HTTPS
- Cron jobs run as non-root user when possible

## 📞 Support

For issues or questions:

1. Check the logs first: `tail -f logs/sitemap-generation.log`
2. Test manually: `npm run sitemap:test`
3. Review this documentation
4. Check GitHub Issues for known problems

## 🎯 Best Practices

1. **Regular Monitoring**: Check logs weekly
2. **Backup**: Keep sitemap backups
3. **Testing**: Test after major content changes
4. **Documentation**: Update this guide when making changes
5. **Performance**: Monitor generation times

---

**Last Updated**: January 2024  
**Version**: 1.0.0  
**Maintainer**: Decimal Solution Development Team
