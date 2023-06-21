const { Op } = require('sequelize');
const { roleRights } = require('../config/roles');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          name: 'user',
          rights: roleRights.get('user'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'admin',
          rights: roleRights.get('admin'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Roles', { [Op.or]: [{ name: 'user' }, { name: 'admin' }] });
  },
};
