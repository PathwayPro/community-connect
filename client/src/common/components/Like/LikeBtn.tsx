import classNames from 'classnames';
import { FC } from 'react';

import Button from '../Button/Button';

import styles from './LikeBtn.module.scss';

import like from '../../../images/Icon/like.svg'

interface LikeBtnProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
}

const LikeBtn: FC<LikeBtnProps> = ({
  onClick,
  className,
}) => {
  return (
    <Button
      imgPath={like}
      onClick={onClick}
      className={classNames(className, styles.likeBtn)}
    ></Button>
  );
};

export default LikeBtn;
