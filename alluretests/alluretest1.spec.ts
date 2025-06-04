import { test, expect} from '@playwright/test'

test('google test1', async({page})=>{

    page.goto('https://www.google.com/')
    expect(page).toHaveTitle('Google')
})

test('google test2', async({page})=>{

    page.goto('https://www.google.com/')
    expect(page).toHaveTitle('Google')
})