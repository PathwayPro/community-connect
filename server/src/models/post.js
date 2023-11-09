const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // associate user
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
      // associate reposts
      this.hasMany(models.Repost, { foreignKey: 'originalPostId', as: 'reposts' });
    }
  }

  Post.init(
    {
      content: DataTypes.TEXT,
      postDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      // include other fields as necessary
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );

  return Post;
};
