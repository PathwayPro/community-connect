const { Model } = require('sequelize');
const { menteeStatuses } = require('../config/mentorship');

module.exports = (sequelize, DataTypes) => {
  class MenteeRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  MenteeRequest.init(
    {
      message: DataTypes.TEXT,
      resume: DataTypes.BLOB,
      status: {
        type: DataTypes.ENUM,
        values: [menteeStatuses.PENDING, menteeStatuses.IN_PROGRESS, menteeStatuses.MATCHED],
      },
    },
    {
      sequelize,
      modelName: 'MenteeRequest',
    }
  );
  return MenteeRequest;
};
