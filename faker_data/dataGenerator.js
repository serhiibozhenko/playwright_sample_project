const { faker } = require("@faker-js/faker");

module.exports = {
  testdata: {
    email: faker.internet.email(),
    fakerPassword: faker.datatype.string(13),
    magicPin: "1234",
    fakerName: faker.name.firstName("male"),
    fakerLastName: faker.name.lastName("male"),
    birthPlaceCountry: faker.address.country(),
    adressSt: faker.address.street(),
    adressAdSt: faker.address.streetAddress(),
    zipCode: faker.address.zipCode(),
    nameCity: faker.address.cityName(),
    phoneNumber: faker.phone.phoneNumber("501######"),
  },
};
