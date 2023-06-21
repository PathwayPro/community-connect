const User = require("../models/user");
const getAll = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const create = async (newUser) => {
  console.log("newUser is", newUser);
  try {
    const createdUser = await User.create({ username: newUser.username });
    return createdUser;
  } catch (e) {
    console.error("error", e.message);
  }
};

module.exports = { create, getAll };
