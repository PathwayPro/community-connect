const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        as: 'users',
        through: 'UserRole',
      });
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      rights: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );

  return Role;
};
