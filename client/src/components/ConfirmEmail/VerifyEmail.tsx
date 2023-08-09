import { FC, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useVerifyEmailMutation } from '../../app/slices/apiSlice';
import { setVerifyEmailToken } from '../../app/slices/authSlice';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import { ERROR_MESSAGES } from '../../common/utils/errors';

import styles from './ConfirmEmail.module.scss';

import image from '../../images/ConfirmEmail/confirmed.png';

const VerifyEmail: FC = () => {
  const verifyEmailToken = useAppSelector((state) => state.auth.verifyEmailToken);
  const dispatch = useAppDispatch();
  const verifiying = useRef(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLoginButtonClick = () => {
    dispatch(showModal({ content: MODAL_TYPE.LOGIN }));
  };

  const onRequestLetterButtonClick = () => {
    dispatch(showModal({ content: MODAL_TYPE.SEND_CONFIRMATION_EMAIL }));
  };

  const [verifyEmail, { isUninitialized, isLoading, isSuccess, isError }] = useVerifyEmailMutation();

  // TODO: Implement errors handler
  useEffect(() => {
    const fetchEmailVerification = async () => {
      await verifyEmail({ token: verifyEmailToken }).unwrap();
    };
    if (verifiying.current) return;

    if (isUninitialized) {
      verifiying.current = true;
      fetchEmailVerification()
        .then(() => {
          dispatch(setVerifyEmailToken(null));
        })
        .catch((error) => {
          if (error?.data?.message === ERROR_MESSAGES.EMAIL_VERIFICATION_FAILED) {
            setErrorMessage('Email verification failed. Please, request comfirmation letter again');
          } else {
            // Unhandled errors
            setErrorMessage(ERROR_MESSAGES.SERVER_ERROR);
          }
        });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <img src={image} />
      </div>
      {isLoading && <p className={styles.textCentered}>Loading...</p>}
      {isError && errorMessage && (
        <>
          <p className={styles.textCentered}>{errorMessage}</p>
          <Button
            label="Request confirmation letter"
            onClick={onRequestLetterButtonClick}
            size="small"
            className={styles.buttonConfirm}
          />
        </>
      )}
      {isSuccess && (
        <>
          <p className={styles.textCentered}>Email successfully confirmed</p>
          <Button label="Login" onClick={onLoginButtonClick} size="small" className={styles.buttonConfirm} />
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
