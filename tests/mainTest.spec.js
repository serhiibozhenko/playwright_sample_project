// const { test, expect, chromium } = require("@playwright/test");
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("..//page-object/mainLog");
const { AuthorizationCheck } = require("..//page-object/page-check");
const { OpenPage } = require("..//page-object/openPage");
const { faker } = require("@faker-js/faker");

test("Valid information for authorization", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const authorizationCheck = new AuthorizationCheck(page);
  const openPage = new OpenPage(page);

  const fakerEmail = faker.internet.email(); //first for faker
  const fakerName = faker.name.firstName("male");
  const fakerLastName = faker.name.lastName("male");
  const placeOfBirth = faker.address.country();
  const nameCity = faker.address.cityName();
  const nameStreet = faker.address.street();
  const zipCode = faker.address.zipCode();
  const addNameStreet = faker.address.streetAddress();
  const phoneNumber = faker.phone.phoneNumber("501######");

  await openPage.navigate();

  await loginPage.selectCity();

  // await page.waitForNavigation(); for waiting auto

  await authorizationCheck.validateSelectCity();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  await loginPage.typeUserName(fakerEmail); //first for faker
  await authorizationCheck.validateEmail();

  await loginPage.typePassword("hejd768");
  await authorizationCheck.validatePas();

  await loginPage.pinPin("1223");
  await authorizationCheck.validatePin();

  await loginPage.selectMaleOrFemele();
  await authorizationCheck.validateMaleOrFemele();

  await loginPage.firstName(fakerName);
  await authorizationCheck.validateFirstName();

  await loginPage.lastName(fakerLastName);
  await authorizationCheck.validateLastName();

  await loginPage.birhtDay();
  await authorizationCheck.validateBirthDay();

  await loginPage.birhtMonth();
  await authorizationCheck.validateBirthMonth();

  await loginPage.birhtYear();
  await authorizationCheck.validateBirthYear();

  await loginPage.birthPlace(placeOfBirth);
  await authorizationCheck.validatePlaceBirth();

  await loginPage.adressSt(nameStreet);
  await authorizationCheck.validateAdress();

  await loginPage.adressAdSt(addNameStreet);
  await authorizationCheck.validateAdressAdditional();

  await loginPage.adressZipcode(zipCode);
  await authorizationCheck.validateZipCode();

  await loginPage.adressCity(nameCity);
  await authorizationCheck.validateAdressCity();

  await loginPage.mobilePhon(phoneNumber);
  await authorizationCheck.validatePhone();

  await loginPage.checkClick();
  await authorizationCheck.validateCheckBox();

  await loginPage.clickLogin();
  await authorizationCheck.validateClickLog();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  //check next page for second page

  // await loginPage.check3page("869654676");
});
