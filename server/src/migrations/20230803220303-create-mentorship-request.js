const { mentorshipRequestStatuses } = require('../config/mentorship');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MentorshipRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      resume: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: [mentorshipRequestStatuses.PENDING, mentorshipRequestStatuses.RESOLVED],
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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('MentorshipRequests');
  },
};
