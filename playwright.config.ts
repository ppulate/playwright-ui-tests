import { defineConfig } from '@playwright/test';
import path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Get credentials from env or CI secrets
const username = process.env.TEST_USERNAME || '';
const password = process.env.TEST_PASSWORD || '';
// const apiToken = process.env.API_TOKEN || '';

// Fail only if username/password are missing
if (!username) throw new Error('TEST_USERNAME is not defined!');
if (!password) throw new Error('TEST_PASSWORD is not defined!');
// Optional: API token validation
// if (!apiToken) console.warn('API_TOKEN is not defined. Skipping API tests.');

export default defineConfig({
  timeout: 30 * 1000,
  retries: 2,
  workers: 4,
  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html', { open: 'never' }]
  ],
  use: {
    baseURL: 'https://practice.expandtesting.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
   // extraHTTPHeaders: {
      // Only add API token header if defined
      // Authorization: apiToken ? `Bearer ${apiToken}` : undefined,
   // },
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox',  use: { browserName: 'firefox' } },
    { name: 'WebKit',   use: { browserName: 'webkit' } },
  ],
  outputDir: 'test-results/',
});
