const faker = require('faker');
const { Account } = require('../models');

faker.locale = 'es';

module.exports = async () => {
  const accounts = [];

  for (let i = 0; i < 30; i++) {
    accounts.push({
      amount: faker.finance.amount(),
      pin: faker.finance.creditCardCVV(),
      currency_name: faker.finance.currencyName(),
      // currency_symbol: faker.finance.currencySymbol(),
    });
  }

  await Account.bulkCreate(accounts);
  console.log('[Database] Se corrió el seeder de Cuentas.');
};
