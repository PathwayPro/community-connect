import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Resources from '../../components/Resources/Resources';
import UserProfileMini from '../../components/UserProfileMini/UserProfileMini';

import ConnectionPosts from './ConnectionPosts/ConnectionPosts';

import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.side}>
          <UserProfileMini />
          <Connections />
          <Resources />
        </div>
        <ConnectionPosts />
        <div className={styles.side}>
          {/* <Mentorship /> */}
          <Events />
        </div>
      </div>
    </Container>
  );
};

export default Home;
