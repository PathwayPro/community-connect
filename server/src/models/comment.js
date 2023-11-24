const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
      this.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    }
  }

  Comment.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );

  return Comment;
};
