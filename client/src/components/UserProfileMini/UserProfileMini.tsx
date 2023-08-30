import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '../../common/components/Avatar/Avatar';
import IconLinkSVG from '../../common/components/IconSVG/Link/IconLinkSVG';

import styles from './UserProfileMini.module.scss';

const Info: FC = () => {
  const userData = useSelector((state: any) => state.userProfile);

  return (
    <div className={styles.userProfile}>
      <div className={styles.backgroundImage}>
        <Avatar src={userData.image} size="medium" borderColor="blue" className={styles.profileImage} />
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.mainInfo}>
          <span>{`${userData.firstName} ${userData.lastName}`}</span>
          <span className={styles.info}>{userData.fieldOfExpertise}</span>
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
          <Link to="/events" className={styles.link}>
            Manage Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
