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
    filter: Joi.string(),
    range: Joi.string().optional(),
    sort: Joi.string().optional(),
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
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    image: Joi.any().optional(),
    birthDate: Joi.date().allow(null).optional(),
    isBirthDateVisible: Joi.boolean().optional(),
    spokenLanguage: Joi.array().allow('', null).items(Joi.string()).optional(),
    fieldOfExpertise: Joi.string().required(),
    yearsOfExperience: Joi.string().required(),
    bio: Joi.string().allow('').optional(),
    linkedInURL: Joi.string().allow('').uri().optional(),
    instagramURL: Joi.string().allow('').uri().optional(),
    twitterURL: Joi.string().allow('').uri().optional(),
    githubURL: Joi.string().allow('').uri().optional(),
    behanceURL: Joi.string().allow('').uri().optional(),
    resume: Joi.any().optional(),
    timeInCanada: Joi.string().optional(),
    goal: Joi.string().optional(),
    countryId: Joi.number().integer().optional(),
    provinceId: Joi.number().integer().optional(),
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
