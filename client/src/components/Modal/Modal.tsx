import classNames from 'classnames';
import React, { FC } from 'react';
import { default as ReactModal } from 'react-modal';

import styles from './Modal.module.scss';

interface ModalProps {
  isModalOpen?: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  children: React.ReactNode;
}
ReactModal.setAppElement('#root');

const Modal: FC<ModalProps> = ({ isModalOpen = false, setIsModalOpen, className, children }) => {
  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        className={classNames(className, styles.modal)}
        overlayClassName={styles.overlay}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div>{children}</div>
      </ReactModal>
    </>
  );
};

export default Modal;
