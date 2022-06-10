exports.LoginPage = class LoginPage {
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

  async selectCity() {
    await this.page
      .locator('select[name="drivingLocation"]')
      .selectOption("berlin");
  }

  async typeUserName(text) {
    await this.page.fill('input[name="email"]', text);
  }

  async typePassword(text) {
    await this.page.fill('input[name="password"]', text);
  }

  async pinPin(text) {
    await this.page.fill('input[name="pin"]', text);
  }

  async selectMaleOrFemele() {
    await this.page.locator('select[name="salutation"]').selectOption("HERR");
  }

  async firstName(text) {
    await this.page.fill('input[name="firstName"]', text);
  }

  async lastName(text) {
    await this.page.fill('input[name="lastName"]', text);
  }

  async birhtDay() {
    await this.page
      .locator("#camelot-select-birth-date-day")
      .selectOption("10");
  }

  async birhtMonth() {
    await this.page
      .locator("#camelot-select-birth-date-month")
      .selectOption("8");
  }

  async birhtYear() {
    await this.page
      .locator("#camelot-select-birth-date-year")
      .selectOption("1992");
  }

  async birthPlace(text) {
    await this.page.fill('input[name="birthPlace"]', text);
  }

  async adressSt(text) {
    await this.page.fill('input[name="addressStreet"]', text);
  }

  async adressAdSt(text) {
    await this.page.fill('input[name="addressAdditionalStreet"]', text);
  }

  async adressZipcode(text) {
    await this.page.fill('input[name="addressZipCode"]', text);
  }

  async adressCity(text) {
    await this.page.fill('input[name="addressCity"]', text);
  }

  async mobilePhon(text) {
    await this.page.fill('input[name="mobilePhone"]', text);
  }

  async checkClick() {
    await this.page
      .locator("input[type = 'checkbox'][required]")
      .check({ force: true });
  }

  async clickLogin() {
    await this.page.click("#registration-save-button");
  }

  //check next page for second page

  // async check3page(text) {
  //   await this.page.fill("#cc-holder-name", text);
  // }
};
