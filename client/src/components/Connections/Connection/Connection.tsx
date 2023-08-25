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
      <Avatar src={imgPath} size="small" className={styles.image} />
      <div>
        <div className={styles.info}>
          <span>{name}</span>
          <span className={styles.position}>{position}</span>
          <ButtonLink label={'View Profile'} size={'small'} color={'orange'} to={`/profile/user/${id}`}></ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Connection;
