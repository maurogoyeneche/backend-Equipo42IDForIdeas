const { User } = require('../models');
const { Transaction, Account } = require('../models');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
  console.log(token);
  if (user.password === req.body.password) {
    res.json({ accesToken: token });
  } else {
    res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  }
};

const show = async (req, res) => {
  const user = await User.scope('user').findByPk(req.user.id);
  if (!user)
    return res.status(401).json({ error: 'Sorry, You do not have permission to access here!' });
  res.json(user).status(200);
};

const showAllTransactions = async (req, res) => {
  const user = await User.scope('user').findByPk(req.user.id);
  const accounts = await Account.findAll();
  console.log(accounts);
  const transactions = await Transaction.findByPk({
    where: { accountId: accounts.id },
  });
  res.json(transactions);
};

module.exports = {
  show,
  login,
  showAllTransactions,
};
