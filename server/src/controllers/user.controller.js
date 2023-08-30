const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, userRoleService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = JSON.parse(req.query.filter);
  const result = await userService.queryUsers(filter);
  res.send(result.rows);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

const getProfile = catchAsync(async (req, res) => {
  const userProfile = await userService.getUserProfileByUserId(req.user.id);
  if (!userProfile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Profile not found');
  }
  res.send(userProfile);
});

const createOrUpdateProfile = catchAsync(async (req, res) => {
  const userProfile = await userService.createOrUpdateProfile(req.user.id, req.body);

  const userRole = await userRoleService.getRoleByName('user');
  await userRoleService.createUserRole(userProfile.userId, userRole.id);

  res.status(httpStatus.CREATED).send({ profile: userProfile, role: userRole });
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createOrUpdateProfile,
  getProfile,
};
