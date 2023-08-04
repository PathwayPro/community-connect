import { FC } from 'react';
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
	const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    toast(content);
  };


  return (
    <div className={className}>
      <SettingBtn onClick={handleClick} />
      <ToastContainer />
    </div>
  );
};

export default ToastButton;
