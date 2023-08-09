const NAME_REGEX = /^[a-z ,.'-]+$/i;

const ERROR_MESSAGE_NAME = 'Only letters are allowed';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/;

const ERROR_MESSAGE_EMAIL = 'Enter a valid email address';

const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*\-_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const ERROR_MESSAGE_PASSWORD = 'Min 8 chars, at least one uppercase, one lowercase, one number, one special char';

const ERROR_MESSAGE_REPASSWORD = 'The password you entered do not match';

const ERROR_MESSAGE_EMAILPASSMATCH = 'The email and password combination is incorrect';

const NUMBER_REGEX = /(\d)+/;

const ERROR_MESSAGE_NUMBER = 'Only digits are allowed';

export {
  NAME_REGEX,
  ERROR_MESSAGE_NAME,
  EMAIL_REGEX,
  ERROR_MESSAGE_EMAIL,
  PASS_REGEX,
  ERROR_MESSAGE_PASSWORD,
  ERROR_MESSAGE_REPASSWORD,
  ERROR_MESSAGE_EMAILPASSMATCH,
  NUMBER_REGEX,
  ERROR_MESSAGE_NUMBER,
};
