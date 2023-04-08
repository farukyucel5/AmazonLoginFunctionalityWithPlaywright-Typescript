import { test, expect } from '@playwright/test';

test.describe("login", ()=>{
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.amazon.com/');
        const locator = page.getByRole('link', { name: 'Hello, sign in' })
        await locator.hover()
        const signUpButton =page.locator("(//span[text()='Sign in'])[1]")
        await signUpButton.click()
       
      });
    

    test('invalid email test', async ({ page }) => {
        const emailBox=page.locator("//input[@id='ap_email']")
        await emailBox.fill("gmail.com")
        await page.locator("//input[@id='continue']").click()
        await expect(page.getByRole('heading',{name:'There was a problem'})).toBeVisible()
    });

    test('null email test', async({page})=>{
        const emailBox=page.locator("//input[@id='ap_email']")
        await page.locator("//input[@id='continue']").click()
        await expect(page.getByRole('heading',{name:'There was a problem'})).toBeVisible()

    });

    test("invalid password", async({page})=>{
        const emailBox=page.locator("//input[@id='ap_email']")
        await emailBox.fill("f@gmail.com")
        await page.locator("//input[@id='continue']").click()
        const passwordBox=page.locator("//input[@id='ap_password']")
        await passwordBox.fill("123456")
        await page.locator("//input[@id='signInSubmit']").click()
        await expect(page.getByRole('heading',{name:'Important Message!'})).toBeVisible()

    })

    test("null password", async({page})=>{
        const emailBox=page.locator("//input[@id='ap_email']")
        await emailBox.fill("f@gmail.com")
        await page.locator("//input[@id='continue']").click()
        await page.locator("//input[@id='ap_password']").fill(" ")
        await page.locator("//input[@id='signInSubmit']").click()
        await expect(page.getByRole('heading',{name:'There was a problem'})).toBeVisible()
    })


    test.afterEach(async ({page})=>{
        
      page.close()

    });



})  

