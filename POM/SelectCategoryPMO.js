class SelectCategoryPMO {
  constructor(page) {
    this.page = page;

    this.homeButton = this.page.click(
      "//*[@id='widget-navbar-217834']/ul/li[1]/a/div/span"
    );

    this.categories = this.page.locator("#mz-category-wall74213250 h4");
  }

  async selectCategory() {
    this.page.waitForLoadState("networkidle");
    const len = await this.categories.count();
    console.log(len);
    for (let i = 0; i < len; i++) {
      const category = await this.categories.nth(i).textContent();
      console.log(category);
      if (category.trim() == "Cameras") {
        await this.categories.nth(i).click();
        break;
      }
    }
  }
}

export default SelectCategoryPMO;
