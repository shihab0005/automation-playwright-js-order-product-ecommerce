class LogoutPOM {
  constructor(page) {
    this.page = page;
    this.hoverNav = this.page.locator("//*[@id='widget-navbar-217834']/ul/li[6]");
    // this.hoverNav=this.page.waitForTimeout(1000);
    this.logoutBtn = this.page.locator(
      "//*[@id='widget-navbar-217834']/ul/li[6]/ul/li[6]/a/div/span"
    );
  }

  async LogoutFunction(){
    await this.hoverNav.hover();
    await this.logoutBtn.click();
  }
}
export default LogoutPOM;