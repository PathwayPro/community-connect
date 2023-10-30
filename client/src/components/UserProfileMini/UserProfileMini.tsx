import { FC } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../common/components/Avatar/Avatar';
import IconLinkSVG from '../../common/components/IconSVG/Link/IconLinkSVG';

import styles from './UserProfileMini.module.scss';

interface UserFieldOfExp {
  fieldOfExpertise: string;
}
interface UserFullName {
  firstName: string;
  lastName: string;
}
interface userDataProps {
  userFieldOfExp: UserFieldOfExp;
  userFullName: UserFullName;
}

interface ProfileMiniProps {
  userData: userDataProps;
}

const Info: FC<ProfileMiniProps> = ({userData}) => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.backgroundImage}>
        <Avatar size="medium" borderColor="blue" className={styles.profileImage} />
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.mainInfo}>
          <span>{`${userData.userFullName.firstName} ${userData.userFullName.lastName}`}</span>
          <span className={styles.info}>{userData.userFieldOfExp.fieldOfExpertise}</span>
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
