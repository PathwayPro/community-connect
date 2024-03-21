'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Interests', [
      { name: 'AI', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Back-end development', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Database management', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Design', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Front-end development', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Full-stack development', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Machine learning', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Project management', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Quality assurance', createdAt: new Date(), updatedAt: new Date() },
      { name: 'UI/UX', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Interests', null, {});
  }
};
