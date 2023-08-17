const { Model } = require('sequelize');
const { Op } = require('sequelize');
const { connectionStatuses } = require('../config/connectionStatuses');

module.exports = (sequelize, DataTypes) => {
  class UserConnection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { as: 'asSender', foreignKey: 'senderId' });
      this.belongsTo(models.User, { as: 'asReceiver', foreignKey: 'receiverId' });
    }
  }

  UserConnection.init(
    {
      status: {
        type: DataTypes.ENUM,
        values: [connectionStatuses.PENDING, connectionStatuses.ACCEPTED, connectionStatuses.REJECTED],
        allowNull: false,
        defaultValue: 'pending',
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'UserConnection',
    }
  );

  UserConnection.addHook('beforeCreate', async (connection) => {
    const existingConnection = await UserConnection.findOne({
      where: {
        [Op.or]: [
          { senderId: connection.senderId, receiverId: connection.receiverId },
          { senderId: connection.receiverId, receiverId: connection.senderId },
        ],
      },
    });

    if (existingConnection) {
      throw new Error('Duplicate connection detected.');
    }
  });

  return UserConnection;
};
