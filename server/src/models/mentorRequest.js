const { Model } = require('sequelize');
const { mentorshipRequestStatuses } = require('../config/mentorship');

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
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      fieldOfExpertise: DataTypes.STRING,
      yearsOfExperiences: DataTypes.NUMBER,
      numberOfMentees: DataTypes.NUMBER,
      availability: DataTypes.NUMBER,
      otherMentorships: DataTypes.TEXT,
      status: {
        type: DataTypes.ENUM,
        values: [mentorshipRequestStatuses.PENDING, mentorshipRequestStatuses.RESOLVED],
      },
    },
    {
      sequelize,
      modelName: 'MentorRequest',
    }
  );
  return MentorRequest;
};
