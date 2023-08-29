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

const getMenteesRequests = catchAsync(async (req, res) => {
  const filter = JSON.parse(req.query.filter);
  const [offset, limit] = JSON.parse(req.query.range);

  const result = await mentorshipService.queryMentees(filter, { limit, offset });

  res.header('Content-Range', `total ${offset}-${limit}/${result.count}`);

  res.send(result.rows);
});

const getMenteeRequest = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await mentorshipService.getMenteeRequestById(id);
  res.send(result);
});

const updateMenteeRequest = catchAsync(async (req, res) => {
  const updatedRequest = await mentorshipService.updateMenteeRequestById(req.params.id, req.body);
  res.send(updatedRequest);
});

const createMentorRequest = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await mentorshipService.createMentorRequest({ ...req.body, userId: user.id });
  res.status(httpStatus.CREATED).send();
});

const getMentorsRequests = catchAsync(async (req, res) => {
  const filter = JSON.parse(req.query.filter);
  const [offset, limit] = JSON.parse(req.query.range);

  const result = await mentorshipService.queryMentors(filter, { limit, offset });

  res.header('Content-Range', `total ${offset}-${limit}/${result.count}`);

  res.send(result.rows);
});

const getMentorRequest = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await mentorshipService.getMentorRequestById(id);
  res.send(result);
});

const updateMentorRequest = catchAsync(async (req, res) => {
  const updatedRequest = await mentorshipService.updateMentorRequestById(req.params.id, req.body);
  res.send(updatedRequest);
});

module.exports = {
  createMenteeRequest,
  createMentorRequest,
  getMenteesRequests,
  getMentorsRequests,
  getMenteeRequest,
  getMentorRequest,
  updateMentorRequest,
  updateMenteeRequest,
};
