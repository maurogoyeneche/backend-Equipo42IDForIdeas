const { Transaction } = require('../models');

async function index(req, res) {
  const transactions = await Transaction.findAll();
  res.json(transactions);
}

module.exports = {
  index,
};
