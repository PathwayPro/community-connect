import { FC } from 'react';

import Connections from '../../common/components/Connections/Connections';
import Container from '../../common/components/Container/Container';
import Events from '../../common/components/Events/Events';
import Posts from '../../common/components/Posts/Posts';

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
          <Events />
          <Posts />
          <Connections />
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
