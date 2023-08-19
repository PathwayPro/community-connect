import { FC } from 'react';

import Avatar from '../../../common/components/Avatar/Avatar';
import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';

import styles from './Connection.module.scss';

export interface connectionProps {
  imgPath: string;
  name: string;
  position: string;
}

const Connection: FC<connectionProps> = ({ imgPath, name, position }) => {
  return (
    <div className={styles.connection}>
      <Avatar src={imgPath} size="small" className={styles.image} />
      <div>
        <div className={styles.info}>
          <span>{name}</span>
          <span className={styles.position}>{position}</span>
        </div>
        <ButtonLink label={'View Profile'} size={'small'} color={'orange'} to="/"></ButtonLink>
      </div>
    </div>
  );
};

export default Connection;
