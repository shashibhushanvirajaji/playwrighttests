import { test, expect } from '@playwright/test';

test('Test Case 5: Register User with existing email', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  const pageTitle = page.title()
  await (pageTitle).includes('Automation Exercise')
 
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('shashi');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('shashi.virajaji@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.getByText('Email Address already exist!')).toBeVisible()
});