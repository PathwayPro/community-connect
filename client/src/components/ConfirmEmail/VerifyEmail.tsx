import { FC, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useVerifyEmailMutation } from '../../app/slices/apiSlice';
import { setVerifyEmailToken } from '../../app/slices/authSlice';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';

import styles from './ConfirmEmail.module.scss';

import image from '../../images/ConfirmEmail/confirmed.png';

const VerifyEmail: FC = () => {
  const verifyEmailToken = useAppSelector((state) => state.auth.verifyEmailToken);
  const dispatch = useAppDispatch();
  const verifiying = useRef(false);

  const onLoginButtonClick = () => {
    dispatch(showModal({ content: MODAL_TYPE.LOGIN }));
  };

  const [verifyEmail, { isUninitialized }] = useVerifyEmailMutation();

  // TODO: Implement errors handler
  useEffect(() => {
    if (verifiying.current) return;

    if (isUninitialized) {
      verifiying.current = true;
      verifyEmail({ token: verifyEmailToken })
        .unwrap()
        .then(() => {
          dispatch(setVerifyEmailToken(null));
        })
        .catch((error) => {
          console.log(error.data?.message || error);
        });
    }
  }, [verifiying]);

  return (
    <div className={styles.container}>
      <div>
        <img src={image} />
      </div>
      <p className={styles.textCentered}>Email successfully confirmed</p>
      <Button label="Login" onClick={onLoginButtonClick} size="small" className={styles.buttonConfirm} />
    </div>
  );
};

export default VerifyEmail;
