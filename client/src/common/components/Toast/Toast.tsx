import classNames from 'classnames';
import {FC, ReactNode, useEffect, useState} from 'react';

import IconMap from "../IconSVG/IconMap";

import styles from './Toast.module.scss';


interface ToastProps {
  onToastClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  toastContent: ReactNode;
  toastClassName?: string;
  containerClassName?: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

const Toast: FC<ToastProps> = ({
                                 onToastClick,
                                 toastContent,
                                 toastClassName,
                                 containerClassName,
                                 type,
                               }) => {

  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const AlertIcon = IconMap[`${type}Alert`] as React.FC<React.SVGProps<SVGSVGElement>>;
  const CloseIcon = IconMap[`${type}Close`] as React.FC<React.SVGProps<SVGSVGElement>>;

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    if (!isVisible) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return () => clearTimeout(closeTimer);
  }, [isVisible]);

  const handleClose = () => setIsVisible(false);

  const toastClasses = classNames(
    toastClassName,
    styles.toast,
    styles[type],
    { [styles.toastHidden]: !isVisible }
  );

  if (!shouldRender) return null;

  return (
    <div onClick={onToastClick} className={classNames(containerClassName, styles.container)}>
      <div className={toastClasses}>
        <AlertIcon className={styles.icon} />
        <span className={styles.message}>{toastContent}</span>
        <CloseIcon className={styles.closeButton} onClick={handleClose} />
      </div>
    </div>
  );
};

export default Toast;
