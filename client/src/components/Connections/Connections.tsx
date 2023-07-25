import { FC } from 'react';

import Connection from './Connection/Connection';

import styles from './Connections.module.scss';

import defaultProfileImage from '../../images/Main/defaultProfileImg.png';

interface connectionProps {
  imgPath?: string;
  name: string;
  position: string;
}

const connectionList: connectionProps[] = [
  { imgPath: defaultProfileImage, name: 'Clark Mante', position:'Technician' },
  { imgPath: defaultProfileImage, name: 'Adam Kenedi', position:'Developer' },
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
