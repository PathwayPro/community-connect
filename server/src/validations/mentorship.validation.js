const Joi = require('joi');

const applyForMentorship = {
  body: Joi.object().keys({
    message: Joi.string().required(),
  }),
};

const becomeMentor = {
  body: Joi.object().keys({
    fieldOfExpertise: Joi.string().required(),
    yearsOfExperience: Joi.string().required(),
    numberOfMentees: Joi.number().required(),
    availability: Joi.string().required(),
    otherMentorships: Joi.string().required(),
  }),
};

module.exports = {
  applyForMentorship,
  becomeMentor,
};
