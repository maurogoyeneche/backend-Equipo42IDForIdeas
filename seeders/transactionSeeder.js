const faker = require('faker');
const { Transaction } = require('../models');

faker.locale = 'es';

module.exports = async () => {
  const transactions = [];

  for (let i = 0; i < 10; i++) {
    transactions.push({
      amount: faker.finance.amount(),
      origin_account: faker.finance.account(),
      destiny_account: faker.finance.account(),
      description: faker.finance.transactionDescription(),
      // currency: faker.finance.currencyName(),
      currency_symbol: faker.finance.currencySymbol(),
    });
  }

  await Transaction.bulkCreate(transactions);
  console.log('[Database] Se corrió el seeder de Transacciones.');
};
