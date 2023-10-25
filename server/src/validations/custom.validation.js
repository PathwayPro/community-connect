const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid postgres id');
  }
  return value;
};

const password = (value, helpers) => {
  // if (value.length < 8) {
  //   return helpers.message('password must be at least 8 characters');
  // }
  // if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
  //   return helpers.message('password must contain at least 1 letter and 1 number');
  // }
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*\-_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!value.match(regex)) {
    return helpers.message('Password must be at least 8 characters, contain one upper case letter, one lower case letter, one number and one special character');
  }
  return value;
};

module.exports = {
  objectId,
  password,
};
