import { FC } from 'react';

import Container from '../../common/components/Container/Container';
// import Connections from '../../components/Connections/Connections';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';

import styles from './ViewAllConnections.module.scss';

const ViewMyAllConnections: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={true} />
        <Info myProfile={true} userProfile={false} />
        <div className={styles.socials}>
          {/* <Connections /> */}
        </div>
      </div>
    </Container>
  );
};

export default ViewMyAllConnections;
