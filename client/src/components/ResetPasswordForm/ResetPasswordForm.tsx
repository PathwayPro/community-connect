import classNames from 'classnames';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { closeModal, showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';
import { PASS_REGEX, ERROR_MESSAGE_PASSWORD, ERROR_MESSAGE_REPASSWORD } from '../../common/utils/formComponentsUtils';

import styles from './ResetPasswordForm.module.scss';

interface IFormInput {
  password: string;
  rePassword: string;
}

const ResetPasswordForm: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInput>({ mode: 'onTouched' });

  const password = register('password', {
    required: 'Password is required',
    pattern: {
      value: PASS_REGEX,
      message: ERROR_MESSAGE_PASSWORD,
    },
  });

  const rePassword = register('rePassword', {
    required: 'Re-enter password is required',
    pattern: {
      value: PASS_REGEX,
      message: ERROR_MESSAGE_REPASSWORD,
    },
  });

  // TODO: send data to the API
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    console.log(JSON.stringify(values, undefined, 2));
    dispatch(closeModal());
  };

  return (
    <form className={styles.form}>
      <Heading tagType="h5" className={styles.formTitle}>
        New password
      </Heading>
      <Input
        name={password.name}
        label="New Password *"
        type="password"
        className={classNames(styles.formField, errors.password && styles.errorPassword)}
        onChange={password.onChange}
        onBlur={password.onBlur}
        ref={password.ref}
        errorMessage={errors.password?.message}
      />
      <Input
        name={rePassword.name}
        label="Re-enter New Password *"
        type="password"
        className={styles.formField}
        onChange={rePassword.onChange}
        onBlur={rePassword.onBlur}
        ref={rePassword.ref}
        errorMessage={errors.rePassword?.message}
      />

      <div className={styles.formButton}>
        <Button
          label="Reset my password"
          isSubmit
          isDisabled={!isValid || !isDirty}
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

export default ResetPasswordForm;