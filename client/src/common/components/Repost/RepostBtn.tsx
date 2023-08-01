import classNames from 'classnames';
import { FC } from 'react';

import Button from '../Button/Button';

import styles from './RepostBtn.module.scss';

import repost from '../../../images/Icon/repost.svg'

interface RepostBtnProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
}

const RepostBtn: FC<RepostBtnProps> = ({
  onClick,
  className,
}) => {
  return (
    <Button
      imgPath={repost}
      onClick={onClick}
      className={classNames(className, styles.repostBtn)}
    ></Button>
  );
};

export default RepostBtn;
