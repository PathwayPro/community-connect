import { FC, useEffect } from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useGetUserProfileQuery} from '../../app/slices/apiSlice';
import {setUserData} from '../../app/slices/userSlice';
import Container from '../../common/components/Container/Container';
import Scroll from '../../common/components/Scroll/Scroll';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';
import UserPosts from '../../components/UserPosts/UserPosts';

import styles from './Profile.module.scss';

let prevUser: { firstName: string; lastName: string; } | null = null;
let prevUserProfile: {
  fieldOfExpertise: string;
  experience: string;
  provinceId: number;
  birthDate: string;
  bio: string;
  spokenLanguage: string[];
  interests: string[];
  linkedInURL: string;
  instagramURL: string;
  twitterURL: string;
  githubURL: string;
  behanceURL: string;
} | null = null;

const MyProfile: FC = () => {
  const dispatch = useAppDispatch();
  const { data: profileQuery } = useGetUserProfileQuery({});

  const user = useAppSelector((state) => {
    const newUser = {
      firstName: state.user.user.firstName,
      lastName: state.user.user.lastName,
    };
    if (JSON.stringify(prevUser) !== JSON.stringify(newUser)) {
      prevUser = newUser;
    }
    return prevUser ?? { firstName: '', lastName: '' };
  });

  //We use custom memoization here nad on line 31 to avoid unnecessary re-rendering.
  const userProfile = useAppSelector((state) => {
    const newUserProfile = {
      fieldOfExpertise: state.user.userProfile.fieldOfExpertise,
      experience: state.user.userProfile.experience,
      provinceId: state.user.userProfile.provinceId,
      birthDate: state.user.userProfile.birthDate,
      bio: state.user.userProfile.bio,
      spokenLanguage: state.user.userProfile.spokenLanguage,
      interests: state.user.userProfile.interests,
      linkedInURL: state.user.userProfile.linkedInURL,
      instagramURL: state.user.userProfile.instagramURL,
      twitterURL: state.user.userProfile.twitterURL,
      githubURL: state.user.userProfile.githubURL,
      behanceURL: state.user.userProfile.behanceURL,
    };
    if (JSON.stringify(prevUserProfile) !== JSON.stringify(newUserProfile)) {
      prevUserProfile = newUserProfile;
    }
    return prevUserProfile ?? {
      fieldOfExpertise: '',
      experience: '',
      provinceId: 0,
      birthDate: '',
      bio: '',
      spokenLanguage: [],
      interests: [],
      linkedInURL: '',
      instagramURL: '',
      twitterURL: '',
      githubURL: '',
      behanceURL: '',
    };
  });

  useEffect(() => {
    if (profileQuery) {
      dispatch(setUserData(profileQuery));
    }
    console.log(profileQuery);
  }, [profileQuery]);

  const userData = { user, userProfile };

  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={true} />
        <Info userData={userData} myProfile={true} userProfile={false} />
        <div className={styles.socials}>
          <Events itemsToShow={4} />
          <Scroll>
            <UserPosts />
          </Scroll>
          <Connections maxSize={0} onSizeChange={function (size: number): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
