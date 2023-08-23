import { FC, useRef, useEffect } from 'react';

import Scroll from '../../../common/components/Scroll/Scroll';
import Connection from '../../../components/Connections/Connection/Connection';

import styles from './Connections.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.svg';

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
  { id: 4, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 5, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 6, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 7, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 8, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 9, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 10, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 11, imgPath: defaultProfileImage, name: 'Clark Mante', position: 'Technician' },
  { id: 12, imgPath: defaultProfileImage, name: 'Adam Kenedi', position: 'Developer' },
  { id: 13, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 14, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 15, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 16, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 17, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 18, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 19, imgPath: '', name: 'Hana Allen', position: 'Designer' },

];

interface ConnectionsProps {
  maxSize: number;
  onSizeChange: (size: number) => void;
}

const Connections: FC<ConnectionsProps> = ({
  maxSize,
  onSizeChange,
}) => {

  const connectionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (connectionsRef.current) {
      const connections = connectionsRef.current;
      const connectionsHeight = connections.clientHeight;
        onSizeChange(connectionsHeight);
    }
  }, [onSizeChange]);


  return (
    <div className={styles.box}>
      <div className={styles.title}>Connections</div>
      <Scroll height={maxSize}>
        <div className={styles.connections} ref={connectionsRef}>
          {connectionList.map((connection) => (
            <div key={connection.id} className={styles.connection}>
              <Connection
                imgPath={connection.imgPath ? connection.imgPath : defaultProfileImage}
                name={connection.name}
                position={connection.position}
                buttonText={'View Profile'}
              />
            </div>
          ))}
        </div>
      </Scroll>
    </div>
  );
};

export default Connections;
