const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role, { through: models.UserRole, as: 'roles', foreignKey: 'userId' });
      this.hasMany(models.Token, { foreignKey: 'userId', onDelete: 'CASCADE' });
      this.hasMany(models.MenteeRequest, { foreignKey: 'userId', onDelete: 'CASCADE' });
      this.hasMany(models.MentorRequest, { foreignKey: 'userId', onDelete: 'CASCADE' });
      this.hasOne(models.UserProfile, { foreignKey: 'userId', onDelete: 'CASCADE' });
      this.hasMany(models.UserConnection, { foreignKey: 'senderId', as: 'asSender' });
      this.hasMany(models.UserConnection, { foreignKey: 'receiverId', as: 'asReceiver' });
      this.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
      this.hasMany(models.Repost, { foreignKey: 'userId', as: 'reposts' });

      this.belongsToMany(models.User, {
        as: 'sender',
        through: models.UserConnection,
        foreignKey: 'senderId',
      });

      this.belongsToMany(models.User, {
        as: 'receiver',
        through: models.UserConnection,
        foreignKey: 'receiverId',
      });
    }

    /**
     * Check if email is taken
     * @param {string} email - The user's email
     * @returns {Promise<boolean>}
     */
    static async isEmailTaken(email) {
      const user = await this.findOne({ where: { email } });
      return !!user;
    }

    /**
     * Encrypt password
     * @param {string} password
     * @returns {Promise<string>}
     */
    static async encryptPassword(password) {
      const ecryptedPassword = await bcrypt.hash(password, 8);
      return ecryptedPassword;
    }

    /**
     * Check if password matches the user's password
     * @param {string} password
     * @returns {Promise<boolean>}
     */
    async isPasswordMatch(password) {
      const user = this;
      return bcrypt.compare(password, user.password);
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
      paranoid: true,
    }
  );

  User.addHook('beforeCreate', async function (user) {
    if (user.password) {
      // eslint-disable-next-line no-param-reassign
      user.password = await bcrypt.hash(user.password, 8);
    }
  });

  User.addHook('beforeUpdate', async function (user) {
    if (user.dataValues.password !== user._previousDataValues.password) {
      // eslint-disable-next-line no-param-reassign
      user.password = await bcrypt.hash(user.password, 8);
    }
  });

  return User;
};
