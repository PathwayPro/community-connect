const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // associate user
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
      // associate reposts
      this.hasMany(models.Repost, { foreignKey: 'originalPostId', as: 'reposts' });
      // associate comments
      this.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' });
    }
  }

  Post.init(
    {
      content: DataTypes.TEXT,
      postDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      likesCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      repostsCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      commentsCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
