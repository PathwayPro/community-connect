const { Model } = require('sequelize');
const { mentorshipRequestStatuses } = require('../config/mentorship');

module.exports = (sequelize, DataTypes) => {
  class mentorshipRequests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  mentorshipRequests.init(
    {
      message: DataTypes.TEXT,
      resume: DataTypes.BLOB,
      status: {
        type: DataTypes.ENUM,
        values: [mentorshipRequestStatuses.PENDING, mentorshipRequestStatuses.RESOLVED],
      },
    },
    {
      sequelize,
      modelName: 'MentorshipRequests',
    }
  );
  return mentorshipRequests;
};
