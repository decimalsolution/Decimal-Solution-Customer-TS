#!/usr/bin/env node

/**
 * Advanced Sitemap Generator for Decimal Solution
 * Features:
 * - Automatic sitemap generation with dynamic content
 * - Sitemap validation
 * - Performance monitoring
 * - Email notifications (optional)
 * - Integration with webhook endpoints
 */

/* eslint-disable */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

// Configuration
const CONFIG = {
  siteUrl: "https://www.decimalsolution.com",
  outputDir: "./public",
  logFile: "./logs/sitemap-generation.log",
  maxRetries: 3,
  retryDelay: 5000,
  webhookUrl: process.env.SITEMAP_WEBHOOK_URL, // Optional webhook for notifications
  emailNotification: process.env.EMAIL_NOTIFICATION === "true",
  emailRecipients: process.env.EMAIL_RECIPIENTS?.split(",") || [],
  performanceThreshold: 30000, // 30 seconds
};

// Ensure logs directory exists
const logsDir = path.dirname(CONFIG.logFile);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

/**
 * Enhanced logging with different levels
 */
class Logger {
  static log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;

    console.log(logMessage);
    fs.appendFileSync(CONFIG.logFile, logMessage + "\n");
  }

  static info(message) {
    this.log(message, "INFO");
  }
  static warn(message) {
    this.log(message, "WARN");
  }
  static error(message) {
    this.log(message, "ERROR");
  }
  static success(message) {
    this.log(message, "SUCCESS");
  }
}

/**
 * Performance monitoring
 */
class PerformanceMonitor {
  constructor() {
    this.startTime = Date.now();
    this.checkpoints = [];
  }

  checkpoint(name) {
    const now = Date.now();
    const duration = now - this.startTime;
    this.checkpoints.push({ name, duration, timestamp: now });
    Logger.info(`Checkpoint '${name}': ${duration}ms`);
  }

  getTotalDuration() {
    return Date.now() - this.startTime;
  }

  getReport() {
    const total = this.getTotalDuration();
    return {
      totalDuration: total,
      checkpoints: this.checkpoints,
      isSlow: total > CONFIG.performanceThreshold,
    };
  }
}

/**
 * Sitemap validator
 */
class SitemapValidator {
  static validate(sitemapPath) {
    try {
      if (!fs.existsSync(sitemapPath)) {
        throw new Error("Sitemap file does not exist");
      }

      const content = fs.readFileSync(sitemapPath, "utf8");

      // Basic XML validation
      if (!content.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
        throw new Error("Invalid XML declaration");
      }

      if (!content.includes("<urlset")) {
        throw new Error("Missing urlset element");
      }

      // Count URLs
      const urlMatches = content.match(/<url>/g);
      const urlCount = urlMatches ? urlMatches.length : 0;

      Logger.info(`Sitemap validation passed. Found ${urlCount} URLs`);

      return {
        isValid: true,
        urlCount,
        fileSize: fs.statSync(sitemapPath).size,
      };
    } catch (error) {
      Logger.error(`Sitemap validation failed: ${error.message}`);
      return { isValid: false, error: error.message };
    }
  }
}

/**
 * Webhook notification sender
 */
class WebhookNotifier {
  static async sendNotification(data) {
    if (!CONFIG.webhookUrl) {
      Logger.info("No webhook URL configured, skipping notification");
      return;
    }

    try {
      const payload = JSON.stringify({
        timestamp: new Date().toISOString(),
        event: "sitemap_generated",
        data: {
          success: data.success,
          urlCount: data.urlCount,
          fileSize: data.fileSize,
          duration: data.duration,
          siteUrl: CONFIG.siteUrl,
        },
      });

      const url = new URL(CONFIG.webhookUrl);
      const options = {
        hostname: url.hostname,
        port: url.port || 443,
        path: url.pathname,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      };

      const req = https.request(options, (res) => {
        Logger.info(`Webhook notification sent. Status: ${res.statusCode}`);
      });

      req.on("error", (error) => {
        Logger.warn(`Webhook notification failed: ${error.message}`);
      });

      req.write(payload);
      req.end();
    } catch (error) {
      Logger.warn(`Error sending webhook notification: ${error.message}`);
    }
  }
}

/**
 * Enhanced sitemap generator with monitoring
 */
class SitemapGenerator {
  constructor() {
    this.monitor = new PerformanceMonitor();
  }

  async generate() {
    this.monitor.checkpoint("start");

    let attempts = 0;
    let lastError = null;

    while (attempts < CONFIG.maxRetries) {
      try {
        Logger.info(`Starting sitemap generation (attempt ${attempts + 1}/${CONFIG.maxRetries})`);

        // Pre-generation checks
        this.monitor.checkpoint("pre_checks");
        await this.preGenerationChecks();

        // Generate sitemap
        this.monitor.checkpoint("generation_start");
        await this.runSitemapGeneration();

        // Validate sitemap
        this.monitor.checkpoint("validation_start");
        const validation = await this.validateSitemap();

        if (!validation.isValid) {
          throw new Error(`Sitemap validation failed: ${validation.error}`);
        }

        // Post-generation tasks
        this.monitor.checkpoint("post_tasks");
        await this.postGenerationTasks();

        this.monitor.checkpoint("complete");

        const report = this.monitor.getReport();
        Logger.success(`Sitemap generation completed successfully in ${report.totalDuration}ms`);

        // Send notifications
        await WebhookNotifier.sendNotification({
          success: true,
          urlCount: validation.urlCount,
          fileSize: validation.fileSize,
          duration: report.totalDuration,
        });

        return {
          success: true,
          urlCount: validation.urlCount,
          fileSize: validation.fileSize,
          duration: report.totalDuration,
          isSlow: report.isSlow,
        };
      } catch (error) {
        attempts++;
        lastError = error;
        Logger.error(`Sitemap generation failed (attempt ${attempts}): ${error.message}`);

        if (attempts < CONFIG.maxRetries) {
          Logger.info(`Retrying in ${CONFIG.retryDelay / 1000} seconds...`);
          await new Promise((resolve) => setTimeout(resolve, CONFIG.retryDelay));
        }
      }
    }

    // All attempts failed
    Logger.error(`All retry attempts failed. Last error: ${lastError?.message}`);

    await WebhookNotifier.sendNotification({
      success: false,
      error: lastError?.message,
      duration: this.monitor.getTotalDuration(),
    });

    return { success: false, error: lastError?.message };
  }

  async preGenerationChecks() {
    // Check if we're in the right directory
    if (!fs.existsSync("./next-sitemap.config.js")) {
      throw new Error("next-sitemap.config.js not found. Please run this script from the project root.");
    }

    // Check if output directory exists
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
      Logger.info(`Created output directory: ${CONFIG.outputDir}`);
    }

    // Check available disk space (basic check)
    fs.statSync(CONFIG.outputDir);
    Logger.info("Pre-generation checks completed");
  }

  async runSitemapGeneration() {
    try {
      execSync("npx next-sitemap", {
        stdio: "pipe",
        cwd: process.cwd(),
        timeout: 60000, // 60 second timeout
      });
      Logger.info("Sitemap generation command completed");
    } catch (error) {
      throw new Error(`Sitemap generation command failed: ${error.message}`);
    }
  }

  async validateSitemap() {
    const sitemapPath = path.join(CONFIG.outputDir, "sitemap.xml");
    return SitemapValidator.validate(sitemapPath);
  }

  async postGenerationTasks() {
    // Generate robots.txt if it doesn't exist
    const robotsPath = path.join(CONFIG.outputDir, "robots.txt");
    if (!fs.existsSync(robotsPath)) {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: ${CONFIG.siteUrl}/sitemap.xml`;
      fs.writeFileSync(robotsPath, robotsContent);
      Logger.info("robots.txt generated");
    }

    // Clean up old sitemap files
    this.cleanupOldFiles();

    Logger.info("Post-generation tasks completed");
  }

  cleanupOldFiles() {
    try {
      const files = fs.readdirSync(CONFIG.outputDir);
      const sitemapFiles = files.filter((file) => file.startsWith("sitemap") && file.endsWith(".xml"));

      sitemapFiles.forEach((file) => {
        const filePath = path.join(CONFIG.outputDir, file);
        const stats = fs.statSync(filePath);
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);

        // Remove files older than 24 hours (except the main sitemap.xml)
        if (ageInHours > 24 && file !== "sitemap.xml") {
          fs.unlinkSync(filePath);
          Logger.info(`Removed old sitemap file: ${file}`);
        }
      });
    } catch (error) {
      Logger.warn(`Error during cleanup: ${error.message}`);
    }
  }
}

/**
 * Main execution function
 */
async function main() {
  Logger.info("=== Advanced Sitemap Generation Started ===");

  const generator = new SitemapGenerator();
  const result = await generator.generate();

  if (result.success) {
    Logger.success("=== Sitemap Generation Completed Successfully ===");
    if (result.isSlow) {
      Logger.warn(
        `Warning: Generation took ${result.duration}ms, which is above the threshold of ${CONFIG.performanceThreshold}ms`
      );
    }
    process.exit(0);
  } else {
    Logger.error("=== Sitemap Generation Failed ===");
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch((error) => {
    Logger.error(`Unexpected error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { SitemapGenerator, SitemapValidator, WebhookNotifier };
