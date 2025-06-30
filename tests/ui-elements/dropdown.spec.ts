import {test, expect} from '@playwright/test';

test.describe('Dropdown menu tests',()=>{
    test.beforeEach(async ({page})=> {
       await page.goto('https://the-internet.herokuapp.com/dropdown')
    });
   
    test('Select Option 2 from dropdown', async ({page})=> {
     await page.selectOption('#dropdown',{label:'Option 2'})

    const selectedValue =await page.locator('#dropdown').inputValue();  // assert by value
    expect(selectedValue).toBe('2');   
    })
    
    test('Select Option 1 from dropdown', async ({page})=> {
     await page.selectOption('#dropdown',{label:'Option 1'})
    const selectedLabel =await page.locator('#dropdown >> option:checked').textContent();  //assert by label
    expect (selectedLabel).toBe('Option 1');

    })




})