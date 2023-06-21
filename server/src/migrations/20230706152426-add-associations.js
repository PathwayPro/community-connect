/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // associate User-Role
    await queryInterface
      .createTable('UserRole', {
        UserId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        RoleId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        // associate Token-User
        return queryInterface.addColumn('Tokens', 'userId', {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        });
      });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Tokens', 'userId');
    return queryInterface.dropTable('UserRole');
  },
};
