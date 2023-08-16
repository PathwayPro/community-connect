import classNames from 'classnames';
import { FC } from 'react';

import Button from '../Button/Button';

import styles from './CloseBtn.module.scss';

import setting from '../../../images/Icon/close.svg'

interface CloseBtnProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
}

const CloseBtn: FC<CloseBtnProps> = ({
  onClick,
  className,
}) => {
  return (
    <Button
      imgPath={setting}
      onClick={onClick}
      className={classNames(className, styles.CloseBtn)}
    ></Button>
  );
};

export default CloseBtn;
