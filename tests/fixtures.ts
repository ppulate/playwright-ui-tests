import { test as base } from '@playwright/test';

// Extend Playwright's test object
const test = base.extend<{
  username: string;
  password: string;
  apiToken: string;
}>({
  username: async ({}, use) => {
    const value = process.env.TEST_USERNAME;
    if (!value) throw new Error('TEST_USERNAME is not defined!');
    await use(value);
  },
  password: async ({}, use) => {
    const value = process.env.TEST_PASSWORD;
    if (!value) throw new Error('TEST_PASSWORD is not defined!');
    await use(value);
  },
  apiToken: async ({}, use) => {
    const value = process.env.API_TOKEN;
    if (!value) throw new Error('API_TOKEN is not defined!');
    await use(value);
  },
});

export { test };
export const expect = test.expect;
