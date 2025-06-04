import { test, expect } from '@playwright/test';
import testdata from "../testdata/login-data.json"

test('login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(testdata.username);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(testdata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});