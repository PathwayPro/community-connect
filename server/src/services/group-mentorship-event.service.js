const httpStatus = require('http-status');
const { GroupMentorshipEvent } = require('../models');
const ApiError = require('../utils/ApiError');

const createGroupMentorshipRequest = async (body) => {
  const createdAt = new Date();
  const updatedAt = new Date();

  return GroupMentorshipEvent.create({ ...body, createdAt, updatedAt });
};

module.exports = {
  createGroupMentorshipRequest
};
