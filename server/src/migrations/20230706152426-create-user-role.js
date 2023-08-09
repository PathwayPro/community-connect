/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRoles', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('UserRoles');
  },
};
