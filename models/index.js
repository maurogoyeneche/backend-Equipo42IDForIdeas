const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: db_name
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    dialectModule: require('pg'),
    omitNull: true,
    logging: false,
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
