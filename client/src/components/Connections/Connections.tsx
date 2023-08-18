import { FC } from 'react';

import Connection from './Connection/Connection';

import styles from './Connections.module.scss';

import defaultProfileImage from '../../images/Main/defaultProfileImg.png';

interface connectionProps {
  id: number;
  imgPath?: string;
  name: string;
  position: string;
}

const connectionList: connectionProps[] = [
  { id: 1, imgPath: defaultProfileImage, name: 'Clark Mante', position: 'Technician' },
  { id: 2, imgPath: defaultProfileImage, name: 'Adam Kenedi', position: 'Developer' },
  { id: 3, imgPath: '', name: 'Hana Allen', position: 'Designer' },
];

const Connections: FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>Connections</div>
      <div className={styles.connections}>
        {connectionList &&
          connectionList.map((connection) => (
            <Connection
              key={connection.id}
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
