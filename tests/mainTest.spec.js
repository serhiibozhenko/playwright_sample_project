// const { test, expect, chromium } = require("@playwright/test");
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("..//page-object/mainLog");
const { AuthorizationCheck } = require("..//page-object/page-check");

test("Valid information for authorization", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const authorizationCheck = new AuthorizationCheck(page);

  await loginPage.navigate();

  await loginPage.selectCity();
  await authorizationCheck.validateSelectCity();

  await loginPage.typeUserName("mngr332873@gmail.com");
  await authorizationCheck.validateEmail();

  await loginPage.typePassword("umEtyvy");
  await authorizationCheck.validatePas();

  await loginPage.pinPin("1233");
  await authorizationCheck.validatePin();

  await loginPage.selectMaleOrFemele();
  await authorizationCheck.validateMaleOrFemele();

  await loginPage.firstName("Serho");
  await authorizationCheck.validateFirstName();

  await loginPage.lastName("Berovez");
  await authorizationCheck.validateLastName();

  await loginPage.birhtDay();
  await authorizationCheck.validateBirthDay();

  await loginPage.birhtMonth();
  await authorizationCheck.validateBirthMonth();

  await loginPage.birhtYear();
  await authorizationCheck.validateBirthYear();

  await loginPage.birthPlace("city Ovruch");
  await authorizationCheck.validatePlaceBirth();

  await loginPage.adressSt("Vygovskogo");
  await authorizationCheck.validateAdress();

  await loginPage.adressAdSt("Volynskogo");
  await authorizationCheck.validateAdressAdditional();

  await loginPage.adressZipcode("111198");
  await authorizationCheck.validateZipCode();

  await loginPage.adressCity("city Kyiv");
  await authorizationCheck.validateAdressCity();

  await loginPage.mobilePhon("6875757");
  await authorizationCheck.validatePhone();

  await loginPage.checkClick();
  await authorizationCheck.validateCheckBox();

  await page.waitForLoadState();

  await loginPage.clickLogin();
  await authorizationCheck.validateClickLog();

  //check next page for second page

  // await loginPage.check3page("869676");
});
