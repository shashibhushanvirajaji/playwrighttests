import { expect, test } from "@playwright/test"

test('testing alerts ', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', dialog =>{
        expect(dialog.message()).toBe('I am a JS Alert')
        expect(dialog.type()).toBe('alert')
        dialog.accept()
    })
    await page.getByRole('button', { name: 'Click for JS Alert' }).click()
})