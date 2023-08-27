const allRoles = {
  preUser: [''], // registered, no user profile
  user: ['applyForMentorship', 'becomeMentor'], // created user profile
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
