class LoginPMO {
  constructor(page) {
    this.page = page;
    this.loginNavBtn = this.page.locator(
      "//*[@id='column-right']/div/a[text()=' Login']"
    );

    this.emailField = this.page.locator(
      "//input[@placeholder='E-Mail Address']"
    );
    this.passwordField = this.page.locator("//input[@placeholder='Password']");
    this.loginButton = this.page.locator("//input[@value='Login']");
  }

  async LoginFunction(email, pass) {
    await this.loginNavBtn.click();
    await this.emailField.fill(email);
    await this.passwordField.fill(pass);
    await this.loginButton.click();
  }
}

export default LoginPMO;
