const NAME_REGEX = /^[a-z ,.'-]+$/i;

const ERROR_MESSAGE_NAME = 'Only letters are allowed';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

const ERROR_MESSAGE_EMAIL = 'Enter a valid email address';

const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*-_])(?=.*[a-z])(?=.*[A-Z]).{9,}$/;

// Minimum 9 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const ERROR_MESSAGE_PASSWORD = 'Min 9 chars, at least one uppercase, one lowercase, one number, one special char';

const ERROR_MESSAGE_REPASSWORD = 'The password you entered do not match';

const ERROR_MESSAGE_EMAILPASSMATCH = 'The email and password combination is incorrect';

export {
  NAME_REGEX,
  ERROR_MESSAGE_NAME,
  EMAIL_REGEX,
  ERROR_MESSAGE_EMAIL,
  PASS_REGEX,
  ERROR_MESSAGE_PASSWORD,
  ERROR_MESSAGE_REPASSWORD,
  ERROR_MESSAGE_EMAILPASSMATCH,
};
