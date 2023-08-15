const { menteeStatuses } = require('../config/mentorship');
const { MenteeRequest, MentorRequest } = require('../models');

/**
 * Create a Mentee request
 * @param {Object} MenteeData
 * @returns {Promise<>}
 */
const createMenteeRequest = async (body) => {
  const status = menteeStatuses.PENDING;
  const createdAt = new Date();
  const updatedAt = new Date();

  return MenteeRequest.create({ ...body, status, createdAt, updatedAt });
};

/**
 * Create a Mentor request
 * @param {Object} MentorData
 * @returns {Promise<>}
 */
const createMentorRequest = async (body) => {
  const status = menteeStatuses.PENDING;
  const createdAt = new Date();
  const updatedAt = new Date();

  return MentorRequest.create({ ...body, status, createdAt, updatedAt });
};

module.exports = {
  createMenteeRequest,
  createMentorRequest,
};
