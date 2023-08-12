/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import Connection, { connectionProps } from './Connection/Connection';
import styles from './Connections.module.scss';

const connectionList: connectionProps[] = [
  { imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', name: 'Clark Mante', position:'Technician' },
  { imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', name: 'Clark Mante', position:'Technician' },
  { imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', name: 'Clark Mante', position:'Technician' },
];

const Connections: FC = () => {

  return (
    <div className={styles.box}>
      Connections
      <div className={styles.connections}>
        {connectionList.map((connection, index) => (
          <Connection key={index} imgPath={connection.imgPath} name={connection.name} position={connection.position} />
      ))}
      </div>
      <div className={styles.seeMore}>
        <a href="/">View all</a>
      </div>
    </div>
  );
};

export default Connections;