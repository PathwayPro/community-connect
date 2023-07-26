import classNames from 'classnames';
import { FC } from 'react';

import styles from './Icon.module.scss';

export interface iconProps {
  href: string;
  type: 'in' | 'fb' | 'inst' | 'tw' | 'yt' | 'git' | 'be';
  className?: string;
}
const Icon: FC<iconProps> = ({ href, type, className }) => {
  return <a href={href} className={classNames(className, styles.icon, styles[type])} target="_blank" rel="noreferrer"></a>;
};

export default Icon;
