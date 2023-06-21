const { User } = require('../models/index');

const getAll = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const create = async (newUser) => {
  try {
    const createdUser = await User.create({ firstName: newUser.firstName });
    return createdUser;
  } catch (e) {
    console.error('error', e.message);
  }
};

module.exports = { create, getAll };
