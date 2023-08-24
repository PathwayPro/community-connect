const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, userRoleService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
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

const createOrUpdateProfile = catchAsync(async (req, res) => {
  const userProfile = await userService.createOrUpdateProfile(req.user.id, req.body);
  // Use this if you want to return userProfile Object
  // res.status(httpStatus.CREATED).send(userProfile);
  const preUserRole = await userRoleService.getRoleByName('user');
  await userRoleService.createUserRole(userProfile.userId, preUserRole.id);
  res.status(httpStatus.CREATED).send();
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createOrUpdateProfile,
};
