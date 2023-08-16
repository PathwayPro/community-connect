/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'UserConnections',
      [
        {
          senderId: 1,
          receiverId: 2,
          status: 'accepted',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserConnections', null, {});
  },
};
