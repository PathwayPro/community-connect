const { User } = require('../models');

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
function generateUsers(n, isEmailConfirmed, offset = 1) {
  const users = [];

  for (let i = offset; i <= n; i += 1) {
    const randomString = (len) => {
      let resultString = '';
      for (let j = 0; j <= len; j += 1) {
        resultString += !resultString.length
          ? alphabet[Math.floor(Math.random() * 25)].toUpperCase()
          : alphabet[Math.floor(Math.random() * 25)];
      }
      return resultString;
    };

    const user = {
      firstName: `${randomString(6)}`,
      lastName: `${randomString(8)}`,
      password: `12345Qwerty!`,
      email: `username${i}@gmail.com`,
      isEmailVerified: isEmailConfirmed,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    users.push(user);
  }

  return users;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([...generateUsers(40, true)], { individualHooks: true, hooks: true });
    await User.bulkCreate([...generateUsers(5, false, 41)], { individualHooks: true, hooks: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
