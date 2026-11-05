import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('should display an alert and accept it', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/'); 
  await allure.epic("Alerts");
  await allure.feature("Display alert");
  await allure.displayName("Should display an alert and accept it");
  await allure.tag("smoke");
  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    expect(text).toBe("I am an alert box!");
    await alert.accept();  
  });
     // await page.locator("button:has-text('Click Me')").nth(0).click();
})

test('should display a confirm dialog and accept it', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
  await allure.epic("Alerts");
  await allure.feature("Display confim dialog");
  await allure.displayName("Should display a confirm dialog and accept it");
  await allure.tag("smoke");
  await allure.tag("web");
    page.on("dialog", dialog => dialog.dismiss());
      await page.locator("button:has-text('Click Me')").nth(1).click();
     // expect(page.locator('id=confirm-demo')).toContainText("Cancel!");
});

test('should display a prompt dialog and input text', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
  await allure.epic("Alerts");
  await allure.feature("Display prompt dialog");
  await allure.displayName("Should display a prompt dialog and input text");
  await allure.tag("web");
    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("Anca");
        // expect(text).toBe("Press a button!");
        // await alert.accept();  
      });
      await page.locator("button:has-text('Click Me')").nth(2).click();
      expect(page.locator('id=prompt-demooo')).toBeVisible();
});

test("Working with Modals", async ({page}) => {
  await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/");
  await allure.epic("Alerts");
  await allure.feature("Modals");
  await allure.displayName("Working with Modals");
  await allure.tag("web");
  const launchModalBtn = page.locator('button[data-target=\'#myModal\']');
  await launchModalBtn.click();
  //const saveChangesBtn = page.getByText('Save Changes', { exact: true }).first();
  //await saveChangesBtn.click();
  //await page.waitForTimeout(5000);
})
