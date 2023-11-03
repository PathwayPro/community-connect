const { Role, UserRole, User } = require('../models');

/**
 * Create a user role assosiation
 * @param {number} userId
 * @param {number} roleId
 * @returns {Promise<UserRole>}
 */
const createOrUpdateUserRole = async (userId, roleId) => {
  const createdAt = new Date();
  const updatedAt = new Date();

  return UserRole.findOrCreate({
    where: { userId, roleId },
    defaults: { createdAt, updatedAt }
  });
  // return UserRole.create({ userId, roleId, createdAt, updatedAt });
};

/**
 * Get role by name
 * @param {string} name
 * @returns {Promise<Role>}
 */
const getRoleByName = async (name) => {
  return Role.findOne({ where: { name } });
};

/**
 * Get roles by userId
 * @param {string} userId
 * @returns {Promise<Roles>}
 */
const getRolesByUserId = async (userId) => {
  return Role.findAll({
    attributes: ['name'],
    include: {
      model: User,
      as: 'users',
      attributes: [],
      where: { id: userId },
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = {
  createOrUpdateUserRole,
  getRoleByName,
  getRolesByUserId,
};
