const { UserRole } = require('../models');

function generateUserRoles(roleId, n) {
  const userRoles = [];

  for (let i = 1; i <= n; i += 1) {
    const userRoleObject = {
      userId: i,
      roleId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    userRoles.push(userRoleObject);
  }

  return userRoles;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    // Create 'preUser' roles
    await UserRole.bulkCreate([...generateUserRoles(1, 45)]);
    // Create 'admin' roles
    await UserRole.bulkCreate([...generateUserRoles(4, 1)]);
    // Create 'user' roles
    await UserRole.bulkCreate([...generateUserRoles(2, 40)]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserRoles', null, {});
  },
};
