import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  size?: 'normal' | 'small';
  isDisabled?: boolean;
  isSubmit?: boolean;
  color?: 'orange' | 'orangeLight' | 'hollow';
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  label,
  size = 'normal',
  isDisabled = false,
  isSubmit = false,
  color = 'orange',
  onClick,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    onClick(e);
  };
  return (
    <button
      className={classNames(className, styles.button, size && styles[size], color && styles[color])}
      onClick={handleClick}
      disabled={isDisabled}
      type={isSubmit ? 'submit' : 'button'}
    >
      {label}
    </button>
  );
};

export default Button;
