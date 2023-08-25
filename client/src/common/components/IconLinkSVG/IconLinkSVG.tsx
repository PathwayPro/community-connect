import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import iconMap from './IconMap';

import styles from './IconLinkSVG.module.scss';

interface IconSVGProps {
  name: keyof typeof iconMap;
  label?: string;
  color?: 'black' | 'orange';
  size?: 'small' | 'big';
  className?: string;
  href: string;
}
/*
  'small'  15 x 15 – for edit pencil
  'big'    fit x 30 – for header icons
*/
const IconLinkSVG: FC<IconSVGProps> = ({ name, label = 'icon', color = 'black', size = 'medium', className, href }) => {
  const Icon = iconMap[name];
  return (
    <Link to={href} className={classNames(className, styles.button, color && styles[color], styles[size])}>
      <Icon />
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

export default IconLinkSVG;
