import classNames from 'classnames';
import { FC } from 'react';

import Button from '../Button/Button';

import styles from './VectorEditBtn.module.scss';

import vector from '../../../images/Icon/vector.svg'

interface VectorEditBtnProps {
  position?: 'top' | 'middle' | 'bottom';
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
}

const VectorEditBtn: FC<VectorEditBtnProps> = ({
  position,
  onClick,
  className,
}) => {
  return (
    <Button
      imgPath={vector}
      onClick={onClick}
      className={classNames(className, styles.vectorBtn, position && styles[position])}
    ></Button>
  );
};

export default VectorEditBtn;
