import { expect, test } from '@playwright/test';

test('home page has expected tytle', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Строительная Компания «Масштаб»/);
});

test('home page has expected header', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Масштаб/ })).toBeVisible();
});
