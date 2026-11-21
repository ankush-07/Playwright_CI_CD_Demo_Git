import test from "@playwright/test";
test("Admin Login Test", async({page})=>{


    await page.goto("http://orangehrm.qedgetech.com")
    await page.locator("#txtUsername").fill("Admin")
    await page.locator("txtPassword").fill("Qedge123!@#")
    await page.locator("//input[@value='LOGIN']").click()

    
})