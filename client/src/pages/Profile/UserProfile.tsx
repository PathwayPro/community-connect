import { FC } from 'react';

import Container from '../../common/components/Container/Container';

import Connections from './Connections/Connections';
import Events from './Events/Events';
import Images from './Images/Images';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import styles from './Profile.module.scss';

const MyProfile: FC = () => {
  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={false}/>
        <Info  myProfile={false} userProfile={true}/>
        <div className={styles.socials}>
          <Events />
          <Posts myProfile={false}/>
          <Connections />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
