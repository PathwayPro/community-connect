/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import Connection from './Connection/Connection';

import styles from './Connections.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.png';

interface connectionProps {
  imgPath?: string;
  name: string;
  position: string;
}

const connectionList: connectionProps[] = [
  { imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', name: 'Clark Mante', position:'Technician' },
  { imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', name: 'Adam Kenedi', position:'Developer' },
  { imgPath: '', name: 'Hana Allen', position:'Designer' },
];

const Connections: FC = () => {

  return (
    <div className={styles.box}>
      Connections
      <div className={styles.connections}>
        {connectionList.map((connection, index) => (
          <Connection
            key={index}
            imgPath={connection.imgPath ? connection.imgPath : defaultProfileImage}
            name={connection.name}
            position={connection.position}
          />
      ))}
      </div>
      <div className={styles.seeMore}>
        <a href="/">View all</a>
      </div>
    </div>
  );
};

export default Connections;
