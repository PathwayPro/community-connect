import classNames from 'classnames';
import { FC } from 'react';

import styles from './Avatar.module.scss';

import DEFAULT_AVATAR from '../../../images/defaultProfileImg.svg';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'big';
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src = DEFAULT_AVATAR, alt = "user's avatar", size = 'medium', className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(className, styles.avatar, size && styles[size])}
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const imgElement = e.target as HTMLImageElement;
        imgElement.src = DEFAULT_AVATAR;
      }}
    />
  );
};

export default Avatar;
