const axios = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countryData = response.data;

      // eslint-disable-next-line no-restricted-syntax
      for (const country of countryData) {
        // eslint-disable-next-line no-await-in-loop
        await queryInterface.bulkInsert('Countries', [
          {
            country: country.name.common,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
        // eslint-disable-next-line no-console
        console.log(`Inserted: ${country.name.common}`);
      }

      // eslint-disable-next-line no-console
      console.log('Data seeding completed successfully');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error seeding data:', error);
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
