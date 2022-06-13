const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../page-object/mainLog");
const { AuthorizationCheck } = require("../page-object/page-check");
const { OpenPage } = require("../page-object/openPage");
const { faker } = require("@faker-js/faker");

const dataFaker = require("../faker_data/dataGenerator");

test("Valid information for authorization", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const authorizationCheck = new AuthorizationCheck(page);
  const openPage = new OpenPage(page);

  await openPage.navigate();

  await loginPage.selectCity();

  await authorizationCheck.validateSelectCity();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  await loginPage.typeUserName(dataFaker.testdata.email);

  await loginPage.typePassword(dataFaker.testdata.fakerPassword);

  await loginPage.pinPin(dataFaker.testdata.magicPin);

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

  await loginPage.birthPlace(dataFaker.testdata.birthPlaceCountry);

  await loginPage.adressSt(dataFaker.testdata.adressSt);

  await loginPage.adressAdSt(dataFaker.testdata.adressAdSt);

  await loginPage.adressZipcode(dataFaker.testdata.zipCode);

  await loginPage.adressCity(dataFaker.testdata.nameCity);

  await loginPage.mobilePhon(dataFaker.testdata.phoneNumber);

  await loginPage.checkClick();
  await authorizationCheck.validateCheckBox();

  await loginPage.clickLogin();
  await authorizationCheck.validateClickLog();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  //check next page for second page

  // await loginPage.check3page("869654676");
});
