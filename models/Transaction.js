module.exports = (sequelize, Model, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.FLOAT(15, 2),
      },
      origin_account: {
        type: DataTypes.INTEGER,
      },
      destiny_account: {
        type: DataTypes.INTEGER,
      },
      currency: {
        type: DataTypes.STRING,
      },
      currency_symbol: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'transaction',
    },
  );

  return Transaction;
};
