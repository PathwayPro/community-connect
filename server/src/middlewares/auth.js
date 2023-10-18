const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');

const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user, info) => {
  if (err || info || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  req.user = user;
  if (requiredRights.length) {
    let hasRequiredRights = false;
    if (user.roles) {
      const userRights = {};
      user.roles.forEach((role) => {
        userRights[role.name] = roleRights.get(role.name);
        const roleHasRequiredRights = requiredRights.every((requiredRight) => userRights[role.name].includes(requiredRight));
        if (roleHasRequiredRights) {
          hasRequiredRights = true;
        }
      });
    }
    if (!user.roles || (!hasRequiredRights && req.params.userId !== user.id)) {
      return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
    }
  }

  resolve();
};

const auth =
  (...requiredRights) =>
    async (req, res, next) => {
      return new Promise((resolve, reject) => {
        passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(req, res, next);
      })
        .then(() => next())
        .catch((err) => next(err));
    };

module.exports = auth;
