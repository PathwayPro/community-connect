import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Icon.module.scss';

export interface iconProps {
  href: string;
  type: 'in' | 'fb' | 'inst';
}
const Icon: FC<iconProps> = ({ href, type }) => {
  return <a href={href} className={classNames(styles.icon, styles[type])}></a>;
};

export default Icon;
