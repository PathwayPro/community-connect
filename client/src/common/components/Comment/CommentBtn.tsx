import classNames from 'classnames';
import { FC } from 'react';

import Button from '../Button/Button';

import styles from './CommentBtn.module.scss';

import comment from '../../../images/Icon/comment.svg'

interface CommentBtnProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
}

const CommentBtn: FC<CommentBtnProps> = ({
  onClick,
  className,
}) => {
  return (
    <Button
      imgPath={comment}
      onClick={onClick}
      className={classNames(className, styles.commentBtn)}
    ></Button>
  );
};

export default CommentBtn;
