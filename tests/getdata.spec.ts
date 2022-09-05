import { test, expect } from '@playwright/test';

test('homepage get google', async ({ page }) => {
  await page.goto('https://www.google.com/');
  // , { timeout: 20e3 }
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);

  // create a locator
  const aboutBtn = page.locator('text=About');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(aboutBtn).toHaveAttribute('class', 'MV3Tnb');

  // Click the signIn link.
  await aboutBtn.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*about/);
});
