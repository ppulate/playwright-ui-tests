import { test, expect } from '@playwright/test';
import { dismissInterruptions } from './utils';
test.describe('Login Functionality',()=> {
  test.beforeEach(async ({page}) => {
     await page.goto('https://practice.expandtesting.com/login');
     await dismissInterruptions(page);

  })


test('TC-01: Valid login redirects to dashboard', async ({page}) => {
   await page.fill('#username','practice')
  await page.fill('#password','SuperSecretPassword!');
  await page.click("button[type='submit']");

  await expect(page).toHaveURL('https://practice.expandtesting.com/secure')
  await expect(page.getByRole('alert')).toContainText('You logged into a secure area!')

})

test('TC-02: Invalid username should show error', async ({page}) => {
   await page.fill('#username','wrongUser')
  await page.fill('#password','SuperSecretPassword!');
  await page.click("button[type='submit']");
  await expect(page.getByRole('alert')).toContainText('Your username is invalid!')

})

test('TC-03: Invalid password should show error', async ({page}) => {
  await page.fill('#username','practice')
  await page.fill('#password','wrongpassword');
  await page.click("button[type='submit']");
  await expect(page.getByRole('alert')).toContainText('Your password is invalid!')

})

test('TC-04: Empty form should show error', async ({page}) => {
  
  await page.click("button[type='submit']");
  // page.on('dialog', async dialog => {
  // console.log(`Auto-dismissing dialog: ${dialog.message()}`);
  // await dialog.dismiss();
//});
  // const alert = page.getByRole('alert');
  // await expect(alert).toBeVisible();
  // await expect(alert).toContainText('Your username is invalid!');
await expect(page.getByRole('alert').first()).toContainText('Your username is invalid!');

})
})