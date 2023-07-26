import { FC } from 'react';

import Connections from './Connections/Connections';
import Events from './Events/Events';
import Images from './Images/Images';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import styles from './UserProfile.module.scss';

const UserProfile: FC = () => {

  return (
    <div className={styles.page}>
      <Images />
      <Info />
      <div className={styles.socials}>
        <Events />
        <Posts />
        <Connections />
      </div>
    </div>
  );
};

export default UserProfile;
