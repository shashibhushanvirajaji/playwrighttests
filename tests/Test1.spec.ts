import { test } from '@playwright/test'
import { LoginPage } from "../pages/LoginPage.spec";

test('login test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openApplication()
    await loginPage.login('standard_user', 'secret_sauce')

})

test('login test1', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openApplication()
    await loginPage.login('standard_user', 'secret_sauce')

})

