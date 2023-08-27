/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'UserProfiles',
      [
        {
          userId: 1,
          image: null,
          countryId: 1,
          provinceId: 1,
          birthDate: new Date('1990-01-01'),
          isBirthDateVisible: true,
          spokenLanguage: ['English', 'French'],
          fieldOfExpertise: 'Software Development',
          yearsOfExperience: '5+',
          bio: 'I am a software developer with 5 years of experience...',
          linkedInURL: 'https://www.linkedin.com/yourprofile',
          instagramURL: 'https://www.instagram.com/yourprofile',
          twitterURL: 'https://twitter.com/yourprofile',
          githubURL: 'https://github.com/yourprofile',
          behanceURL: 'https://www.behance.net/yourprofile',
          resume: null,
          timeInCanada: '3 years',
          goal: 'My goal is to contribute to meaningful projects...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserProfiles', null, {});
  },
};
