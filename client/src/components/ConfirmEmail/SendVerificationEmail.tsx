import { FC, useEffect, useRef } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { useSendConfirmationEmailMutation } from '../../app/slices/apiSlice';
import { closeModal } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';

import styles from './ConfirmEmail.module.scss';

import image from '../../images/ConfirmEmail/confirmed.png';

const SendVerificationEmail: FC = () => {
  const dispatch = useAppDispatch();
  const verifiying = useRef(false);
  const [requestConfirmationLetter, { isUninitialized }] = useSendConfirmationEmailMutation();

  useEffect(() => {
    if (verifiying.current) return;

    if (isUninitialized) {
      verifiying.current = true;
      requestConfirmationLetter({}).unwrap();
    }
  }, [verifiying]);

  return (
    <div className={styles.container}>
      <div>
        <img src={image} />
      </div>
      <p className={styles.text}>
        Before creating your user account, please check your email for a&nbsp;confirmation request
      </p>
      <Button label="Ok" onClick={() => dispatch(closeModal())} size="small" className={styles.buttonConfirm} />
    </div>
  );
};

export default SendVerificationEmail;
