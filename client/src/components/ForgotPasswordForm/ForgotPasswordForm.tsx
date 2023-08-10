import { FC, ChangeEvent, useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { useForgotPasswordMutation } from '../../app/slices/apiSlice';
import { closeModal, showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';
import { ERROR_MESSAGES } from '../../common/utils/errors';
import { EMAIL_REGEX, ERROR_MESSAGE_EMAIL } from '../../common/utils/formComponentsUtils';

import styles from './ForgotPasswordForm.module.scss';

interface IFormInput {
  email: string;
}

const ForgotPasswordForm: FC = () => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInput>({ mode: 'onTouched' });

  const formId = 'forgotPassword';

  const email = register('email', {
    required: 'Email is required',
    pattern: {
      value: EMAIL_REGEX,
      message: ERROR_MESSAGE_EMAIL,
    },
  });

  const [forgotPassword, { isLoading, isSuccess }] = useForgotPasswordMutation();
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    await forgotPassword(values)
      .unwrap()
      .catch((error) => {
        // Added timeout to avoid overlapping error and loading messages
        const timeout = setTimeout(() => {
          setLoadingMessage('');
          if (error?.data?.message === ERROR_MESSAGES.NOT_FOUND_BY_EMAIL) {
            setErrorMessage(ERROR_MESSAGES.NOT_FOUND_BY_EMAIL);
          } else if (error?.data?.code === 400 && error?.data?.message) {
            setErrorMessage(error.data.message);
          } else {
            // Unhandled errors
            setErrorMessage(ERROR_MESSAGES.SERVER_ERROR);
          }
          clearTimeout(timeout);
        }, 2000);
        timeout;
      });
  };

  useEffect(() => {
    if (isLoading) {
      setSuccessMessage('');
      setLoadingMessage('Loading...');
    }
    if (isSuccess) {
      setLoadingMessage('');
      setSuccessMessage('Reset Email successfully sent to your email');
    }
  }, [isSuccess, isLoading]);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setSuccessMessage('');
    email.onChange(event);
  };

  return (
    <form className={styles.form}>
      <Heading tagType="h5" className={styles.formTitle}>
        Forgot your password?
      </Heading>
      <Input
        name={email.name}
        id={`${formId}-${email.name}`}
        label="Email *"
        type="email"
        autoComplete="on"
        className={styles.formField}
        onChange={onChangeEmail}
        onBlur={email.onBlur}
        ref={email.ref}
        errorMessage={errors.email?.message || errorMessage}
        successMessage={successMessage}
      />
      {loadingMessage && <p className={styles.loading}>{loadingMessage}</p>}
      <div className={styles.formButton}>
        <Button
          label={!isSuccess || !successMessage ? 'Reset by email' : 'Ok'}
          isSubmit
          isDisabled={!isValid || !isDirty || errorMessage.length > 0}
          onClick={!isSuccess || !successMessage ? handleSubmit(onSubmit) : () => dispatch(closeModal())}
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
              dispatch(showModal({ content: MODAL_TYPE.LOGIN }));
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

export default ForgotPasswordForm;
