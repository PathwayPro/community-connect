import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './SideBlock.module.scss';

interface SideBlockProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  paddingWidth?: 'small' | 'normal';
}

const SideBlock: FC<SideBlockProps> = ({ children, title, subtitle, paddingWidth = 'small' }) => {
  return (
    <>
      <div className={classNames(styles.sideBlock, paddingWidth && styles[paddingWidth])}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        {children}
      </div>
    </>
  );
};

export default SideBlock;
