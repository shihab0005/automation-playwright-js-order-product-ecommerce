import { test, expect } from "@playwright/test";
import RegisterPMO from "../POM/RegisterPMO";
import RegData from "../RegData.json";
import LoginPMO from "../POM/LoginPMO";
import LogoutPOM from "../POM/LogoutPOM";
import SelectCategoryPMO from "../POM/SelectCategoryPMO";
import AddToCartPOM from "../POM/AddToCartPMO";
import PurchaseProductPMO from "../POM/PurchaseProductPMO";

RegData.map((data) => {
  test(`Registration For this Site`, async ({ page }) => {
    const url = "https://ecommerce-playground.lambdatest.io/";
    const title = "Your Store";
    // const firstName = "Shihab";
    // const lastName = "Khan";
    // const phone = "0284898855";
    // const password = "shihab1";

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

    const register = new RegisterPMO(page);
    register.registrationFunction(
      data?.firstName,
      data?.lastName,
      email,
      data?.phone,
      data?.password
    );

    //logout
    const logout = new LogoutPOM(page);
    logout.LogoutFunction();

    //login
    const login = new LoginPMO(page);
    login.LoginFunction(email, password);

    //home page category click

    const selectCategory = new SelectCategoryPMO(page);
    selectCategory.selectCategory();

    //category details and find product

    const addToCart = new AddToCartPOM(page);
    addToCart.AddToCartFunction();

    //cart section
    const purchaseProduct = new PurchaseProductPMO(page);
    purchaseProduct.PurchaseProductFunction();
  });
});
