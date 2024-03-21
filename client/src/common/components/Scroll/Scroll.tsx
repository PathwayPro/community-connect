import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Scroll.module.scss';

interface ScrollProps {
  children: ReactNode;
  className?: string;
  height?: number;
}

const Scroll: FC<ScrollProps> = ({
  children,
  className,
  height,
}) => {

  const scrollStyles = {
    height: height ? `${height}px` : 'none',
  };

  return (
    <div className={classNames(styles.scroll, className)} style={scrollStyles}>
      {children}
    </div>
  );
};

export default Scroll;
