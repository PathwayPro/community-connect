import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { useLoginUserMutation } from '../../app/slices/apiSlice';
import { setCredentials, login } from '../../app/slices/authSlice';
import { showModal, MODAL_TYPE, closeModal } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';
import { ERROR_MESSAGES } from '../../common/utils/errors';
import { EMAIL_REGEX, ERROR_MESSAGE_EMAIL } from '../../common/utils/formComponentsUtils';

import styles from './LoginForm.module.scss';

interface IFormInput {
  email: string;
  password: string;
}
const formId = 'login';

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInput>({ mode: 'onTouched' });

  const email = register('email', {
    required: 'Email is required',
    pattern: {
      value: EMAIL_REGEX,
      message: ERROR_MESSAGE_EMAIL,
    },
  });

  const password = register('password', {
    required: 'Password is required',
  });

  const [loginUser] = useLoginUserMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    await loginUser(values)
      .unwrap()
      .then((data) => {
        if (data.user && !data.user.isEmailVerified) {
          dispatch(showModal({ content: MODAL_TYPE.SEND_CONFIRMATION_EMAIL }));
          dispatch(setCredentials({ user: null, token: null }));
        } else {
          dispatch(setCredentials(data));
          dispatch(login());
          if (
            data.user?.roles &&
            !data.user.roles.includes('user') &&
            location.pathname != '/mentorship/become-mentor'
          ) {
            dispatch(showModal({ content: MODAL_TYPE.FILL_USER_PROFILE, closeOnOverlayClick: false }));
          } else {
            dispatch(closeModal());
          }
        }
      })
      .catch((error) => {
        if (error?.data?.message === ERROR_MESSAGES.INCORRECT_LOGIN_PAIR) {
          setErrorMessage(ERROR_MESSAGES.INCORRECT_LOGIN_PAIR);
        } else {
          // Unhandled errors
          setErrorMessage(ERROR_MESSAGES.SERVER_ERROR);
        }
      });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, onChangeHandler: React.ChangeEventHandler) => {
    setErrorMessage('');
    onChangeHandler(event);
  };

  return (
    <form className={styles.form}>
      <Heading tagType="h5" className={styles.formTitle}>
        Welcome Back!
      </Heading>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <Input
        name={email.name}
        id={`${formId}-${email.name}`}
        label="Email *"
        type="email"
        autoComplete="on"
        className={styles.formField}
        onChange={(event) => onChange(event, email.onChange)}
        onBlur={email.onBlur}
        ref={email.ref}
        errorMessage={errors.email?.message}
      />
      <Input
        name={password.name}
        id={`${formId}-${password.name}`}
        label="Password *"
        type="password"
        isPassword={true}
        className={styles.formField}
        onChange={(event) => onChange(event, password.onChange)}
        onBlur={password.onBlur}
        ref={password.ref}
        errorMessage={errors.password?.message}
      />

      <div className={styles.formButton}>
        <Button
          label="Sign In"
          isSubmit
          isDisabled={!isValid || !isDirty}
          onClick={handleSubmit(onSubmit)}
          size="small"
        />
      </div>
      <div className={styles.formBottomPart}>
        <p className={styles.formBottomText}>
          <span>Forgot Your Password? </span>
          <a
            href=""
            className={styles.formBottomLink}
            onClick={(e) => {
              e.preventDefault();
              dispatch(showModal({ content: MODAL_TYPE.FROGOT_PASSWORD }));
            }}
          >
            Click&nbsp;here.
          </a>
        </p>
        <p className={styles.formBottomText}>
          <span>Don&apos;t have an&nbsp;account? </span>
          <a
            href=""
            className={styles.formBottomLink}
            onClick={(e) => {
              e.preventDefault();
              dispatch(showModal({ content: MODAL_TYPE.REGISTER }));
            }}
          >
            Sign&nbsp;up&nbsp;now.
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
