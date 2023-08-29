import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Scroll from '../../common/components/Scroll/Scroll';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import UserPosts from '../../components/UserPosts/UserPosts';

import Images from './Images/Images';
import Info from './Info/Info';

import styles from './UserProfile.module.scss';

const UserProfile: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images />
        <Info />
        <div className={styles.socials}>
          <Events itemsToShow={4} />
          <Scroll>
            <UserPosts />
          </Scroll>
          <Connections />
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
