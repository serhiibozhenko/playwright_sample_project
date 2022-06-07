//email, password
const { expect } = require("@playwright/test");

export class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async login(email, password) {
    await this.page.type('input[type="email"]', email);
    await this.page.type('input[type="password"]', password);
  }
}
