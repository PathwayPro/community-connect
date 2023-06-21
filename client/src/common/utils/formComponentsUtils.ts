const NAME_REGEX = /^[a-z ,.'-]+$/i;

const ERROR_MESSAGE_NAME = 'Only letters are allowed.';

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const ERROR_MESSAGE_PASSWORD =
  'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character';

const ERROR_MESSAGE_REPASSWORD = 'The password you entered do not match';

const EMAIL_REGEX = /\S+@\S+\.\S+/;

export { NAME_REGEX, ERROR_MESSAGE_NAME, PASS_REGEX, ERROR_MESSAGE_PASSWORD, ERROR_MESSAGE_REPASSWORD, EMAIL_REGEX };
