exports.OpenPage = class OpenPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto(
      "https://www.share-now.com/de/en/registration/personal-data"
    );
  }
};
