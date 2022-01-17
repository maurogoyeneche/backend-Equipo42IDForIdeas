const faker = require('faker');
const { Account } = require('../models');

faker.locale = 'es';

module.exports = async () => {
  const accounts = [];

  for (let i = 0; i < 50; i++) {
    accounts.push({
      userId: faker.datatype.number({ min: 1, max: 10 }),
      amount: faker.finance.amount(),
      pin: faker.finance.creditCardCVV(),
      currency_name: faker.finance.currencyName(),
      // currency_symbol: faker.finance.currencySymbol(),
    });
  }

  await Account.bulkCreate(accounts);
  console.log('[Database] Se corrió el seeder de Cuentas.');
};
