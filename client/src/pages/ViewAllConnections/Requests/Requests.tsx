import { FC, useRef, useEffect } from 'react';

import Scroll from '../../../common/components/Scroll/Scroll';
import Connection from '../../../components/Connections/Connection/Connection';

import styles from './Requests.module.scss';

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
  { id: 9, imgPath: defaultProfileImage, name: 'Clark Mante', position: 'Technician' },
  { id: 10, imgPath: defaultProfileImage, name: 'Adam Kenedi', position: 'Developer' },
  { id: 11, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 12, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 13, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 14, imgPath: '', name: 'Hana Allen', position: 'Designer' },
  { id: 15, imgPath: '', name: 'Hana Allen', position: 'Designer' },
];

interface RequestsProps {
  maxSize: number;
  onSizeChange: (size: number) => void;
}

const Requests: FC<RequestsProps> = ({
  maxSize,
  onSizeChange,
}) => {

  const requestsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (requestsRef.current) {
      const requests = requestsRef.current;
      const requestsHeight = requests.clientHeight;
      onSizeChange(requestsHeight);
  }
}, [onSizeChange]);

  return (
    <div className={styles.box}>
      <div className={styles.title}>Requests</div>
      <Scroll height={maxSize}>
        <div className={styles.connections} ref={requestsRef}>
          {connectionList.map((connection) => (
            <Connection
              key={connection.id}
              className={styles.connection}
              imgPath={connection.imgPath ? connection.imgPath : defaultProfileImage}
              name={connection.name}
              position={connection.position}
              buttonText={'Accept'}
              isRequest={true}
            />
          ))}
        </div>
      </Scroll>
    </div>
  );
};

export default Requests;
