import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';
import Posts from '../../components/Posts/Posts';

import styles from './Profile.module.scss';

const MyProfile: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={true} />
        <Info myProfile={true} userProfile={false} />
        <div className={styles.socials}>
          <Events />
          <Posts myProfile={true} />
          <Connections />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
