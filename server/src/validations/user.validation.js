const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      firstName: Joi.string(),
      lastName: Joi.string(),
    })
    .min(1),
};

const createProfile = {
  body: Joi.object().keys({
    bio: Joi.string().required(),
    birthDate: Joi.date().required(),
    fieldOfExpertise: Joi.string().required(),
    yearsOfExperience: Joi.number().integer().min(0).required(),
    countryId: Joi.number().integer().required(),
    provinceId: Joi.number().integer().required(),
    spokenLanguage: Joi.string().required(),
    interestAndHobby: Joi.string().required(),
    linkedInURL: Joi.string().uri().required(),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createProfile,
};
