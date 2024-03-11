import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useGetUserProfileQuery} from '../../app/slices/apiSlice';
import {setUserData} from '../../app/slices/userSlice';
import Container from '../../common/components/Container/Container';
import ConnectionPosts from '../../components/ConnectionPosts/ConnectionPosts';
import Events from '../../components/Events/Events';
import MentorshipPromo from '../../components/MentorshipPromo/MentorshipPromo';
import Resources from '../../components/Resources/Resources';
import SuggestedConnections from '../../components/SuggestedConnections/SuggestedConnections';
import UserProfileMini from '../../components/UserProfileMini/UserProfileMini';

import styles from './Home.module.scss';

//We use custom memoization on line 23 and 31, to avoid unnecessary re-rendering. A custom hook, maybe?
let cachedUserFullName: { firstName: string; lastName: string; } | null = null;
let cachedUserFieldOfExpertise: { fieldOfExpertise: string; } | null = null;

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const {data: profileQuery} = useGetUserProfileQuery({});
  const userFullName = useAppSelector((state) => {
    const newUserData = {firstName: state.user.user.firstName, lastName: state.user.user.lastName};
    if (JSON.stringify(cachedUserFullName) !== JSON.stringify(newUserData)) {
      cachedUserFullName = newUserData;
    }
    return cachedUserFullName ?? {firstName: '', lastName: ''};
  });

  const userFieldOfExp = useAppSelector((state) => {
    const newUserFieldOfExp = {fieldOfExpertise: state.user.userProfile.fieldOfExpertise};
    if (JSON.stringify(cachedUserFieldOfExpertise) !== JSON.stringify(newUserFieldOfExp)) {
      cachedUserFieldOfExpertise = newUserFieldOfExp;
    }
    return cachedUserFieldOfExpertise ?? {fieldOfExpertise: ''};
  });

  useEffect(() => {
    if (profileQuery) {
      dispatch(setUserData(profileQuery));
    }
  }, [profileQuery]);

  const userData = {userFullName, userFieldOfExp};

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.sideLeft}>
          <UserProfileMini userData={userData} />
          <SuggestedConnections />
          <Resources />
          <div className={styles.tabletEvents}>
            <Events itemsToShow={5} />
          </div>
        </div>
        <ConnectionPosts />
        <div className={styles.sideRight}>
          <MentorshipPromo />
          <Events itemsToShow={5} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
