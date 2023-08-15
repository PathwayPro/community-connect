const { Model } = require('sequelize');
const { mentorStatuses } = require('../config/mentorship');

module.exports = (sequelize, DataTypes) => {
  class MentorRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  MentorRequest.init(
    {
      fieldOfExpertise: DataTypes.STRING,
      yearsOfExperience: DataTypes.STRING,
      numberOfMentees: DataTypes.NUMBER,
      availability: DataTypes.STRING,
      otherMentorships: DataTypes.TEXT,
      status: {
        type: DataTypes.ENUM,
        values: [mentorStatuses.PENDING, mentorStatuses.APPROVED, mentorStatuses.REJECTED],
      },
    },
    {
      sequelize,
      modelName: 'MentorRequest',
    }
  );
  return MentorRequest;
};
