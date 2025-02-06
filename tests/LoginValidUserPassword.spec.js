import { test } from '@playwright/test';


test.use({
  viewport: {
    height: 800,
    width: 1000
  },
  colorScheme: 'dark',
  
});

test('Test Case 2: Login User with correct email and password', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: ' Signup / Login' }).click({ force: true })
  await page.waitForTimeout(2000)
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('shashi.virajaji@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Sbhushan@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});