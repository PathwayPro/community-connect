import { FC, ReactNode } from 'react';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => <div className={styles.container}>{children}</div>;

export default Container;
