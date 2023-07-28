import classNames from 'classnames';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useResetPasswordMutation } from '../../app/slices/apiSlice';
import { setResetPasswordToken } from '../../app/slices/authSlice';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';
import { ERROR_MESSAGES } from '../../common/utils/errors';
import { PASS_REGEX, ERROR_MESSAGE_PASSWORD, ERROR_MESSAGE_REPASSWORD } from '../../common/utils/formComponentsUtils';

import styles from './ResetPasswordForm.module.scss';

interface IFormInput {
  password: string;
  rePassword: string;
}

const ResetPasswordForm: FC = () => {
  const resetPasswordToken = useAppSelector((state) => state.auth.resetPasswordToken);
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInput>({ mode: 'onChange' });

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

  const [resetPassword] = useResetPasswordMutation();
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    const data = {
      token: resetPasswordToken,
      password: values.password,
    };
    await resetPassword(data)
      .unwrap()
      .then(() => {
        dispatch(setResetPasswordToken(null));
        dispatch(showModal({ content: MODAL_TYPE.LOGIN }));
      })
      .catch((error) => {
        if (error?.data?.message === ERROR_MESSAGES.PASSWORD_RESET_FAILED) {
          setErrorMessage(ERROR_MESSAGES.PASSWORD_RESET_FAILED);
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
        New password
      </Heading>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <Input
        name={password.name}
        label="New Password *"
        type="password"
        className={classNames(styles.formField, errors.password && styles.errorPassword)}
        onChange={(event) => onChange(event, password.onChange)}
        onBlur={password.onBlur}
        ref={password.ref}
        errorMessage={errors.password?.message}
      />
      <Input
        name={rePassword.name}
        label="Re-enter New Password *"
        type="password"
        className={styles.formField}
        onChange={(event) => onChange(event, rePassword.onChange)}
        onBlur={rePassword.onBlur}
        ref={rePassword.ref}
        errorMessage={errors.rePassword?.message}
      />

      <div className={styles.formButton}>
        <Button
          label="Reset my password"
          isSubmit
          isDisabled={!isValid || !isDirty || errorMessage.length > 0}
          onClick={handleSubmit(onSubmit)}
          size="small"
        />
      </div>
      <div className={styles.formBottomPart}>
        <p className={styles.formBottomText}>
          <span>Already have an&nbsp;account? </span>
          <a
            href=""
            className={styles.formBottomLink}
            onClick={(e) => {
              e.preventDefault();
              dispatch(showModal({ content: MODAL_TYPE.LOGIN, closeOnOverlayClick: true }));
            }}
          >
            Sign&nbsp;in&nbsp;now.
          </a>
        </p>
        <p className={styles.formBottomText}>
          <span>Don&apos;t have an&nbsp;account? </span>
          <a
            href=""
            className={styles.formBottomLink}
            onClick={(e) => {
              e.preventDefault();
              dispatch(showModal({ content: MODAL_TYPE.REGISTER, closeOnOverlayClick: true }));
            }}
          >
            Sign&nbsp;up&nbsp;now.
          </a>
        </p>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
