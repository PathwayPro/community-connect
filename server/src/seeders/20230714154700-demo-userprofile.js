const { User } = require('../models');
const { userProfiles } = require('./utils/users');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const users = await User.findAll();

    for (let i = 0; i < userProfiles.length; i++) {
      userProfiles[i].userId = users[i].id;
    }

    await queryInterface.bulkInsert('UserProfiles', [...userProfiles], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserProfiles', null, {});
  },
};
