import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBlock.module.scss';

interface SideBlockProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  paddingWidth?: 'small' | 'normal';
  linkTo?: string;
}

const SideBlock: FC<SideBlockProps> = ({ children, title, subtitle, paddingWidth = 'small', linkTo }) => {
  return (
    <>
      <div className={classNames(styles.sideBlock, paddingWidth && styles[paddingWidth])}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        {children}
        {linkTo && (
          <Link to={linkTo} className={styles.link}>
            View all
          </Link>
        )}
      </div>
    </>
  );
};

export default SideBlock;
