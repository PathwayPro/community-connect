import classNames from 'classnames';
import { FC } from 'react';

import styles from './Avatar.module.scss';

import DEFAULT_AVATAR from '../../../images/defaultProfileImg.svg';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'big';
  borderColor?: 'yellow' | 'blue' | 'white';
  className?: string;
}

const Avatar: FC<AvatarProps> = ({
  src = DEFAULT_AVATAR,
  alt = "User's avatar",
  size = 'medium',
  borderColor = 'yellow',
  className,
}) => {
  return (
    <div className={classNames(className, styles.avatar, size && styles[size], borderColor && styles[borderColor])}>
      <img
        src={src}
        alt={alt}
        className={styles.avatarImg}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const imgElement = e.target as HTMLImageElement;
          imgElement.src = DEFAULT_AVATAR;
        }}
      />
    </div>
  );
};

export default Avatar;
