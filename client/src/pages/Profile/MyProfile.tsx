import { FC } from 'react';

import Connections from '../../common/components/Connections/Connections';
import Container from '../../common/components/Container/Container';
import Events from '../../common/components/Events/Events';
import Posts from '../../common/components/Posts/Posts';

import Images from './Images/Images';
import Info from './Info/Info';

import styles from './Profile.module.scss';

const MyProfile: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={true}/>
        <Info  myProfile={true} userProfile={false}/>
        <div className={styles.socials}>
          <Events />
          <Posts myProfile={true}/>
          <Connections />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
