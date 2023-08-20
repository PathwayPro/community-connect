const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UserProfile, { foreignKey: 'countryId' });
    }

    toSanitizedJSON() {
      const values = this.get();
      delete values.createdAt;
      delete values.updatedAt;
      delete values.deletedAt;
      return values;
    }
  }
  Country.init(
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Country',
    }
  );
  return Country;
};
