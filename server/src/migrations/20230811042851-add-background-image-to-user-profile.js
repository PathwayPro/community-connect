/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('UserProfiles', 'backgroundImage', {
      type: Sequelize.BLOB,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('UserProfiles', 'backgroundImage');
  },
};
