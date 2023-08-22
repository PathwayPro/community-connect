import classNames from 'classnames';
import { FC, useMemo, useRef, useState, useEffect } from 'react';
import { default as ReactModal } from 'react-modal';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import useWindowSize from '../../../common/utils/useWindowSize';
import { SendVerificationEmail, VerifyEmail } from '../../../components/ConfirmEmail';
import FillUserProfile from '../../../components/FillUserProfileForm/FillUserProfileForm';
import ForgotPasswordForm from '../../../components/ForgotPasswordForm/ForgotPasswordForm';
import MessageModal from '../../../components/Info/MessageModal/MessageModal';
import LoginForm from '../../../components/LoginForm/LoginForm';
import PostModal from '../../../components/Posts/AddPost/PostModal';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';
import ResetPasswordForm from '../../../components/ResetPasswordForm/ResetPasswordForm';

import styles from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { content, isOpen, closeOnOverlayClick } = useAppSelector((state) => state.modal);
  const { height: windowHeight } = useWindowSize();

  const [isTall, setIsTall] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // add class ".tall" when modal is highter than clientHeight
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (modalRef.current) {
          const modalHeight = modalRef.current.clientHeight;
          setIsTall(modalHeight > windowHeight);
        }
      }, 0);

      document.documentElement.classList.add('lock');

      return () => {
        clearTimeout(timer);
        document.documentElement.classList.remove('lock');
      };
    } else {
      setIsTall(false);
      document.documentElement.classList.remove('lock');
      return undefined;
    }
  }, [isOpen, windowHeight]);

  const ModalContent = useMemo(() => {
    if (content) {
      if (content === MODAL_TYPE.LOGIN) return <LoginForm />;
      if (content === MODAL_TYPE.REGISTER) return <RegisterForm />;
      if (content === MODAL_TYPE.FROGOT_PASSWORD) return <ForgotPasswordForm />;
      if (content === MODAL_TYPE.RESET_PASSWORD) return <ResetPasswordForm />;
      if (content === MODAL_TYPE.SEND_CONFIRMATION_EMAIL) return <SendVerificationEmail />;
      if (content === MODAL_TYPE.VERIFY_EMAIL) return <VerifyEmail />;
      if (content === MODAL_TYPE.FILL_USER_PROFILE) return <FillUserProfile />;
      if (content === MODAL_TYPE.WRITE_POST) return <PostModal />;
    }
    return null;
  }, [content]);

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className={classNames(styles.modal, { [styles.tall]: isTall })}
        overlayClassName={styles.overlay}
        onRequestClose={() => dispatch(closeModal())}
        shouldCloseOnOverlayClick={closeOnOverlayClick}
      >
        <div ref={modalRef}>{ModalContent}</div>
      </ReactModal>
    </>
  );
};

export default Modal;
