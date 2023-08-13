import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import UserPosts from '../../components/UserPosts/UserPosts';

import Images from './Images/Images';
import Info from './Info/Info';

import styles from './Profile.module.scss';

const MyProfile: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={false} />
        <Info myProfile={false} userProfile={true} />
        <div className={styles.socials}>
          <Events itemsToShow={4} />
          <UserPosts />
          <Connections />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
