const allRoles = {
  preUser: ['becomeMentor'], // registered, no user profile
  user: ['applyForMentorship'], // created user profile
  mentor: [''],
  admin: ['getUsers', 'manageUsers', 'manageMentorship'],
  superAdmin: ['createAdmin'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
