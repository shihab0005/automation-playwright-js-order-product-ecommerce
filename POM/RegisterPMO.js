class RegisterPMO {
  constructor(page) {
    this.page = page;
    this.firstName = this.page.locator("#input-firstname");
    this.lastName = this.page.locator("#input-lastname");
    this.email = this.page.locator("#input-email");
    this.phone = this.page.locator("#input-telephone");
    this.password = this.page.locator("#input-password");
    this.cPassword = this.page.locator("#input-confirm");
    this.subscribe = this.page.locator(
      "//*[@id='content']/form/fieldset[3]/div/div/div[2]/label"
    );
    this.agree = this.page.locator("//label[@for='input-agree']");
    this.continueBtn = this.page.locator("//input[@value='Continue']");
  }

  async registrationFunction(fname, lname, email, phoneN, pass) {
    await this.firstName.fill(fname);
    await this.lastName.fill(lname);
    await this.email.fill(email);
    await this.phone.fill(phoneN);
    await this.password.fill(pass);
    await this.cPassword.fill(pass);
    await this.subscribe.click();
    await this.agree.click();
    await this.continueBtn.click();
  }
}

export default RegisterPMO;
