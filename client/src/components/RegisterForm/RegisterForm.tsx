import classNames from 'classnames';
import { FC, useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { useRegisterUserMutation } from '../../app/slices/apiSlice';
import { setCredentials } from '../../app/slices/authSlice';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';
import { ERROR_MESSAGES } from '../../common/utils/errors';
import {
  NAME_REGEX,
  ERROR_MESSAGE_NAME,
  EMAIL_REGEX,
  ERROR_MESSAGE_EMAIL,
  PASS_REGEX,
  ERROR_MESSAGE_PASSWORD,
  ERROR_MESSAGE_REPASSWORD,
} from '../../common/utils/formComponentsUtils';

import styles from './RegisterForm.module.scss';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  agreement: string;
}

const formId = 'register';

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();
  const [emailError, setEmailError] = useState('');
  const [commonError, setCommonError] = useState('');

  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const firstName = register('firstName', {
    required: 'First name is required',
    pattern: {
      value: NAME_REGEX,
      message: ERROR_MESSAGE_NAME,
    },
  });

  const lastName = register('lastName', {
    required: 'Last name is required',
    pattern: {
      value: NAME_REGEX,
      message: ERROR_MESSAGE_NAME,
    },
  });

  const email = register('email', {
    required: 'Email is required',
    pattern: {
      value: EMAIL_REGEX,
      message: ERROR_MESSAGE_EMAIL,
    },
  });

  const password = register('password', {
    required: 'Password is required',
    pattern: {
      value: PASS_REGEX,
      message: ERROR_MESSAGE_PASSWORD,
    },
  });

  const rePassword = register('rePassword', {
    required: 'Re-enter password is required',
    validate: (value) => {
      return value === getValues('password') || ERROR_MESSAGE_REPASSWORD;
    },
  });

  const [registerUser] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    const bodyObject = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    await registerUser(bodyObject)
      .unwrap()
      .then((data) => {
        setCommonError('');
        dispatch(setCredentials(data));
        dispatch(showModal({ content: MODAL_TYPE.SEND_CONFIRMATION_EMAIL }));
      })
      .catch((error) => {
        if (error?.data?.message === ERROR_MESSAGES.EMAIL_TAKEN) {
          setCommonError('');
          setEmailError(ERROR_MESSAGES.EMAIL_TAKEN);
        } else {
          // Unhandled errors
          setCommonError(ERROR_MESSAGES.SERVER_ERROR);
          setEmailError('');
        }
      });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, onChangeHandler: React.ChangeEventHandler) => {
    setEmailError('');
    onChangeHandler(event);
  };

  return (
    <form className={styles.form}>
      <Heading tagType="h5" className={styles.formTitle}>
        Create a new account
      </Heading>
      {commonError && <p className={styles.errorMessage}>{ERROR_MESSAGES.SERVER_ERROR}</p>}
      <div className={styles.formRow}>
        <Input
          name={firstName.name}
          id={`${formId}-${firstName.name}`}
          label="First name *"
          autoComplete="on"
          className={styles.formField}
          onChange={firstName.onChange}
          onBlur={firstName.onBlur}
          ref={firstName.ref}
          errorMessage={errors.firstName?.message}
        />
        <Input
          name={lastName.name}
          id={`${formId}-${lastName.name}`}
          label="Last name *"
          autoComplete="on"
          className={styles.formField}
          onChange={lastName.onChange}
          onBlur={lastName.onBlur}
          ref={lastName.ref}
          errorMessage={errors.lastName?.message}
        />
      </div>
      <div className={styles.formRow}>
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
          errorMessage={errors.email?.message || emailError}
        />
      </div>
      <div className={classNames(styles.formRow)}>
        <Input
          name={password.name}
          id={`${formId}-${password.name}`}
          label="Password *"
          type="password"
          className={classNames(
            styles.formField,
            errors.password &&
              errors.password?.message &&
              errors.password?.message?.length > 20 &&
              styles.formFieldPassword
          )}
          onChange={password.onChange}
          onBlur={password.onBlur}
          ref={password.ref}
          errorMessage={errors.password?.message}
        />
        <Input
          name={rePassword.name}
          id={`${formId}-${rePassword.name}`}
          label="Re-enter Password *"
          type="password"
          className={styles.formField}
          onChange={rePassword.onChange}
          onBlur={rePassword.onBlur}
          ref={rePassword.ref}
          errorMessage={errors.rePassword?.message}
        />
      </div>

      <div className={classNames(styles.formRow)}>
        <fieldset className={styles.checkboxField}>
          <Controller
            name="agreement"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field, fieldState }) => (
              <input
                type="checkbox"
                id={`${formId}-agreement`}
                {...field}
                className={classNames(styles.checkbox, fieldState.error && styles.error)}
              />
            )}
          />
          <label htmlFor={`${formId}-agreement`} className={styles.checkboxLabel}>
            <span>Do&nbsp;you agree to&nbsp;our </span>
            <a href="#" className={styles.checkboxLabelLink}>Terms and Conditions</a>
            {', '}
            <a href="#" className={styles.checkboxLabelLink}>Privacy Statement</a>
            {', and '}
            <a href="#" className={styles.checkboxLabelLink}>Security Policy</a>
          </label>
        </fieldset>
      </div>

      <div className={styles.formButton}>
        <Button
          label="Sign Up"
          isSubmit
          isDisabled={!isValid || !isDirty}
          onClick={handleSubmit(onSubmit)}
          size="small"
        />
      </div>
      <p className={styles.formBottomText}>
        <span>Already have an account? </span>
        <a
          href=""
          className={styles.formBottomLink}
          onClick={(e) => {
            e.preventDefault();
            dispatch(showModal({ content: MODAL_TYPE.LOGIN }));
          }}
        >
          Sign&nbsp;in&nbsp;now
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
