import { FC } from 'react';

import Images from './Images/Images';
import Info from './Info/Info';
import styles from './UserProfile.module.scss';

const UserProfile: FC = () => {

  return (
    <div className={styles.page}>
      <Images />
      <Info />
    </div>
  );
};

export default UserProfile;
