module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING,
      },
      account: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      scopes: { user: { attributes: { exclude: ['password'] } } },
      modelName: 'user',
    },
  );

  return User;
};
