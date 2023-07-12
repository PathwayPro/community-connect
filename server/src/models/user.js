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
      this.belongsToMany(models.Role, {
        as: 'roles',
        through: 'UserRole',
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
    }
  );

  User.addHook('beforeCreate', async function (user) {
    if (user.password) {
      // eslint-disable-next-line no-param-reassign
      user.password = await bcrypt.hash(user.password, 8);
    }
  });

  return User;
};
