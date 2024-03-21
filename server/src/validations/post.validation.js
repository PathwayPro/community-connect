const Joi = require('joi');

const createPost = {
  body: Joi.object().keys({
    content: Joi.string().required(),
  }),
};

const createRepost = {
  params: Joi.object().keys({
    postId: Joi.string().required(),
  }),
};

module.exports = {
  createPost,
  createRepost,
};
