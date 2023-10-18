const Joi = require('joi');

const applyForMentorship = {
  body: Joi.object().keys({
    message: Joi.string().required(),
  }),
};

const updateMenteeRequest = {
  body: Joi.object().keys({
    status: Joi.string().required(),
    id: Joi.number().required(),
  }),
};

const getMenteesRequests = {
  query: Joi.object().keys({
    filter: Joi.string(),
    range: Joi.string().optional(),
    sort: Joi.string().optional(),
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

const getMentorsRequests = {
  query: Joi.object().keys({
    filter: Joi.string(),
    range: Joi.string().optional(),
    sort: Joi.string().optional(),
  }),
};

module.exports = {
  applyForMentorship,
  becomeMentor,
  updateMenteeRequest,
  getMenteesRequests,
  getMentorsRequests,
};
