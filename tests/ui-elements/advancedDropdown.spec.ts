import {test,expect} from '@playwright/test'

test.describe('advanced dropdown test', ()=> {
    test.beforeEach(async ({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.fill("input[placeholder='Username']",'Admin')
        await page.fill("input[placeholder='Password']","admin123")
        await page.locator('button[type=submit]').click();
    });

    test('Country select dropdown', async ({page})=>{
        
        await page.locator('a:has(span:has-text("Recruitment"))').click();

        // const jobTitleDropdown= page.locator('label:has-text("Job Title")')
        // .locator('xpath=../../following-sibling::div//div[contains(@class,"oxd-input-group__label-"wrapper")]')
        // await jobTitleDropdown.click();

        const jobTitleDropdown = page.locator('.oxd-input-group:has(label:text("Job Title"))')
       .locator('.oxd-select-text-input');
        await jobTitleDropdown.click();

    await page.getByRole('listbox').locator('div:has-text("QA Engineer")').click()
    const selectedLabel = await jobTitleDropdown.textContent();
    expect(selectedLabel?.trim()).toBe('QA Engineer') ;

    })
})