import {FC} from 'react';

import {useAppSelector} from "../../app/hooks";
import Container from '../../common/components/Container/Container';
import Scroll from '../../common/components/Scroll/Scroll';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';
import UserPosts from '../../components/UserPosts/UserPosts';

import styles from './Profile.module.scss';

const UserProfile: FC = () => {

  const userData = useAppSelector((state) => state.user);

  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={false} />
        <Info useData={userData} myProfile={false} userProfile={true} />
        <div className={styles.socials}>
          <Events itemsToShow={4} />
          <Scroll>
            <UserPosts />
          </Scroll>
          <Connections maxSize={0} onSizeChange={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
