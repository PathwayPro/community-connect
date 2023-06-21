const userService = require("../services/user");
const getAll = async (req, res) => {
  const users = await userService.getAll();
  res.send(users);
};

const create = async (req, res) => {
  const userToCreate = req.body;
  const createdUser = await userService.create(userToCreate);
  res.send(createdUser);
};

module.exports = { getAll, create };
