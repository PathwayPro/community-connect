import classNames from 'classnames';
import { FC } from 'react';

import { ReactComponent as IconCircle } from './images/bookmark-circle.svg';
import { ReactComponent as IconRead } from './images/bookmark-read.svg';

import styles from './Resource.module.scss';

export interface ResourceProps {
  title: string;
  status: 'green' | 'red' | 'yellow';
}

const Resource: FC<ResourceProps> = ({ title, status }) => {
  return (
    <div className={classNames(styles.resource, styles[status])}>
      {status === 'red' ? <IconCircle /> : <IconRead />}
      <a className={styles.title} href="/">
        {title}
      </a>
    </div>
  );
};

export default Resource;
