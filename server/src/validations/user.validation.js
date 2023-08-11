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
    image: Joi.any().optional(),
    birthDate: Joi.date().optional(),
    isBirthDateVisible: Joi.boolean().optional(),
    spokenLanguage: Joi.array().items(Joi.string()).optional(),
    fieldOfExpertise: Joi.string().required(),
    yearsOfExperience: Joi.string().required(),
    bio: Joi.string().required(),
    linkedInURL: Joi.string().uri().optional(),
    InstaURL: Joi.string().uri().optional(),
    twitterURL: Joi.string().uri().optional(),
    githubURL: Joi.string().uri().optional(),
    behanceURL: Joi.string().uri().optional(),
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
