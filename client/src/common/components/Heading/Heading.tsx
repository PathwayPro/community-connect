import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './Heading.module.scss';

interface HeadingProps {
  tagType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: ReactNode;
}

const Heading: FC<PropsWithChildren<HeadingProps>> = ({ tagType = 'h2', className, children }) => {
  const Tag = tagType;
  return <Tag className={classNames(styles.heading, styles[tagType], className)}>{children}</Tag>;
};

export default Heading;
