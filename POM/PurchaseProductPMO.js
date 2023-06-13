class PurchaseProductPMO {
  constructor(page) {
    this.page = page;
    this.buyBtn = this.page.locator("//*[@id='entry_212965']/button");
    this.firstname = this.page.locator(
      "//*[@id='payment-new']//input[@name='firstname']"
    );
    this.lastname = this.page.locator(
      "//*[@id='payment-new']//input[@name='lastname']"
    );
    this.company = this.page.locator(
      "//*[@id='payment-new']//input[@name='company']"
    );
    this.address_1 = this.page.locator(
      "//*[@id='payment-new']//input[@name='address_1']"
    );
    this.address_2 = this.page.locator(
      "//*[@id='payment-new']//input[@name='address_2']"
    );
    this.city = this.page.locator(
      "//*[@id='payment-new']//input[@name='city']"
    );
    this.postcode = this.page.locator(
      "//*[@id='payment-new']//input[@name='postcode']"
    );
    this.selectCon = this.page.locator("#input-payment-country");

    this.selectCit = this.page.locator("#input-payment-zone");
  }

  async PurchaseProductFunction() {
    await this.buyBtn.click();
    await this.firstname.fill("Rajib");
    await this.lastname.fill("Khan");
    await this.company.fill("KhanITBD");
    await this.address_1.fill("mirpur-10");
    await this.address_2.fill("Rangpur");
    await this.city.fill("Dinajpur");
    await this.postcode.fill("112");
    await selectCon.selectOption("Bangladesh");
    await this.page.waitForTimeout(2000);
    await this.selectCit.selectOption("Khulna");

    await this.page.locator("#input-comment").fill("This is good product");
    await this.page.click(
      "//*[@id='form-checkout']/div/div[2]/div/div[5]/label"
    );
    await this.page.click("#button-save");
    await this.page.click("#button-confirm");
    const confirm = await this.page
      .locator("//*[@id='content']/p[2]")
      .textContent();
    console.log(confirm);
    await page.pause();
  }
}

export default PurchaseProductPMO;
