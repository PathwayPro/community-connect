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
  for (let i = offset; i < n + offset; i += 1) {
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

function generateUserRoles(roleId, n) {
  const userRoles = [];

  for (let i = 1; i <= n; i += 1) {
    const userRoleObject = {
      userId: i,
      roleId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    userRoles.push(userRoleObject);
  }

  return userRoles;
}

let showBirthday = true;
const fieldOfExpertise = [
  'Software Development',
  'Design',
  'It',
  'Testing / QA',
  'Project Management',
  'Mobile Development',
];
const years = ['less than 1', 'less than 3', 'less than 5', 'less than 8', 'more than 8'];

const bioExample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue quam eu scelerisque varius. \
   Vestibulum auctor bibendum ipsum, eu dignissim libero facilisis ac. Praesent tristique tempor mauris. \
   Ut eu interdum nunc. Ut sed porta tellus, sed sagittis nibh. Sed vel vestibulum mi. \
   Aliquam a leo ac enim venenatis condimentum.`;

const goals = ['connections', 'mentorship', 'careerSwitch', 'learningLanguage', 'networking'];

function generateProfiles(users) {
  const preparedProfiles = [];

  users.map((user, index) => {
    showBirthday = !showBirthday;
    const randomNumber = Math.floor(Math.random() * 13);
    preparedProfiles.push({
      userId: 1,
      image: null,
      countryId: randomNumber || 6,
      provinceId: randomNumber || 2,
      birthDate: new Date('1990-01-01'),
      isBirthDateVisible: showBirthday,
      spokenLanguage: ['English', 'French'],
      fieldOfExpertise:
        fieldOfExpertise.length > index
          ? fieldOfExpertise[index]
          : fieldOfExpertise[Math.floor((index + 1) / 2 / fieldOfExpertise.length)],
      yearsOfExperience: years.length > index ? years[index] : years[2],
      bio: bioExample,
      linkedInURL: 'https://www.linkedin.com/yourprofile',
      instagramURL: 'https://www.instagram.com/yourprofile',
      twitterURL: 'https://twitter.com/yourprofile',
      githubURL: 'https://github.com/yourprofile',
      behanceURL: showBirthday ? 'https://www.behance.net/yourprofile' : '',
      resume: null,
      timeInCanada: years.length > index ? years[index] : years[1],
      goal: goals.length > index ? goals[index] : goals[1],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return preparedProfiles;
  });
  return preparedProfiles;
}

const usersWithVerifiedEmail = generateUsers(40, true);
const usersWithNoVerifiedEmail = generateUsers(5, false, 41);
const preUserRoles = generateUserRoles(1, usersWithVerifiedEmail.length + usersWithNoVerifiedEmail.length);
const adminRole = generateUserRoles(4, 1);
const userRoles = generateUserRoles(2, usersWithVerifiedEmail.length);

const userProfiles = generateProfiles(usersWithVerifiedEmail);

module.exports = { usersWithVerifiedEmail, usersWithNoVerifiedEmail, preUserRoles, adminRole, userRoles, userProfiles };
