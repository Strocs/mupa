import { test, expect } from '@playwright/test';

const LOCAL_URL = 'http://localhost:4321'

test('has title', async ({ page }) => {
  await page.goto(LOCAL_URL);

  await expect(page).toHaveTitle(/MUPA/);
});
