import { FC } from 'react';

import Button from '../../Button/Button';

import styles from './Connection.module.scss';

export interface connectionProps {
  imgPath: string;
  name: string;
  position: string;
}

const Connection: FC<connectionProps> = ({ imgPath, name, position }) => {
  const viewProfile = () => console.log('click');

  return (
    <div className={styles.box}>
      <div className={styles.connection}>
        <img src={imgPath} alt="connection img" className={styles.image} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.position}>{position}</div>
        </div>
      </div>
      <div className={styles.btn}>
        <Button label={'View Profile'} size={'small'} color={'orange'} onClick={viewProfile}></Button>
      </div>
    </div>
  );
};

export default Connection;
