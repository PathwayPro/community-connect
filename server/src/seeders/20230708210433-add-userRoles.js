const { UserRole } = require('../models');
const { preUserRoles, adminRole, userRoles } = require('./utils/users');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    // Create 'preUser' roles
    await UserRole.bulkCreate([...preUserRoles]);
    // Create 'admin' roles
    await UserRole.bulkCreate([...adminRole]);
    // Create 'user' roles
    await UserRole.bulkCreate([...userRoles]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserRoles', null, {});
  },
};
