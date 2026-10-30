import { test, expect } from   "@playwright/test";
import * as allure from "allure-js-commons";



test("Interaction with inputs @allure."  + 
    " @allure.label.epic:Alerts" +
    ' @allure.label.feature:"Display alert"' +
    " @allure.label.tag:smoke",
    async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
    const messageInput = page.locator('input#user-message');
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log('Before entering the value' + await messageInput.inputValue());

    await messageInput.type("Hello Anca");

    console.log('After entering the value: ' + await messageInput.inputValue());



})

test ("Interactions with assertions", async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2");
    const getValueBtn = page.getByRole('button', { name: 'Get Sum' })
    let num1=121;
    let num2=546;
    await sum1input.fill("" + num1);
    await sum2input.fill("" + num2);
    await getValueBtn.click();
    await page.waitForTimeout(5000);
    const result = page.locator('#addmessage');
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toBeVisible();
})

test ("Interactions with checkboxes", async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/");
    const singleCheckbox = page.getByRole('checkbox', { name: 'Click on check box' });
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
    await singleCheckbox.uncheck();
    expect(singleCheckbox).not.toBeChecked();


})

