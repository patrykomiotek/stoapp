import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('svg').click();
  await page.locator('html').click();
  await page.getByText('Is logged in: NO').click();
  await page.getByRole('button', { name: 'Toggle' }).click();
  // await page.getByText('Is logged in: YES').click()

  await expect(page.getByText('Is logged in: YES')).toBeVisible();
});
