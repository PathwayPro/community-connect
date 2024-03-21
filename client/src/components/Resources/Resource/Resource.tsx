import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as IconRead } from './images/bookmark-read.svg';

import styles from './Resource.module.scss';

export interface ResourceProps {
  title: string;
}

const Resource: FC<ResourceProps> = ({ title }) => {
  return (
    <div className={classNames(styles.resource, styles.green)}>
      <IconRead />
      <Link className={styles.title} to="/">
        {title}
      </Link>
    </div>
  );
};

export default Resource;
