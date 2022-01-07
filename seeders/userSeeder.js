const faker = require('faker');
const { User } = require('../models');

faker.locale = 'es';

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      email: faker.internet.email(),
      password: '123',
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      dni: faker.datatype.number(),
      address: faker.address.streetAddress(),
      account: faker.finance.currencyName(),
      role: 'user',
    });
  }

  await User.bulkCreate(users);
  console.log('[Database] Se corrió el seeder de Usuarios.');
};
