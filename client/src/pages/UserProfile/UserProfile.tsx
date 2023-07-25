import { FC } from 'react';

import VectorEditBtn from '../../common/components/Vector/VectorEditBtn';

import styles from './UserProfile.module.scss';

const UserProfile: FC = () => {
  const openModal = () => console.log('click');

  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <img className={styles.image} src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' />
        <VectorEditBtn
          position={'bottom'}
          onClick={openModal}
        />
      </div>
      <div className={styles.personal}></div>
    </div>
  );
};

export default UserProfile;
