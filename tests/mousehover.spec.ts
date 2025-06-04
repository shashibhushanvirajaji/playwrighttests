import {test} from "@playwright/test"

test("verifying mouse hover event", async({page})=>{

    await page.goto("https://www.amazon.in")
    await page.getByRole('link', { name: 'Fresh' }).hover({force:true})
    await page.waitForTimeout(2000)
    await page.locator("//a[@class='a-size-base a-spacing-top-base a-link-normal']").click()

})
