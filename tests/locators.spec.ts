import { test } from '@playwright/test';

test("locators with options",{tag:"@home"},async ({page
}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator(".form_group",{has: page.locator("input#user-name")}).pressSequentially("standard_user")
    await page.locator(".form_group",{has: page.locator("input#password")}).pressSequentially("secret_sauce")
    await page.locator("#login-button").click()
    
})

test("testing tags @tag1", async({page})=>{
    console.log('test from tag 1')
})