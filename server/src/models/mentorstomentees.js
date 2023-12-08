const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MentorsToMentees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MentorsToMentees.init(
    {
      MentorRequestId: DataTypes.INTEGER,
      MenteeRequestId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'MentorsToMentees',
    }
  );
  return MentorsToMentees;
};
