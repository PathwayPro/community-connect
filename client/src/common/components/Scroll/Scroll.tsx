import classNames from 'classnames';
import { FC ,ReactNode } from 'react';

import styles from './Scroll.module.scss';

interface ScrollProps {
  children: ReactNode;
  className?: string;
}

const Scroll: FC<ScrollProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames(styles.scroll, className)}
    >
      {children}
    </div>
  );
};

export default Scroll;
