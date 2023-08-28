const httpStatus = require('http-status');
const { Province } = require('../models');
const { Country } = require('../models');
const ApiError = require('../utils/ApiError');

const getCountries = async () => {
  try {
    const countries = await Country.findAll({ attributes: ['id', 'country'] });
    return countries;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to retrieve countries');
  }
};

const getProvinces = async () => {
  try {
    const provinces = await Province.findAll({ attributes: ['id', 'provinceAndTerritory', 'abbreviation'] });
    return provinces;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to retrieve provinces');
  }
};

module.exports = {
  getProvinces,
  getCountries,
};
