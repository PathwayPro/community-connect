const { mentorshipRequestStatuses } = require('../config/mentorship');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MentorRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fieldOfExpertise: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      yearsOfExperiences: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numberOfMentees: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      availability: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      otherMentorships: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('MentorRequests');
  },
};
