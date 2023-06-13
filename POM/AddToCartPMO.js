class AddToCartPOM {
  constructor(page) {
    this.page = page;
    this.products = this.page.locator("//*[@id='entry_212408']/div/div");
  }

  async AddToCartFunction() {
    await this.page.waitForTimeout(3000);
    const lenPro = await this.products.count();
    console.log("lenPro =", lenPro);

    for (let i = 0; i < lenPro; i++) {
      const product = await this.products
        .nth(i)
        .locator("//h4/a")
        .textContent();
      if (product === "iMac") {
        await this.products.nth(i).hover();
        await this.page.locator("//button[@title='Quick view']").nth(i).click();
        await this.page.waitForTimeout(3000);

        let j = 1;
        while (j !== 3) {
          await this.page.click("//*[@id='entry_212963']/div/div[2]/button");
          j++;
        }

        break;
      }
    }
  }
}
export default AddToCartPOM;
