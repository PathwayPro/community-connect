const allRoles = {
  user: [''],
  mentor: [''],
  admin: ['getUsers', 'manageUsers'],
  superAdmin: ['createAdmin'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
