const { Model } = require('sequelize');
const { roles } = require('../config/roles');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: models.UserRole });
    }
  }
  Role.init(
    {
      name: {
        type: DataTypes.ENUM,
        values: roles,
      },
      rights: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );

  return Role;
};
