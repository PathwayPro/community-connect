import { FC } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { useVerifyEmailQuery } from '../../app/slices/apiSlice';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';

import styles from './ConfirmEmail.module.scss';

import image from '../../images/ConfirmEmail/confirmed.png';

const VerifyEmail: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailConfirmationToken = searchParams.get('token');

  const dispatch = useAppDispatch();

  const onLoginButtonClick = () => {
    navigate('/');
    dispatch(showModal({ content: MODAL_TYPE.LOGIN }));
  };

  const { isLoading, isError, isSuccess } = useVerifyEmailQuery({ token: emailConfirmationToken });
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
        <p className={styles.textCentered}>Email successfully confirmed</p>
        <Button label="Login" onClick={onLoginButtonClick} size="small" className={styles.buttonConfirm} />
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

export default VerifyEmail;
