import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { useGetProvincesQuery } from "../../app/slices/apiSlice";
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Icon, { iconProps } from '../../common/components/Icon/Icon';
import IconSVG from '../../common/components/IconSVG/Button/IconSVG';

import styles from './Info.module.scss';

interface UserProfile {
  fieldOfExpertise: string;
  experience: string;
  provinceId: number;
  birthDate: string;
  bio: string;
  spokenLanguage: string[];
  linkedInURL: string;
  instagramURL: string;
  twitterURL: string;
  githubURL: string;
  behanceURL: string;
}

interface User {
  firstName: string;
  lastName: string;
}
interface userDataProps {
  userProfile: UserProfile;
  user: User;
}

interface ProvinceType {
  id: number;
  provinceAndTerritory: string;
  abbreviation: string;
}

interface InfoProps {
  myProfile: boolean,
  userProfile: boolean,
  userData: userDataProps;
}

const Info: FC<InfoProps> = ({ myProfile, userProfile, userData }) => {
  const dispatch = useAppDispatch();
  const [provinces, setProvinces] = useState<ProvinceType | undefined>(undefined);
  const { data: provincesQuery } = useGetProvincesQuery({});

  useEffect(() => {
    if (!provincesQuery) return;
    setProvinces(provincesQuery.find((p: ProvinceType) => p.id === userData.userProfile.provinceId));
  }, [provincesQuery, userData]);

  const socialsList: iconProps[] = [
    { href: userData.userProfile.behanceURL, type: 'be' },
    { href: userData.userProfile.githubURL, type: 'git' },
    { href: userData.userProfile.twitterURL, type: 'tw' },
    { href: userData.userProfile.linkedInURL, type: 'in' },
    { href: userData.userProfile.instagramURL, type: 'inst' },
  ];
  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.FILL_USER_PROFILE, closeOnOverlayClick: false }));
  };
  const messageUser = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.WRITE_MESSAGE }));
  };
  const connectUser = () => console.log('connect');

  // Create a new Date object for birthdate. If birthdate does not exist, default to the current date.
  const birthDateObject = userData.userProfile.birthDate
    ? new Date(userData.userProfile.birthDate)
    : new Date();

  return (
    <div className={styles.personal}>
      {myProfile && <IconSVG name={'editIcon'} className={styles.editIcon} onClick={openModal} />}
      <div className={styles.mainInfo}>
        <Heading tagType="h4">{`${userData.user.firstName} ${userData.user.lastName}`}</Heading>
        <span className={styles.experience}>{userData.userProfile.fieldOfExpertise}</span>
        <span className={styles.experience}>{userData.userProfile.experience}</span>
        {userProfile && (
          <div className={styles.connectionBtns}>
            <Button label={'Message'} size={'small'} color={'orangeLight'} onClick={messageUser}></Button>
            <Button label={'Connect'} size={'small'} color={'orange'} onClick={connectUser}></Button>
          </div>
        )}
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.infoRow}>
          <span className={styles.title}>Location :</span>
          <span className={styles.detail}>{`${provinces?.provinceAndTerritory}, ${provinces?.abbreviation}`}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Birthday :</span>
          <div className={styles.detail}>
            {format(
              new Date(birthDateObject.getTime() + birthDateObject.getTimezoneOffset() * 60000),
              'MMMM d, yyyy'
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Bio&nbsp;:</span>
          <p className={styles.detail}>{userData.userProfile.bio}</p>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Spoken language :</span>
          <div className={styles.languageDetail}>
            {userData.userProfile.spokenLanguage && userData.userProfile.spokenLanguage.length > 0 ? (
              userData.userProfile.spokenLanguage.map((item) => {
                return (
                  <span key={item} className={styles.languageItem}>
                    {item}
                  </span>
                );
              })
            ) : (
              <span>No languages specified</span>
            )}
          </div>
        </div>
        <div className={styles.socials}>
          {socialsList &&
            socialsList.map((item) => {
              if (!item.href) return;
              return <Icon key={item.type} href={item.href} type={item.type} className={styles.icons} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Info;
