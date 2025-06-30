
import { Page } from '@playwright/test';

export async function dismissInterruptions(page: Page) {
  const blockers = [
    '.popup',
    '.modal',
    '.overlay',
    '.cookie-banner',
    '[role="dialog"]',
    '.interstitial',
    '.newsletter',
    '.survey',
    'div[aria-label*="Close"]',
    'button:has-text("Close")',
    'button:has-text("×")',
  ];

  for (const selector of blockers) {
    const element = page.locator(selector);
    if (await element.first().isVisible({ timeout: 1000 }).catch(() => false)) {
      try {
        await element.first().click({ timeout: 1000 });
        console.log(`✔ Dismissed: ${selector}`);
      } catch (e) {
        console.log(`⚠ Could not dismiss ${selector}`);
      }
    }
  }
}
