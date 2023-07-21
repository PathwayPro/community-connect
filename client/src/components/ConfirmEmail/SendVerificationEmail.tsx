import { FC } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { useSendConfirmationEmailQuery } from '../../app/slices/apiSlice';
import { closeModal } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';

import styles from './ConfirmEmail.module.scss';

import image from '../../images/ConfirmEmail/confirmed.png';

const SendVerificationEmail: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, isSuccess } = useSendConfirmationEmailQuery();

  let result = null;

  // TODO: Loader and Error handler
  if (isLoading) {
    result = <p className={styles.textCentered}>Loading...</p>;
  }
  if (isError) {
    result = <p className={styles.textCentered}>Try later</p>;
  }
  if (isSuccess) {
    result = (
      <>
        <p className={styles.text}>
          Before creating your user account, please check your email for a&nbsp;confirmation request
        </p>
        <Button label="Ok" onClick={() => dispatch(closeModal())} size="small" className={styles.buttonConfirm} />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={image} />
      </div>
      {result}
    </div>
  );
};

export default SendVerificationEmail;
