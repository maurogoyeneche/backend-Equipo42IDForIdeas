const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: db_name
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require('./User')(sequelize, Model, DataTypes);
const Account = require('./Account')(sequelize, Model, DataTypes);
const Transaction = require('./Transaction')(sequelize, Model, DataTypes);

//relationship between models
User.hasMany(Account);
Account.belongsTo(User);
Account.hasMany(Transaction);
Transaction.belongsTo(Account);

module.exports = {
  sequelize,
  User,
  Account,
  Transaction,
};
