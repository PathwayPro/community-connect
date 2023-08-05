import classNames from 'classnames';
import { FC, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SettingBtn from '../Setting/SettingBtn';

import styles from './Toast.module.scss';
interface ToastButtonProps {
  onToastClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  toastContent: string;
  toastClassName?: string;
  containerClassName?: string;
}

const ToastButton: FC<ToastButtonProps> = ({
  onToastClick,
  toastContent,
  toastClassName,
  containerClassName,
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    if (showToast) {
      toast.dismiss();
    } else {
      toast(toastContent, {
        className: classNames(toastClassName, styles.toast),
      });
    }
    setShowToast(!showToast);
  };

  return (
    <div>
      <SettingBtn onClick={handleClick} />
      <div onClick={onToastClick}>
        <ToastContainer
          className={classNames(containerClassName, styles.container)}
          autoClose={false}
          hideProgressBar
          closeButton={false}
        />
      </div>
    </div>
  );
};

export default ToastButton;
