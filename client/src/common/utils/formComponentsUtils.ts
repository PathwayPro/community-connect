const NAME_REGEX = /^[a-z '-]+$/i;

const ERROR_MESSAGE_NAME = 'Only letters are allowed';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/;

const ERROR_MESSAGE_EMAIL = 'Please enter a valid email';

const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*\-_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const ERROR_MESSAGE_PASSWORD =
  'Password must be at least 8 characters, contain one upper case letter, one lower case letter, one number and one special character';

const ERROR_MESSAGE_REPASSWORD = 'The passwords you entered do not match';

const ERROR_MESSAGE_EMAILPASSMATCH = 'The email and password combination is incorrect';

const NUMBER_REGEX = /(\d)+/;

const ERROR_MESSAGE_NUMBER = 'Only digits are allowed';

const BIRTHDATE_REGEX = /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[01])$/;

const ERROR_MESSAGE_BIRTHDATE = 'Birth date should be in format yyyy/mm/dd';

const LANGUAGES_REGEX = /^[a-z,\s]+$/i;

const LANGUAGES_MESSAGE_NAME = 'Only letters and comma are allowed';

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
  BIRTHDATE_REGEX,
  ERROR_MESSAGE_BIRTHDATE,
  LANGUAGES_REGEX,
  LANGUAGES_MESSAGE_NAME,
};
