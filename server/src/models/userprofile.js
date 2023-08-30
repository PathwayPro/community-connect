const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Country, { foreignKey: 'countryId' });
      this.belongsTo(models.Province, { foreignKey: 'provinceId' });
    }
  }

  UserProfile.init(
    {
      // TODO: Change the data types from BLOB to string for the following field and update the rest of the files:
      backgroundImage: DataTypes.BLOB,
      // TODO: Change the data types from BLOB to string for the following field and update the rest of the files:
      image: DataTypes.BLOB,
      birthDate: DataTypes.DATE,
      isBirthDateVisible: DataTypes.BOOLEAN,
      spokenLanguage: DataTypes.ARRAY(DataTypes.STRING),
      fieldOfExpertise: DataTypes.TEXT,
      yearsOfExperience: DataTypes.STRING,
      bio: DataTypes.TEXT,
      linkedInURL: DataTypes.STRING,
      instagramURL: DataTypes.STRING,
      twitterURL: DataTypes.STRING,
      githubURL: DataTypes.STRING,
      behanceURL: DataTypes.STRING,
      // TODO: Change the data types from BLOB to string for the following field and update the rest of the files:
      resume: DataTypes.BLOB,
      timeInCanada: DataTypes.STRING,
      goal: DataTypes.TEXT,
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'UserProfile',
    }
  );
  return UserProfile;
};
