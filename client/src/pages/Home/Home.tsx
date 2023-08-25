import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Events from '../../components/Events/Events';
import MentorshipPromo from '../../components/MentorshipPromo/MentorshipPromo';
import Resources from '../../components/Resources/Resources';
import SuggestedConnections from '../../components/SuggestedConnections/SuggestedConnections';
import UserProfileMini from '../../components/UserProfileMini/UserProfileMini';

import ConnectionPosts from './ConnectionPosts/ConnectionPosts';

import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.side}>
          <UserProfileMini />
          <SuggestedConnections />
          <Resources />
        </div>
        <ConnectionPosts />
        <div className={styles.side}>
          <MentorshipPromo />
          <Events itemsToShow={5} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
