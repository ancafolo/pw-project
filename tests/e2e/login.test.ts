import { test,chromium } from "@playwright/test";
import * as allure from "allure-js-commons";

test.skip("Login test demo", async () => {

    const browser = await chromium.launch({
       //headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await allure.epic("Login");
    await allure.feature("Login");
    await allure.displayName("Login test demo");
    await allure.tag("smoke");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    //await page.click("text=Login");
    await page.click("'Login'");
    await page.fill("input[id='input-email']","ancafolo+pw@gmail.com");
    await page.fill("input[id='input-password']","DummyPassword");
    await page.click("input[type='submit']");

    await page.waitForTimeout(5000);

    const newContext = await browser.newContext();

    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await newPage.waitForTimeout(5000);

})
