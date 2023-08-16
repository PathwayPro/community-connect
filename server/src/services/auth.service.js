const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const { Token } = require('../models/index');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');

/**
 * Update refresh token cookie
 * @param {HTTPRequest} req
 * @param {HTTPResponse} res
 * @param {object} refreshToken
 * @returns {Promise}
 */
const updateRefreshTokenCookie = async (req, res, refreshToken) => {
  const { cookies } = req;

  if (cookies.jwtRefresh) {
    // Clear out previous refresh token cookie
    res.clearCookie('jwtRefresh', { httpOnly: true, sameSite: 'None', secure: true });
  }

  // Set new Secure Cookie with refresh token
  res.cookie('jwtRefresh', refreshToken.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    expires: refreshToken.expiredAt,
  });
};

/**
 * Check refresh token cookie
 * @param {HTTPRequest} req
 * @returns {Promise<string>}
 */
const checkRequestHasRefreshTokenCookie = async (req) => {
  const { cookies } = req;

  if (!cookies.jwtRefresh) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  }

  return cookies.jwtRefresh;
};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Incorrect email or password');
  }
  return user;
};

/**
 * Logout
 * @param {string} refreshToken
 * @returns {Promise}
 */
const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({
    where: { token: refreshToken, type: tokenTypes.REFRESH, blacklisted: false },
  });
  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  await refreshTokenDoc.destroy();
};

/**
 * Refresh auth tokens
 * @param {string} refreshToken
 * @returns {Promise<Object>}
 */
const refreshAuth = async (refreshToken) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(refreshToken, tokenTypes.REFRESH);
    const user = await userService.getUserById(refreshTokenDoc.userId);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.destroy();
    return tokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Refresh auth failed');
  }
};

/**
 * Reset password
 * @param {string} resetPasswordToken
 * @param {string} newPassword
 * @returns {Promise}
 */
const resetPassword = async (resetPasswordToken, newPassword) => {
  try {
    const resetPasswordTokenDoc = await tokenService.verifyToken(resetPasswordToken, tokenTypes.RESET_PASSWORD);
    const user = await userService.getUserById(resetPasswordTokenDoc.userId);
    if (!user) {
      throw new Error();
    }
    await userService.updateUserById(user.id, { password: newPassword });
    await Token.destroy({ where: { userId: user.id, type: tokenTypes.RESET_PASSWORD } });
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Password reset failed');
  }
};

/**
 * Verify email
 * @param {string} verifyEmailToken
 * @returns {Promise}
 */
const verifyEmail = async (verifyEmailToken) => {
  try {
    const verifyEmailTokenDoc = await tokenService.verifyToken(verifyEmailToken, tokenTypes.VERIFY_EMAIL);
    const user = await userService.getUserById(verifyEmailTokenDoc.userId);
    if (!user) {
      throw new Error();
    }
    await Token.destroy({ where: { userId: user.id, type: tokenTypes.VERIFY_EMAIL } });
    await userService.updateUserById(user.id, { isEmailVerified: true });
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Email verification failed');
  }
};

module.exports = {
  updateRefreshTokenCookie,
  checkRequestHasRefreshTokenCookie,
  loginUserWithEmailAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
};
