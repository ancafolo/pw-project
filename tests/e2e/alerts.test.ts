import { test, expect } from '@playwright/test';

test('should display an alert and accept it', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/'); 
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

    page.on("dialog", dialog => dialog.dismiss());
      await page.locator("button:has-text('Click Me')").nth(1).click();
     // expect(page.locator('id=confirm-demo')).toContainText("Cancel!");
});

test('should display a prompt dialog and input text', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("Anca");
        // expect(text).toBe("Press a button!");
        // await alert.accept();  
      });
      await page.locator("button:has-text('Click Me')").nth(2).click();
      //expect(page.locator('id=prompt-demo')).toContainText("Anca");
});

test("Working with Modals", async ({page}) => {
  await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/");
  const launchModalBtn = page.locator('button[data-target=\'#myModal\']');
  await launchModalBtn.click();
  //const saveChangesBtn = page.getByText('Save Changes', { exact: true }).first();
  //await saveChangesBtn.click();
  //await page.waitForTimeout(5000);
})
