import { FC } from 'react';

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
];

const Requests: FC = () => {

  return (
    <div  className={styles.box}>
      <div className={styles.title}>Requests</div>
      <Scroll>
        <div className={styles.connections}>
          {connectionList.map((connection) => (
            <Connection
              key={connection.id}
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
