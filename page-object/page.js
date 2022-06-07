const { expect } = require("@playwright/test");

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(
      "https://www.share-now.com/de/en/registration/personal-data"
    );
  }
}
