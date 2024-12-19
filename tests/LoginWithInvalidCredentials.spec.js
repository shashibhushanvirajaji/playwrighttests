import { test, expect } from '@playwright/test';


test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('shas.virajaji@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Sbhushan@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await  page.waitForTimeout(3000)
  await expect(page.getByText('Your email or password is')).toBeVisible()
});