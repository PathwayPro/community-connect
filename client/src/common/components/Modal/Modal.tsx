import { FC } from 'react';
import { default as ReactModal } from 'react-modal';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import LoginForm from '../../../components/LoginForm/LoginForm';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';

import styles from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal: FC = () => {
  const { content, isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className={styles.modal}
        overlayClassName={styles.overlay}
        onRequestClose={() => dispatch(closeModal())}
      >
        {content === MODAL_TYPE.LOGIN && <LoginForm />}
        {content === MODAL_TYPE.REGISTER && <RegisterForm />}
      </ReactModal>
    </>
  );
};

export default Modal;
