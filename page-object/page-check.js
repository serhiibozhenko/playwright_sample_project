const { expect } = require("@playwright/test");

exports.AuthorizationCheck = class AuthorizationCheck {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }
  async validateEmail() {
    await this.page.locator('input[name="email"]').isVisible();
  }

  async validateSelectCity() {
    await this.page.locator('select[name="drivingLocation"]').isVisible();
  }

  async validatePas() {
    await this.page.locator('input[name="password"]').isVisible();
  }

  async validatePin() {
    await this.page.locator('input[name="pin"]').isVisible();
  }

  async validateMaleOrFemele() {
    await this.page.locator('select[name="salutation"]').isVisible();
  }

  async validateFirstName() {
    await this.page.locator('input[name="firstName"]').isVisible();
  }

  async validateLastName() {
    await this.page.locator('input[name="lastName"]').isVisible();
  }

  async validateBirthDay() {
    await this.page.locator("#camelot-select-birth-date-day").isVisible();
  }

  async validateBirthMonth() {
    await this.page.locator("#camelot-select-birth-date-month").isVisible();
  }

  async validateBirthYear() {
    await this.page.locator("#camelot-select-birth-date-year").isVisible();
  }

  async validatePlaceBirth() {
    await this.page.locator('input[name="birthPlace"]').isVisible();
  }

  async validateAdress() {
    await this.page.locator('input[name="addressStreet"]').isVisible();
  }

  async validateAdressAdditional() {
    await this.page
      .locator('input[name="addressAdditionalStreet"]')
      .isVisible();
  }

  async validateZipCode() {
    await this.page.locator('input[name="addressZipCode"]').isVisible();
  }

  async validateAdressCity() {
    await this.page.locator('input[name="addressCity"]').isVisible();
  }

  async validatePhone() {
    await this.page.locator('input[name="mobilePhone"]').isVisible();
  }

  async validateCheckBox() {
    await this.page.locator("input[type = 'checkbox'][required]").isVisible();
  }

  async validateClickLog() {
    await this.page.locator("#registration-save-button").isVisible();
  }
};
