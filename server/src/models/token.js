const { Model } = require('sequelize');
const { tokenTypes } = require('../config/tokens');

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Token.init(
    {
      token: DataTypes.STRING,
      type: DataTypes.ENUM(tokenTypes.ACCESS, tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL),
      expiredAt: DataTypes.DATE,
      blacklistedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Token',
    }
  );
  return Token;
};
