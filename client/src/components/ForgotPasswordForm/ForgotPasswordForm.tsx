import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';
import { EMAIL_REGEX, ERROR_MESSAGE_EMAIL } from '../../common/utils/formComponentsUtils';

import styles from './ForgotPasswordForm.module.scss';

interface IFormInput {
  email: string;
}

const ForgotPasswordForm: FC = () => {
  const dispatch = useAppDispatch();
  const [isEmailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitSuccessful },
  } = useForm<IFormInput>({ mode: 'onTouched' });

  const email = register('email', {
    required: 'Email is required',
    pattern: {
      value: EMAIL_REGEX,
      message: ERROR_MESSAGE_EMAIL,
    },
  });

  // TODO: send data to the API
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    console.log(JSON.stringify(values, undefined, 2));
    setEmailSent(true);
  };

  return (
    <form className={styles.form}>
      <Heading tagType="h5" className={styles.formTitle}>
        Forgot your password?
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
        successMessage={isSubmitSuccessful ? 'Reset Email successfully sent' : ''}
      />

      <div className={styles.formButton}>
        {!isEmailSent ? (
          <Button
            label="Reset by email"
            isSubmit
            isDisabled={!isValid || !isDirty}
            onClick={handleSubmit(onSubmit)}
            size="small"
          />
        ) : (
          <Button
            label="Resend link"
            isSubmit
            isDisabled={!isValid || !isDirty}
            onClick={handleSubmit(onSubmit)}
            size="small"
          />
        )}
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
