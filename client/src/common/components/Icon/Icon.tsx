import classNames from 'classnames';
import { FC } from 'react';

import styles from './Icon.module.scss';

export interface iconProps {
  href: string;
  type: 'in' | 'fb' | 'inst' | 'tw' | 'yt' | 'git' | 'be';
  shape?: 'sqr' | 'rnd';
  className?: string;
}
const Icon: FC<iconProps> = ({ href, type, shape = 'sqr', className }) => {
  return <a href={href} className={classNames(className, styles.icon, styles[type], styles[shape])}></a>;
};

export default Icon;
