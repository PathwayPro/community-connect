const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {}
  UserRole.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserRole',
    }
  );
  return UserRole;
};
