import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
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

  // TODO: send data to the API
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    console.log(JSON.stringify(values, undefined, 2));
    dispatch(closeModal());
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
        className={styles.input}
        onChange={email.onChange}
        onBlur={email.onBlur}
        ref={email.ref}
        errorMessage={errors.email?.message}
      />
      <Input
        name={password.name}
        label="Password *"
        type="password"
        className={styles.input}
        onChange={password.onChange}
        onBlur={password.onBlur}
        ref={password.ref}
        errorMessage={errors.password?.message}
      />

      <div className={styles.formButton}>
        <Button
          label="Sign Up"
          isSubmit
          isDisabled={!isValid || !isDirty}
          onClick={handleSubmit(onSubmit)}
          size="small"
        />
      </div>
      <div className={styles.formBottomPart}>
        <p className={styles.formBottomText}>
          <span>Forgot Your Password? </span>
          <a href="#" className={styles.formBottomLink}>
            Click&nbsp;here.
          </a>
        </p>
        <p className={styles.formBottomText}>
          <span>Don&apos;t have an&nbsp;account? </span>
          <a
            href="#"
            className={styles.formBottomLink}
            onClick={(e) => {
              e.preventDefault;
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
