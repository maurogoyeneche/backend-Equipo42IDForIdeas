module.exports = (sequelize, Model, DataTypes) => {
  class Account extends Model {}

  Account.init(
    {
      amount: {
        type: DataTypes.FLOAT(15),
      },
      pin: {
        type: DataTypes.INTEGER,
      },
      currency_name: {
        type: DataTypes.STRING,
      },
      currency_symbol: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'account',
    },
  );

  return Account;
};
