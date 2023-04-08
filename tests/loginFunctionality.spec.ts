import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    const locator = page.getByRole('link', { name: 'Hello, sign in' })
    await locator.hover()
    const signUpButton =page.locator("(//span[text()='Sign in'])[1]")
    await signUpButton.click()
   
  });




test.describe("login", ()=>{

    test('invalid email test', async ({ page }) => {
        const emailBox=page.locator("//input[@id='ap_email']")
        await emailBox.fill("gmail.com")
        await page.locator("//input[@id='continue']").click()
        await expect(page.getByRole('heading',{name:'There was a problem'})).toBeVisible()
        page.close()
    });



})  

