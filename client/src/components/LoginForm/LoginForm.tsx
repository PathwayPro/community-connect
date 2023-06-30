import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../../common/components/Button/Button';
import Input from '../../common/components/Input/Input';
import { EMAIL_REGEX, ERROR_MESSAGE_EMAIL } from '../../common/utils/formComponentsUtils';

import styles from './LoginForm.module.scss';

interface IFormInput {
  email: string;
  password: string;
}

interface LoginProps {
  isFormOpen: (input: boolean) => void;
}

const LoginForm: FC<LoginProps> = ({ isFormOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

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
    isFormOpen(false);
  };

  return (
    <form className={styles.form}>
      <header className={styles.formTitle}>Welcome Back!</header>
      <Input
        name={email.name}
        label="Email"
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
        label="Password"
        type="password"
        className={styles.input}
        onChange={password.onChange}
        onBlur={password.onBlur}
        ref={password.ref}
        errorMessage={errors.password?.message}
      />

      <div className={styles.formButton}>
        <Button label="Sign Up" isSubmit onClick={handleSubmit(onSubmit)} size="small" />
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
          <a href="#" className={styles.formBottomLink}>
            Sign&nbsp;up&nbsp;now.
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
