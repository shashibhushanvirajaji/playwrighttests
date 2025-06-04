import { test, expect } from '@playwright/test';
import fs from "fs"
import {parse} from "csv-parse/sync"

const records = parse(fs.readFileSync("testdata/login-data.csv"),{ 
    columns:true,
    skip_empty_lines:true
})



for(const record of records) {

    test('login test' + records.username, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Username').fill(record.username);
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(record.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('heading', { name: 'Dashboard' }).click();
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
      });
}
