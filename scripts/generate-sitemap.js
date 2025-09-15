#!/usr/bin/env node

/**
 * Automated Sitemap Generation Script
 * This script generates sitemaps for the Decimal Solution website
 * and can be run manually or via cron job
 */

/* eslint-disable */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Configuration
const SITEMAP_CONFIG = {
  outputDir: "./public",
  logFile: "./logs/sitemap-generation.log",
  maxRetries: 3,
  retryDelay: 5000, // 5 seconds
};

// Ensure logs directory exists
const logsDir = path.dirname(SITEMAP_CONFIG.logFile);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

/**
 * Log messages with timestamp
 */
function log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;

  console.log(logMessage);

  // Write to log file
  fs.appendFileSync(SITEMAP_CONFIG.logFile, logMessage + "\n");
}

/**
 * Generate sitemap with retry logic
 */
async function generateSitemap() {
  let attempts = 0;

  while (attempts < SITEMAP_CONFIG.maxRetries) {
    try {
      log(`Starting sitemap generation (attempt ${attempts + 1}/${SITEMAP_CONFIG.maxRetries})`);

      // Check if we're in the right directory
      if (!fs.existsSync("./next-sitemap.config.js")) {
        throw new Error("next-sitemap.config.js not found. Please run this script from the project root.");
      }

      // Generate sitemap
      execSync("npx next-sitemap", {
        stdio: "pipe",
        cwd: process.cwd(),
      });

      // Verify sitemap was created
      const sitemapPath = path.join(SITEMAP_CONFIG.outputDir, "sitemap.xml");
      if (fs.existsSync(sitemapPath)) {
        const stats = fs.statSync(sitemapPath);
        log(`Sitemap generated successfully! Size: ${stats.size} bytes`);
        log(`Sitemap location: ${sitemapPath}`);

        // Also generate robots.txt if it doesn't exist
        const robotsPath = path.join(SITEMAP_CONFIG.outputDir, "robots.txt");
        if (!fs.existsSync(robotsPath)) {
          const robotsContent = `User-agent: *
Allow: /

Sitemap: https://www.decimalsolution.com/sitemap.xml`;
          fs.writeFileSync(robotsPath, robotsContent);
          log("robots.txt generated");
        }

        return true;
      } else {
        throw new Error("Sitemap file was not created");
      }
    } catch (error) {
      attempts++;
      log(`Sitemap generation failed (attempt ${attempts}): ${error.message}`, "ERROR");

      if (attempts < SITEMAP_CONFIG.maxRetries) {
        log(`Retrying in ${SITEMAP_CONFIG.retryDelay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, SITEMAP_CONFIG.retryDelay));
      } else {
        log("All retry attempts failed. Sitemap generation unsuccessful.", "ERROR");
        return false;
      }
    }
  }

  return false;
}

/**
 * Clean up old sitemap files
 */
function cleanupOldSitemaps() {
  try {
    const sitemapFiles = ["sitemap.xml", "sitemap-0.xml", "sitemap.xsl"];

    sitemapFiles.forEach((file) => {
      const filePath = path.join(SITEMAP_CONFIG.outputDir, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);

        // Remove files older than 24 hours
        if (ageInHours > 24) {
          fs.unlinkSync(filePath);
          log(`Removed old sitemap file: ${file}`);
        }
      }
    });
  } catch (error) {
    log(`Error during cleanup: ${error.message}`, "WARN");
  }
}

/**
 * Main execution
 */
async function main() {
  log("=== Sitemap Generation Script Started ===");

  try {
    // Clean up old files
    cleanupOldSitemaps();

    // Generate new sitemap
    const success = await generateSitemap();

    if (success) {
      log("=== Sitemap Generation Completed Successfully ===");
      process.exit(0);
    } else {
      log("=== Sitemap Generation Failed ===", "ERROR");
      process.exit(1);
    }
  } catch (error) {
    log(`Unexpected error: ${error.message}`, "ERROR");
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, cleanupOldSitemaps };
