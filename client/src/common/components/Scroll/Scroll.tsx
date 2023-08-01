import { FC ,ReactNode } from 'react';

import styles from './Scroll.module.scss';

interface ScrollProps {
  children: ReactNode;
}

const Scroll: FC<ScrollProps> = ({ children }) => {
  return (
    <div className={styles.scroll}>
      {children}
    </div>
  );
};

export default Scroll;
