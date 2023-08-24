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
interface ConnectionsProps {
  data?: connectionProps[];
  maxSize: number;
  onSizeChange: (size: number) => void;
}

const Connections: FC<ConnectionsProps> = ({
  data,
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
      <Scroll className={styles.scroll} height={maxSize}>
        <div className={styles.connections} ref={connectionsRef}>
          {data?.length != null && data?.map((connection) => (
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
