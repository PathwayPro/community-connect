const NAME_REGEX = /^[a-z ,.'-]+$/i;

const ERROR_MESSAGE_NAME = 'Only letters are allowed.';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

const ERROR_MESSAGE_EMAIL = 'Enter a valid email address.';

const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*-_])(?=.*[a-z])(?=.*[A-Z]).{9,}$/;

const ERROR_MESSAGE_PASSWORD =
  'Use at least 9 characters with at least one uppercase letter, one lowercase letter, one number and one special character.'

const ERROR_MESSAGE_REPASSWORD = 'The password you entered do not match';

const ERROR_MESSAGE_EMAILPASSMATCH = 'The email or username and password combination is incorrect.';

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
