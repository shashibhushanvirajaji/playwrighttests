//@ts-check


import { faker } from '@faker-js/faker'
import { test, expect } from '@playwright/test'

test.describe('automation excercise tests', () => {


    test.beforeEach(async ({ page }) => {

        await page.goto('/')
    })

    test('Test Case 1: Register User', async ({ page }) => {

        expect(page.url()).toContain('https://automationexercise.com/')
        await page.getByRole('link', { name: ' Signup / Login' }).click({ force: true })
        await page.waitForTimeout(2000)
        expect(page.url()).toContain('https://automationexercise.com/login')

        const firstname = faker.person.firstName()
        await page.locator("//input[@data-qa='signup-name']").focus()
        await page.locator("//input[@data-qa='signup-name']").fill(firstname)

        await page.locator("//input[@data-qa='signup-email']").focus()
        await page.locator("//input[@data-qa='signup-email']").fill(faker.internet.email())

        await page.getByRole('button', { name: 'Signup' }).click()
        await page.waitForTimeout(4000)

        await page.getByLabel('Mr.').check();
        await page.getByLabel('Password *').click();
        await page.getByLabel('Password *').fill('Sbhushan@123');
        await page.locator('#days').selectOption('12');
        await page.locator('#months').selectOption('2');
        await page.locator('#years').selectOption('1981');
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from').check();
        await page.getByLabel('First name *').click();
        await page.getByLabel('First name *').fill(firstname);
        await page.getByLabel('First name *').press('Tab');
        await page.getByLabel('Last name *').fill(faker.person.lastName());
        await page.getByLabel('Last name *').press('Tab');
        await page.getByLabel('Company', { exact: true }).fill(faker.company.name());
        await page.getByLabel('Address * (Street address, P.').click();
        await page.getByLabel('Address * (Street address, P.').fill(faker.location.buildingNumber());
        await page.getByLabel('Address * (Street address, P.').press('Tab');
        await page.getByLabel('Address 2').fill('hasthinapuram');
        await page.getByLabel('State *').dblclick();
        await page.getByLabel('State *').fill('telangana');
        await page.getByLabel('City *').click();
        await page.getByLabel('City *').fill('hyderabad');
        await page.locator('#zipcode').click();
        await page.locator('#zipcode').fill('500079');
        await page.locator('#zipcode').press('Tab');
        await page.getByLabel('Mobile Number *').fill('2343243243');
        await page.getByRole('button', { name: 'Create Account' }).click();
        await page.getByText('Account Created!').click();
        await expect(page.locator('b')).toContainText('Account Created!');


    })

})