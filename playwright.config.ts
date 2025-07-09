import { defineConfig } from '@playwright/test';
import path from 'path';
import * as dotenv from 'dotenv';


// Load .env variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Validate env vars
const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;
const apiToken = process.env.API_TOKEN;

if (!username) throw new Error('TEST_USERNAME is not defined!');
if (!password) throw new Error('TEST_PASSWORD is not defined!');
if (!apiToken) throw new Error('API_TOKEN is not defined!');

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
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        username,
        password,
        apiToken,
        extraHTTPHeaders: {
          Authorization: `Bearer ${apiToken}`,
        },
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        username,
        password,
        apiToken,
        extraHTTPHeaders: {
          Authorization: `Bearer ${apiToken}`,
        },
      },
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
        username,
        password,
        apiToken,
        extraHTTPHeaders: {
          Authorization: `Bearer ${apiToken}`,
        },
      },
    },
  ],
  outputDir: 'test-results/',
});
