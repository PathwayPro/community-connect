const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, mentorshipService } = require('../services');

const createMenteeRequest = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await mentorshipService.createMenteeRequest({ ...req.body, resume: req.file, userId: user.id });
  res.status(httpStatus.CREATED).send();
});

const createMentorRequest = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await mentorshipService.createMentorRequest({ ...req.body, userId: user.id });
  res.status(httpStatus.CREATED).send();
});

module.exports = {
  createMenteeRequest,
  createMentorRequest,
};
