import { FC, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Connection from './Connection/Connection';

import styles from './Connections.module.scss';

import defaultProfileImage from '../../images/Main/defaultProfileImg.svg';

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
];

interface ConnectionsProps {
  myProfile?: boolean;
  maxSize: number;
  onSizeChange: (size: number) => void;
}

const Connections: FC<ConnectionsProps> = (
  {
    myProfile,
    maxSize,
    onSizeChange,
  }
) => {

  const connectionsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [showConnections, setShowConnections] = useState<number>(0);

  useEffect(() => {
    if (connectionsRef.current) {
      const connections = connectionsRef.current;
      const connectionsHeight = connections.clientHeight;
      onSizeChange(connectionsHeight);

      // Calculate the maximum number of connections that can be shown based on maxSize
      const maxConnections = Math.floor(maxSize / 110); // single connection height is 110
      // reduce the number by one to allow space for the 'View all' div
      setShowConnections(maxConnections - 1);
    }
  }, [maxSize, onSizeChange]);

  //TODO: get real id:
  const id = 20;

  const handleViewAllClick = () => {
    myProfile
      ? navigate('/connections/my', { state: { connections: connectionList } })
      : navigate(`/connections/user/${id}`, { state: { connections: connectionList } });
  };

  const divStyles = {
    height: maxSize ? `${maxSize}px` : 'none',
  };

  return (
    <div className={styles.box} style={divStyles}>
      <div className={styles.title}>Connections</div>
      <div className={styles.connections} ref={connectionsRef}>
        {connectionList.slice(0, showConnections).map((connection) => (
          <Connection
            key={connection.id}
            imgPath={connection.imgPath ? connection.imgPath : defaultProfileImage}
            name={connection.name}
            position={connection.position}
            buttonText='View Profile'
          />
        ))}
      </div>
      {connectionList.length > 0 && connectionList.length > showConnections && (
        <div className={styles.seeMore}>
          <div onClick={handleViewAllClick}>View all</div>
        </div>
      )}
    </div>
  );
};

export default Connections;
