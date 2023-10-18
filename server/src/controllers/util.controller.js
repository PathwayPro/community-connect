const catchAsync = require('../utils/catchAsync');
const { utilService } = require('../services');

const getCountries = catchAsync(async (req, res) => {
  const countries = await utilService.getCountries();

  res.send(countries);
});

const getProvinces = catchAsync(async (req, res) => {
  const provinces = await utilService.getProvinces();

  res.send(provinces);
});

module.exports = {
  getCountries,
  getProvinces,
};
