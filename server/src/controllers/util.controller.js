const catchAsync = require('../utils/catchAsync');
const { utilService } = require('../services');

const getCountries = catchAsync(async (req, res) => {
  const countries = await utilService.getCountries();
  const sanitizedCountries = countries.map((country) => country.toSanitizedJSON());
  res.send(sanitizedCountries);
});

const getProvinces = catchAsync(async (req, res) => {
  const provinces = await utilService.getProvinces();
  const sanitizedProvinces = provinces.map((province) => province.toSanitizedJSON());
  res.send(sanitizedProvinces);
});

module.exports = {
  getCountries,
  getProvinces,
};
