import { FC } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../common/components/Avatar/Avatar';
import IconLinkSVG from '../../common/components/IconLinkSVG/IconLinkSVG';

import styles from './UserProfileMini.module.scss';

interface userDataProps {
  name: string;
  background: string;
}

const userData: userDataProps = {
  name: 'Niloofar Karyar',
  background: 'UI/UX Designer',
};

const Info: FC = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.backgroundImage}>
        <Avatar size="medium" borderColor="blue" className={styles.profileImage} />
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.mainInfo}>
          <span>{userData.name}</span>
          <span className={styles.info}>{userData.background}</span>
          <IconLinkSVG
            name="editIcon"
            size="small"
            className={styles.editIcon}
            href="/profile/my"
            label="Link to User Profile"
          />
        </div>
        <div className={styles.links}>
          <Link to="/connections" className={styles.link}>
            Your Connections
          </Link>
          <Link to="/" className={styles.link}>
            Manage Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
