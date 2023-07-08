import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { closeModal, showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';

import styles from './ConfirmEmail.module.scss';

import image from '../../images/ConfirmEmail/confirmed.png';

const ConfirmEmail: FC = () => {
  const dispatch = useAppDispatch();

  // TODO: This behaviour has to be updated according to backend logic for email confirmation
  // Now it works if URL from email contains emailConfirmed=true parameter => show ConfirmEmail
  const [searchParams, setSearchParams] = useSearchParams();
  const emailConfirmed = searchParams.get('emailConfirmed');

  const onLoginButtonClick = () => {
    dispatch(showModal({ content: MODAL_TYPE.LOGIN }));
    searchParams.delete('emailConfirmed');
    setSearchParams(searchParams);
  };
  return (
    <div className={styles.container}>
      <div>
        <img src={image} />
      </div>

      {emailConfirmed ? (
        <p className={styles.textSuccess}>Email successfully confirmed</p>
      ) : (
        <p className={styles.text}>
          Before creating your user account, please check your email for a&nbsp;confirmation request
        </p>
      )}

      {emailConfirmed ? (
        <Button label="Login" onClick={onLoginButtonClick} size="small" className={styles.buttonConfirm} />
      ) : (
        <Button label="Ok" onClick={() => dispatch(closeModal())} size="small" className={styles.buttonConfirm} />
      )}
    </div>
  );
};

export default ConfirmEmail;
