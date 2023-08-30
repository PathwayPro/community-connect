import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Scroll from '../../common/components/Scroll/Scroll';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';
import UserPosts from '../../components/UserPosts/UserPosts';

import styles from './Profile.module.scss';

const MyProfile: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={true} />
        <Info myProfile={true} userProfile={false} />
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

export default MyProfile;
