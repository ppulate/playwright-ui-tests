import { test, expect } from './fixtures';
import { dismissInterruptions } from '../utils/utils';
import {getArtifactPath} from  '../utils/artifacts';
test.describe('Login Functionality', () => {

  test.beforeEach(async ({ page }, testInfo) => {

    await page.goto('https://practice.expandtesting.com/login');
    await dismissInterruptions(page);
  });
  
    test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === 'failed') {
    // Save screenshot with test name
    const screenshotPath = getArtifactPath(testInfo, 'png');
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // Save video (if using video option)
    if (testInfo.attachments.some(a => a.name === 'video')) {
      const videoPath = getArtifactPath(testInfo, 'webm');
      // Playwright saves video automatically; here you can copy/rename it
    }
  }
});

  test('TC-01: Valid login redirects to dashboard', async ({ page,username,password}) => {
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click("button[type='submit']");

    await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
    await expect(page.getByRole('alert')).toContainText('You logged into a secure area!');
  });

  test('TC-02: Invalid username should show error', async ({ page,password }) => {
    await page.fill('#username', 'wrongUser');
    await page.fill('#password', password);
    await page.click("button[type='submit']");

    await expect(page.getByRole('alert')).toContainText('Your password is invalid!');
  });

  test('TC-03: Invalid password should show error', async ({ page,username })  => {
    await page.fill('#username', username);
    await page.fill('#password', 'wrongpassword');
    await page.click("button[type='submit']");

    await expect(page.getByRole('alert')).toContainText('Your password is invalid!');
  });

  test('TC-04: Empty form should show error', async ({ page }) => {
    await page.click("button[type='submit']");
    await expect(page.getByRole('alert').first()).toContainText('Your username is invalid!');
  });



});
