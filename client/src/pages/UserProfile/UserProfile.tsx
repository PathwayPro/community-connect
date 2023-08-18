import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Posts from '../../components/Posts/Posts';

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
