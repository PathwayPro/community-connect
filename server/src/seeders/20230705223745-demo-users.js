const { User } = require('../models');
const { usersWithVerifiedEmail, usersWithNoVerifiedEmail } = require('./utils/users');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([...usersWithVerifiedEmail], { individualHooks: true, hooks: true });
    await User.bulkCreate([...usersWithNoVerifiedEmail], { individualHooks: true, hooks: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
