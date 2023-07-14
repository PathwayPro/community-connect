/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Provinces', [
      { provinceAndTerritory: 'Alberta', abbreviation: 'AB', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'British Columbia', abbreviation: 'BC', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Manitoba', abbreviation: 'MB', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'New Brunswick', abbreviation: 'NB', createdAt: new Date(), updatedAt: new Date() },
      {
        provinceAndTerritory: 'Newfoundland and Labrador',
        abbreviation: 'NL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { provinceAndTerritory: 'Northwest Territories', abbreviation: 'NT', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Nova Scotia', abbreviation: 'NS', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Nunavut', abbreviation: 'NU', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Ontario', abbreviation: 'ON', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Prince Edward Island', abbreviation: 'PE', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Quebec', abbreviation: 'QC', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Saskatchewan', abbreviation: 'SK', createdAt: new Date(), updatedAt: new Date() },
      { provinceAndTerritory: 'Yukon', abbreviation: 'YT', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Provinces', null, {});
  },
};
