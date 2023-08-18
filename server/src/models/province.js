const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UserProfile, { foreignKey: 'provinceId' });
    }

    toSanitizedJSON() {
      const values = this.get();
      delete values.createdAt;
      delete values.updatedAt;
      delete values.deletedAt;
      return values;
    }
  }
  Province.init(
    {
      provinceAndTerritory: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      abbreviation: {
        type: DataTypes.STRING(2),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Province',
    }
  );
  return Province;
};
