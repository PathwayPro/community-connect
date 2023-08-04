import { FC, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SettingBtn from '../Setting/SettingBtn';

interface ToastButtonProps {
	onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	content: string;
	className?: string;
}

const ToastButton: FC<ToastButtonProps> = ({
	content,
	className,
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    if (showToast) {
      toast.dismiss();
    } else {
      toast(content);
    }
    setShowToast(!showToast);
  };

  return (
    <div className={className}>
      <SettingBtn onClick={handleClick} />
      <ToastContainer
        autoClose={false}
        hideProgressBar
        closeButton={false}
      />
    </div>
  );
};

export default ToastButton;
