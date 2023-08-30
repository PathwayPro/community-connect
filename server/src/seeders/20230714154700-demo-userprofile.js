const { userProfiles } = require('./utils/users');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('UserProfiles', [...userProfiles], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserProfiles', null, {});
  },
};
