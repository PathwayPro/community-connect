import { FC } from 'react';

import Button from '../../../../common/components/Button/Button';

import styles from './Connection.module.scss';

export interface connectionProps {
  imgPath?: string;
  name: string;
  position: string;
}

const Connection: FC<connectionProps> = ({
  imgPath,
  name,
  position,
}) => {

  const disconnect = () => console.log('click');

  return (
    <div className={styles.box}>
      <div className={styles.connection}>
        <img src={imgPath} alt="connection img" className={styles.image} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.position}>{position}</div>
        </div>
      </div>
      <div  className={styles.btn}>
        <Button label={'Disconnect'} size={'small'} color={'grey'} onClick={disconnect}></Button>
      </div>
    </div>

  );
};

export default Connection;
