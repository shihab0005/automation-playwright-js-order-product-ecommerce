import { test, expect } from "@playwright/test";
import RegisterPMO from "../POM/RegisterPMO";
import RegData from "../RegData.json";
import LoginPMO from "../POM/LoginPMO";
import LogoutPOM from "../POM/LogoutPOM";

RegData.map((data) => {
  test(`Registration For this Site ${data.firstName}`, async ({ page }) => {
    const url = "https://ecommerce-playground.lambdatest.io/";
    const title = "Your Store";

    const a = Math.random() * (1000 - 1) + 1;
    const b = Math.round(a);
    const email = "shihab" + b + "@gmail.com";

    await page.goto(url);
    await expect(page).toHaveURL(url);
    await expect(page).toHaveTitle(title);

    await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]");
    await page.click(
      "//*[@id='widget-navbar-217834']/ul/li[6]/ul/li[2]/a/div/span"
    );
    await page.waitForURL(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );

    //registration from
    await page.locator("#input-firstname").type("Shihab");
    await page.locator("#input-lastname").type("Khan");
    await page.locator("#input-email").type(email);
    await page.locator("#input-telephone").type("01847789555");
    await page.locator("#input-password").type("shihab12");
    await page.locator("#input-confirm").type("shihab12");
    await page.click(
      "//*[@id='content']/form/fieldset[3]/div/div/div[2]/label"
    );
    await page.click("//label[@for='input-agree']");
    await page.click("//input[@value='Continue']");

    //logout
    await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]");
    await page.click(
      "//*[@id='widget-navbar-217834']/ul/li[6]/ul/li[6]/a/div/span"
    );

    //login
    // const login = new LoginPMO(page);
    // login.LoginFunction(email, data?.password);
    await page.click("//*[@id='column-right']/div/a[text()=' Login']");

    await page.fill("//input[@placeholder='E-Mail Address']", email);
    await page.fill("//input[@placeholder='Password']", "shihab12");
    await page.click("//input[@value='Login']");

    //home page category click

    await page.click("//*[@id='widget-navbar-217834']/ul/li[1]/a/div/span");
    await page.waitForLoadState("networkidle");
    const categories = page.locator("#mz-category-wall74213250 h4");

    const len = await categories.count();
    console.log(len);
    for (let i = 0; i < len; i++) {
      const category = await categories.nth(i).textContent();
      console.log(category);
      if (category.trim() == "Cameras") {
        await categories.nth(i).click();
        break;
      }
    }

    //category details and find product

    const products = page.locator("//*[@id='entry_212408']/div/div");
    await page.waitForTimeout(3000);
    const lenPro = await products.count();
    console.log("lenPro =", lenPro);

    for (let i = 0; i < lenPro; i++) {
      const product = await products.nth(i).locator("//h4/a").textContent();
      if (product === "iMac") {
        await products.nth(i).hover();
        await page.locator("//button[@title='Quick view']").nth(i).click();
        await page.waitForTimeout(3000);

        let j = 1;
        while (j !== 3) {
          await page.click("//*[@id='entry_212963']/div/div[2]/button");
          j++;
        }

        break;
      }
    }

    //cart section
    await page.click("//*[@id='entry_212965']/button");
    await page
      .locator("//*[@id='payment-new']//input[@name='firstname']")
      .fill("Rajib");
    await page
      .locator("//*[@id='payment-new']//input[@name='lastname']")
      .fill("Khan");
    await page
      .locator("//*[@id='payment-new']//input[@name='company']")
      .fill("KhanITBD");
    await page
      .locator("//*[@id='payment-new']//input[@name='address_1']")
      .fill("mirpur-10");
    await page
      .locator("//*[@id='payment-new']//input[@name='address_2']")
      .fill("Rangpur");
    await page
      .locator("//*[@id='payment-new']//input[@name='city']")
      .fill("Dinajpur");
    await page
      .locator("//*[@id='payment-new']//input[@name='postcode']")
      .fill("112");
    const selectCon = page.locator("#input-payment-country");
    selectCon.selectOption("Bangladesh");

    await page.waitForTimeout(2000);
    const selectCit = page.locator("#input-payment-zone");
    selectCit.selectOption("Khulna");

    await page.locator("#input-comment").fill("This is good product");
    await page.click("//*[@id='form-checkout']/div/div[2]/div/div[5]/label");
    await page.click("#button-save");
    await page.click("#button-confirm");
    const confirm = await page.locator("//*[@id='content']/p[2]").textContent();
    console.log(confirm);
    await page.pause();
  });
});
