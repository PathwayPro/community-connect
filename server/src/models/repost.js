const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Repost extends Model {
    static associate(models) {
      // associate user
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      // associate original post
      this.belongsTo(models.Post, { foreignKey: 'originalPostId', as: 'originalPost' });
    }
  }

  Repost.init(
    {
      repostDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      // include other fields as necessary
    },
    {
      sequelize,
      modelName: 'Repost',
    }
  );

  return Repost;
};
