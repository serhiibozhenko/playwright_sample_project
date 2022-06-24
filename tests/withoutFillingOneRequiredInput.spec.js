const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../page-object/mainLog");
const { AuthorizationCheck } = require("../page-object/page-check");
const { OpenPage } = require("../page-object/openPage");
const { faker } = require("@faker-js/faker");

const dataFaker = require("../faker_data/dataGenerator");

test("registration without filling in one of the required inputs, for example input - magicPin", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const authorizationCheck = new AuthorizationCheck(page);
  const openPage = new OpenPage(page);

  await openPage.navigate();

  await loginPage.selectCity();

  await authorizationCheck.validateSelectCity();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  await loginPage.typeUserName(dataFaker.testdata.email);

  await loginPage.typePassword(dataFaker.testdata.fakerPassword);

  await loginPage.pinPin();

  await loginPage.selectMaleOrFemele();
  await authorizationCheck.validateMaleOrFemele();

  await loginPage.firstName(dataFaker.testdata.fakerName);

  await loginPage.lastName(dataFaker.testdata.fakerLastName);

  await loginPage.birhtDay();
  await authorizationCheck.validateBirthDay();

  await loginPage.birhtMonth();
  await authorizationCheck.validateBirthMonth();

  await loginPage.birhtYear();
  await authorizationCheck.validateBirthYear();

  await loginPage.birthPlace("ы");
  await authorizationCheck.validatePlaceBirth();

  await loginPage.adressSt("ы");

  await loginPage.adressAdSt("ы");

  await loginPage.adressZipcode(dataFaker.testdata.zipCode);

  await loginPage.adressCity("ы");

  await loginPage.mobilePhon("11111111111111111");

  await loginPage.checkClick();
  await authorizationCheck.validateCheckBox();

  await loginPage.clickLogin();
  await authorizationCheck.validateClickLog();

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
