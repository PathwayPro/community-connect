const httpStatus = require('http-status');
const { User } = require('../models');
const db = require('../models');
const { UserProfile } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const createdAt = new Date();
  const updatedAt = new Date();

  console.log("createUser is executed");
  console.log({ ...userBody, createdAt, updatedAt });

  return User.create({ ...userBody, createdAt, updatedAt });
};

/**
 * Query for users
 * @param {Object} filter - filter
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter) => {
  const users = await User.findAndCountAll({
    filter,
  });

  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findByPk(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ where: { email } });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.destroy();
  return user;
};

/**
 * Create or update user profile
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<UserProfile>}
 */
const createOrUpdateProfile = async (userId, updateBody) => {
  const t = await db.sequelize.transaction();
  const { firstName, lastName, ...profileData } = updateBody;
  const createdAt = new Date();
  const updatedAt = new Date();

  try {
    const [userProfile, created] = await UserProfile.findOrCreate({
      where: { userId },
      defaults: { ...profileData, createdAt, updatedAt },
      transaction: t,
    });
    if (!created) {
      Object.assign(userProfile, { ...profileData, updatedAt });
      await userProfile.save();
    }

    const user = await getUserById(userId);
    user.firstName = firstName;
    user.lastName = lastName;
    user.updatedAt = updatedAt;
    if (user.changed('firstName', firstName) || user.changed('lastName', lastName)) {
      await user.save({ transaction: t });
    }
    t.commit();
    return userProfile;
  } catch (error) {
    t.rollback();
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to save profile updates');
  }
};

const getUserProfileByUserId = async (userId) => {
  return UserProfile.findOne({
    where: { userId },
  });
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  createOrUpdateProfile,
  deleteUserById,
  getUserProfileByUserId,
};
