import { test, expect} from '@playwright/test'


test('Veriying title - google page 1', async({page})=>{

    console.log('Starting of the test')
    await page.goto('https://www.google.co.in/')
    console.log( await page.title())
    expect(page).toHaveTitle('Google')
    console.log('Ending of the test')
})

test('Veriying title - google page 2', async({page})=>{

    console.log('Starting of the test')
    await page.goto('https://www.google.co.in/')
    console.log(await page.title())
    expect(page).toHaveTitle('Google')
    console.log('Ending of the test')
})

test('Veriying title - google page 3', async({page})=>{

    console.log('Starting of the test')
   await page.goto('https://www.google.co.in/')
    console.log(await page.title())
    expect(page).toHaveTitle('Google')
    console.log('Ending of the test')
})