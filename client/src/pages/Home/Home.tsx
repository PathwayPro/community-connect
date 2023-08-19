import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Posts from '../../components/Posts/Posts';

// import Images from './Images/Images';
// import Info from './Info/Info';

import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        {/* <Images /> */}
        <div className={styles.side}>
          {/* <UserProfileMini /> */}
          <Connections />
          {/* <Resources /> */}
        </div>
        <Posts />
        <div className={styles.side}>
          {/* <Mentorship /> */}
          <Events />
        </div>
      </div>
    </Container>
  );
};

export default Home;
