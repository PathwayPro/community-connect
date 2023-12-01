const httpStatus = require('http-status');
const { menteeStatuses } = require('../config/mentorship');
const { MenteeRequest, MentorRequest } = require('../models');
const ApiError = require('../utils/ApiError');

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
 * Query for Mentees requests
 * @param {Object} filter - filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.offset] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMentees = async (filter, options) => {
  const menteesRequests = await MenteeRequest.findAndCountAll({
    limit: options.limit,
    offset: options.offset,
    include: MentorRequest,
  });

  return menteesRequests;
};

/**
 * Get mentee request by id
 * @param {ObjectId} id
 * @returns {Promise<MenteeRequest>}
 */
const getMenteeRequestById = async (id) => {
  return MenteeRequest.findByPk(id);
};

/**
 * Update mentee reques by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<>}
 */
const updateMenteeRequestById = async (id, updateBody) => {
  const menteeRequest = await getMenteeRequestById(id);
  if (!menteeRequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mentee Request not found');
  }
  menteeRequest.status = updateBody.status;
  if (menteeRequest.changed('status', updateBody.status)) {
    await menteeRequest.save();
  }

  return menteeRequest;
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

/**
 * Query for Mentors requests
 * @param {Object} filter - filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.offset] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMentors = async (filter, options) => {
  const mentorsRequests = await MentorRequest.findAndCountAll({
    limit: options.limit,
    offset: options.offset,
    include: MenteeRequest,
  });

  return mentorsRequests;
};

/**
 * Get mentor request by id
 * @param {ObjectId} id
 * @returns {Promise<MentorRequest>}
 */
const getMentorRequestById = async (id) => {
  return MentorRequest.findByPk(id);
};

/**
 * Update mentor reques by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<>}
 */
const updateMentorRequestById = async (id, updateBody) => {
  const mentorRequest = await getMentorRequestById(id);
  if (!mentorRequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mentor Request not found');
  }
  mentorRequest.status = updateBody.status;
  if (mentorRequest.changed('status', updateBody.status)) {
    await mentorRequest.save();
  }

  return mentorRequest;
};

module.exports = {
  createMenteeRequest,
  createMentorRequest,
  queryMentees,
  queryMentors,
  getMenteeRequestById,
  getMentorRequestById,
  updateMenteeRequestById,
  updateMentorRequestById,
};
