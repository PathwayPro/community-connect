import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';

import Connections from './Connections/Connections';
import Requests from './Requests/Requests';

import styles from './ViewAllConnections.module.scss';

const ViewUserAllConnections: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={true} />
        <Info myProfile={true} userProfile={false} />
        <div className={styles.socials}>
          <Requests />
          <Connections />
        </div>
      </div>
    </Container>
  );
};

export default ViewUserAllConnections;
