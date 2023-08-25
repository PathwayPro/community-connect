import classNames from 'classnames';
import { FC } from 'react';

import iconMap from './IconMap';

import styles from './IconLinkSVG.module.scss';

interface IconSVGProps {
  name: keyof typeof iconMap;
  label?: string;
  color?: 'black' | 'orange';
  size?: 'small' | 'medium' | 'big' | 'wide';
  className?: string;
  href: string;
}
/*
  'small'  15 x 15 – for edit pencil
  'medium' 20 x 20 – for delete can
  'big'    38 x 32 – for header icons
  'wide'   33 x 20 – for repost icon
*/
const IconLinkSVG: FC<IconSVGProps> = ({ name, label = 'icon', color = 'black', size = 'medium', className, href }) => {
  const Icon = iconMap[name];
  return (
    <a className={classNames(className, styles.button, color && styles[color], styles[size])} href={href}>
      <Icon />
      <span className={styles.label}>{label}</span>
    </a>
  );
};

export default IconLinkSVG;
