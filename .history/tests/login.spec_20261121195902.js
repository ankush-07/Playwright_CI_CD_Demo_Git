import test from "@playwright/test";
test("Admin Login Test", async({page})=>{


    await page.goto("http://orangehrm.qedgetech.com")
    await page.locator("#txtUsername").fill("Admin")
    await page.locator("txtPassword").fill("Qedge123!@#")
    await page.locator("#btnLogin").click()

    await page.getByRole('link',{name:'Welcome'}).click()
    await page.getByRole('link',{name:'Change Password'}).click()
    await page.getByRole('button', {name:'Edit'}).click()

    await page.getByRole('textbox',{name:'Current Password'}).fill("Qedge123!@#")
    await page.getByRole('textbox', {name:'New Password *',exact:true}).press("Control+A")
    await page.getByRole('textbox',{name:'New Password *',exact:true}).press("control+C")

    await page.getByRole('textbox', {name:'Confirm Password *',exact:true}).press("Control+V")
})