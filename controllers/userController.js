const { User } = require('../models');
const jwt = require('jsonwebtoken');

const showLogin = (req, res) => {};

const login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  console.log(user);
  const token = jwt.sign({ id: user.id, email: user.email }, 'estaeslaclavesecreta');
  if (user.password === req.body.password) {
    res.json({ accesToken: token });
  } else {
    res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  }
};

module.exports = {
  showLogin,
  login,
};
