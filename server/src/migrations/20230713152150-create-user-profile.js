/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserProfiles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        onUpdate: 'CASCADE',
      },
      image: {
        type: Sequelize.BLOB,
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      provinceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Provinces',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      birthDate: {
        type: Sequelize.DATE,
      },
      isBirthDateVisible: {
        type: Sequelize.BOOLEAN,
      },
      spokenLanguage: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      fieldOfExpertise: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      yearsOfExperience: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      linkedInURL: {
        type: Sequelize.STRING,
      },
      InstaURL: {
        type: Sequelize.STRING,
      },
      twitterURL: {
        type: Sequelize.STRING,
      },
      githubURL: {
        type: Sequelize.STRING,
      },
      behanceURL: {
        type: Sequelize.STRING,
      },
      resume: {
        type: Sequelize.BLOB,
      },
      timeInCanada: {
        type: Sequelize.STRING,
      },
      goal: {
        type: Sequelize.TEXT,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('UserProfiles');
  },
};
