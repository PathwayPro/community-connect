import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Avatar from '../../common/components/Avatar/Avatar';
import IconSVG from '../../common/components/IconSVG/IconSVG';

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
  const dispatch = useAppDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.FILL_USER_PROFILE, closeOnOverlayClick: false }));
  };

  return (
    <div className={styles.userProfile}>
      <div className={styles.backgroundImage}>
        <Avatar size="medium" borderColor="blue" className={styles.profileImage} />
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.mainInfo}>
          <span>{userData.name}</span>
          <span className={styles.info}>{userData.background}</span>
          <IconSVG name="editIcon" size="small" className={styles.editIcon} onClick={openModal} />
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
