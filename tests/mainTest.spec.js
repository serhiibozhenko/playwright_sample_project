// import { test, expect } from "@playwright/test";
const { test } = require("@playwright/test");

const { user } require ("../page-object/test-data");
const { LoginPage } require ("../page-object/mainLog");
const { HomePage } require ("../page-object/page");

// test.describe("two tests or more", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://www.share-now.com/de/en/");
//   });

//   test("one test, validn", async ({ page }) => {
//     await page.locator(".urban-shape__button").click();

//     await page.locator('select[name="drivingLocation"]').selectOption("berlin");

//     await page.waitForLoadState();

//     await page.locator('input[name="email"]').click();
//     await page.locator('input[name="email"]').fill("hhkl@gmail.com");

//     await expect('input[name="email"]').toBeVisible;

//     await page.locator('input[name="password"]').click();
//     await page.locator('input[name="password"]').fill("122425255");

//     await expect('input[name="password"]').toBeVisible;

//     await page.locator('input[name="pin"]').click();
//     await page.locator('input[name="pin"]').fill("1234");

//     await expect('input[name="pin"]').toBeVisible;

//     await page.locator('select[name="salutation"]').selectOption("HERR");

//     await expect('input[name="salutation"]').toBeVisible;

//     await page.locator('input[name="firstName"]').click();
//     await page.locator('input[name="firstName"]').fill("Serhi");

//     await expect('input[name="firstName"]').toBeVisible;

//     await page.locator('input[name="lastName"]').click();
//     await page.locator('input[name="lastName"]').fill("Vergo");

//     await expect('input[name="lastName"]').toBeVisible;

//     await page.locator("#camelot-select-birth-date-day").selectOption("12");

//     await expect('#camelot-select-birth-date-day"]').toBeVisible;

//     await page.locator("#camelot-select-birth-date-month").selectOption("2");

//     await expect('#camelot-select-birth-date-month"]').toBeVisible;

//     await page.locator("#camelot-select-birth-date-year").selectOption("1996");

//     await expect('#camelot-select-birth-date-year"]').toBeVisible;

//     await page.locator('input[name="birthPlace"]').click();
//     await page.locator('input[name="birthPlace"]').fill("S");

//     await expect('input[name="birthPlace"]').toBeVisible;

//     ///

//     await page.locator('input[name="addressStreet"]').click();
//     await page.locator('input[name="addressStreet"]').fill("S");

//     await expect('input[name="addressStreet"]').toBeVisible;

//     await page.locator('input[name="addressZipCode"]').click();
//     await page.locator('input[name="addressZipCode"]').fill("11111");

//     await expect('input[name="addressZipCode"]').toBeVisible;

//     await page.locator('input[name="addressCity"]').click();
//     await page.locator('input[name="addressCity"]').fill("Swagen-Morgen");

//     await expect('input[name="addressCity"]').toBeVisible;

//     await page.locator('input[name="mobilePhone"]').click();
//     await page.locator('input[name="mobilePhone"]').fill("55858866686");

//     await expect('input[name="mobilePhone"]').toBeVisible;

//     await page.locator("text=I accept the ").click();

//     await expect("text=I accept the ").toBeVisible;

//     await page.locator("#registration-save-button").click();

//     await expect('#registration-save-button"').toBeVisible;
//   });

//   test("two test, not valid", async ({ page }) => {
//     await page.locator(".urban-shape__button").click();

//     await page.locator('select[name="drivingLocation"]').selectOption("berlin");

//     await page.waitForLoadState();

//     await page.locator('input[name="email"]').click();
//     await page.locator('input[name="email"]').fill("hhkl@gmail.com");

//     await page.locator('input[name="password"]').click();
//     await page.locator('input[name="password"]').fill("ddddddddd");
//     await page.locator('input[name="pin"]').click();
//     await page.locator('input[name="pin"]').fill("1234");
//     await page.locator('select[name="salutation"]').selectOption("HERR");
//     await page.locator('input[name="firstName"]').click();
//     await page.locator('input[name="firstName"]').fill("S");
//     await page.locator('input[name="lastName"]').click();
//     await page.locator('input[name="lastName"]').fill("V");
//     await page.locator("#camelot-select-birth-date-day").selectOption("12");
//     await page.locator("#camelot-select-birth-date-month").selectOption("2");
//     await page.locator("#camelot-select-birth-date-year").selectOption("1996");
//     await page.locator('input[name="birthPlace"]').click();
//     await page.locator('input[name="birthPlace"]').fill("S");
//     await page.locator('input[name="addressStreet"]').click();
//     await page.locator('input[name="addressStreet"]').fill("S");
//     await page.locator('input[name="addressZipCode"]').click();
//     await page.locator('input[name="addressZipCode"]').fill("11111");
//     await page.locator('input[name="addressCity"]').click();
//     await page.locator('input[name="addressCity"]').fill("S");
//     await page.locator('input[name="mobilePhone"]').click();
//     await page.locator('input[name="mobilePhone"]').fill("55858866686");
//     await page.locator("text=I accept the ").click();
//     await page.locator("#registration-save-button").click();
//   });
// });

test("User can login and logout", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.open();
  await homepage.goToLoginPage();
  await new LoginPage(page).login(user.email, user.password);
});
