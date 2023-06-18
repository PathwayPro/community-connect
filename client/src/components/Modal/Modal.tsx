import classNames from 'classnames';
import React, { FC } from 'react';
import { default as ReactModal } from 'react-modal';

import styles from './Modal.module.scss';

interface ModalProps {
  isModalOpen?: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  size?: 'normal' | 'small';
  className?: string;
  children?: JSX.Element;
}

const Modal: FC<ModalProps> = ({
  isModalOpen = false,
  size = 'normal',
  className,
  children,
}) => {

  return(
    <>
      <ReactModal
        isOpen={isModalOpen}
        className={classNames(className, styles.modal, size && styles[size])}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <div>{children}</div>
      </ReactModal>
    </>
  );
};

export default Modal;
