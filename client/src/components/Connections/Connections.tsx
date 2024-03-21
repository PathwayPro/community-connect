import { FC } from 'react';

import SideBlock from '../../common/components/SideBlock/SideBlock';

import Connection from './Connection/Connection';

import styles from './Connections.module.scss';

import defaultProfileImage from '../../images/defaultProfileImg.svg';

interface connectionProps {
  id: number;
  imgPath?: string;
  name: string;
  position: string;
}

const connectionList: connectionProps[] = [
  { id: 1, imgPath: defaultProfileImage, name: 'Clark Mante', position: 'Technician' },
  { id: 2, imgPath: defaultProfileImage, name: 'Adam Kenedi', position: 'Developer' },
  { id: 3, imgPath: defaultProfileImage, name: 'Hana Allen', position: 'Designer' },
  { id: 4, imgPath: defaultProfileImage, name: 'Geoffrey Donnelly', position: 'Developer' },
  { id: 5, imgPath: defaultProfileImage, name: 'Ivanov Ivan', position: 'Manager' },
  { id: 6, imgPath: defaultProfileImage, name: 'Tom Jerry', position: 'Testing' },
  { id: 7, imgPath: defaultProfileImage, name: 'Alen Ford', position: 'Developer' },
  { id: 8, imgPath: defaultProfileImage, name: 'Mark Smith', position: 'Developer' },
];

const Connections: FC = () => {
  return (
    <SideBlock linkTo="/connections" btnTitle='View all Connections'>
      <div className={styles.container}>
      <div className={styles.title}>Connections</div>
      <div className={styles.connections}>
        {connectionList &&
          connectionList
            .slice(0, 7)
            .map((connection) => (
              <Connection
                key={connection.id}
                id={connection.id}
                imgPath={connection.imgPath ? connection.imgPath : defaultProfileImage}
                name={connection.name}
                position={connection.position}
              />
            ))}
      </div>
      <div className={styles.connectionsTablet}>
        {connectionList &&
          connectionList
            .slice(0, 2)
            .map((connection) => (
              <Connection
                key={connection.id}
                id={connection.id}
                imgPath={connection.imgPath ? connection.imgPath : defaultProfileImage}
                name={connection.name}
                position={connection.position}
              />
            ))}
      </div>
      </div>
    </SideBlock>
  );
};

export default Connections;
