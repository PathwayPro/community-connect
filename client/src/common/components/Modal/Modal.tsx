import { FC, useMemo } from 'react';
import { default as ReactModal } from 'react-modal';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import ConfirmEmail from '../../../components/ConfirmEmail/ConfirmEmail';
import ForgotPasswordForm from '../../../components/ForgotPasswordForm/ForgotPasswordForm';
import LoginForm from '../../../components/LoginForm/LoginForm';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';
import ResetPasswordForm from '../../../components/ResetPasswordForm/ResetPasswordForm';
import PostModal from '../../../pages/Profile/Posts/AddPost/PostModal';

import styles from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { content, isOpen } = useAppSelector((state) => state.modal);

  const ModalContent = useMemo(() => {
    if (content) {
      if (content === MODAL_TYPE.LOGIN) return <LoginForm />;
      if (content === MODAL_TYPE.REGISTER) return <RegisterForm />;
      if (content === MODAL_TYPE.FROGOT_PASSWORD) return <ForgotPasswordForm />;
      if (content === MODAL_TYPE.RESET_PASSWORD) return <ResetPasswordForm />;
      if (content === MODAL_TYPE.CONFIRM_EMAIL) return <ConfirmEmail />;
      if (content === MODAL_TYPE.WRITE_POST) return <PostModal />;
    }
    return null;
  }, [content]);

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className={styles.modal}
        overlayClassName={styles.overlay}
        onRequestClose={() => dispatch(closeModal())}
      >
        {ModalContent}
      </ReactModal>
    </>
  );
};

export default Modal;
