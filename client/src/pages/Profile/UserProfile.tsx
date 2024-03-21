import {FC} from 'react';

import {useAppSelector} from "../../app/hooks";
import Container from '../../common/components/Container/Container';
import Scroll from '../../common/components/Scroll/Scroll';
import useWindowSize, { BREAKPOINTS } from '../../common/utils/useWindowSize';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';
import UserPosts from '../../components/UserPosts/UserPosts';

import styles from './Profile.module.scss';

const UserProfile: FC = () => {
  const windowSize = useWindowSize();
  const maxNumberItems = windowSize.width > BREAKPOINTS.large ? 4 : 2;

  const userData = useAppSelector((state) => state.user);

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.tabletContainer}>
          <Images myProfile={false} />
          <Info userData={userData} myProfile={false} userProfile={true} />
          <div className={styles.socials}>
            <Events itemsToShow={maxNumberItems} />
            <div className={styles.connectionsTablet}>
              <Events itemsToShow={maxNumberItems} />
              <Connections />
            </div>
            <Scroll>
              <UserPosts />
            </Scroll>
            <div className={styles.mobPosts}>
              <UserPosts />
            </div>
            <Connections />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
