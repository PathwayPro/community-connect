import classNames from 'classnames';
import { FC, KeyboardEventHandler, MouseEvent, KeyboardEvent } from 'react';

import iconMap from './IconMap';

import styles from './IconSVG.module.scss';

interface IconSVGProps {
  name: keyof typeof iconMap;
  label?: string;
  color?: 'black' | 'orange' | 'orangeLight' | 'grey' | 'green';
  size?: 'small' | 'medium' | 'big' | 'wide';
  isSubmit?: boolean;
  className?: string;
  onClick: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
}
/*
  'small'  15 x 15 – for edit pencil
  'medium' 20 x 20 – for delete can
  'big'    38 x 32 – for header icons
  'wide'   33 x 20 – for repost icon
*/
const IconSVG: FC<IconSVGProps> = ({
  name,
  label = 'icon',
  color,
  size,
  isSubmit = false,
  className,
  onClick,
}) => {
  const Icon = iconMap[name];
  const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter' && onClick) {
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <button
      className={classNames(className, styles.button, color && styles[color], size && styles[size])}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      type={isSubmit ? 'submit' : 'button'}
    >
      <Icon />
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default IconSVG;
