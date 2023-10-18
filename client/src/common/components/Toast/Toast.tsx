import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Toast.module.scss';
interface ToastProps {
  onToastClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  toastContent: ReactNode;
  toastClassName?: string;
  containerClassName?: string;
}

const Toast: FC<ToastProps> = ({ onToastClick, toastContent, toastClassName, containerClassName }) => {
  return (
    <div onClick={onToastClick} className={classNames(containerClassName, styles.container)}>
      <div className={classNames(toastClassName, styles.toast)}>{toastContent}</div>
    </div>
  );
};

export default Toast;
