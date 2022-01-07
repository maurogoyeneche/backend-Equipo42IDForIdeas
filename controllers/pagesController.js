const { Transaction } = require('../models');

async function showHome(req, res) {
  const transactions = await Transaction.findAll();
  res.json(transactions);
}

module.exports = {
  showHome,
};
