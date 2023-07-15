import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { useLoginUserMutation } from '../../app/slices/apiSlice';
import { setCredentials } from '../../app/slices/authSlice';
import { closeModal, showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';
import { EMAIL_REGEX, ERROR_MESSAGE_EMAIL } from '../../common/utils/formComponentsUtils';

import styles from './LoginForm.module.scss';

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

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
  // TODO: Implement errors handler
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    await loginUser(values)
      .unwrap()
      .then((data) => {
        dispatch(setCredentials(data));
        dispatch(closeModal());
      })
      .catch((error) => {
        console.log(error.data?.message || error);
      });
  };

  return (
    <form className={styles.form}>
      <Heading tagType="h5" className={styles.formTitle}>
        Welcome Back!
      </Heading>
      <Input
        name={email.name}
        label="Email *"
        type="email"
        autoComplete="on"
        className={styles.formField}
        onChange={email.onChange}
        onBlur={email.onBlur}
        ref={email.ref}
        errorMessage={errors.email?.message}
      />
      <Input
        name={password.name}
        label="Password *"
        type="password"
        className={styles.formField}
        onChange={password.onChange}
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
