import { FC } from 'react';

import Avatar from '../../../common/components/Avatar/Avatar';
import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';

import styles from './Connection.module.scss';

export interface connectionProps {
  id: number;
  imgPath: string;
  name: string;
  position: string;
}

const Connection: FC<connectionProps> = ({ id, imgPath, name, position }) => {
  return (
    <div className={styles.connection}>
      <div className={styles.info}>
        <Avatar src={imgPath} size="small" className={styles.image} />
        <div className={styles.infoText}>
          <span>{name}</span>
          <span className={styles.position}>{position}</span>
        </div>
      </div>
      <ButtonLink label={'View Profile'} size={'small'} color={'orange'} to={`/profile/user/${id}`}></ButtonLink>
    </div>
  );
};

export default Connection;
