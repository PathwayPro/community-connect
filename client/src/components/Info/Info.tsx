import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { useGetProvincesQuery } from '../../app/slices/apiSlice';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Icon, { iconProps } from '../../common/components/Icon/Icon';
import IconSVG from '../../common/components/IconSVG/Button/IconSVG';

import styles from './Info.module.scss';

interface InfoProps {
  myProfile: boolean;
  userProfile: boolean;
}

interface Province {
  id: number;
  provinceAndTerritory: string;
}

const Info: FC<InfoProps> = ({ myProfile, userProfile }) => {
  const userData = useSelector((state: any) => state.userProfile);
  const { data: provinces } = useGetProvincesQuery({});
  const [provinceName, setProvinceName] = useState<string | null>(null);
  const birthDate = new Date(userData.birthDate);
  const dispatch = useAppDispatch();

  const socialsList: iconProps[] = [
    { href: userData.behanceURL, type: 'be' },
    { href: userData.githubURL, type: 'git' },
    { href: userData.twitterURL, type: 'tw' },
    { href: userData.linkedInURL, type: 'in' },
    { href: userData.instagramURL, type: 'inst' },
  ];

  useEffect(() => {
    if (provinces) {
      const foundProvince = provinces.find((province: Province) => province.id === userData.provinceId);
      if (foundProvince) {
        setProvinceName(foundProvince.provinceAndTerritory);
      }
    }
  }, [provinces, userData.provinceId]);

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.FILL_USER_PROFILE, closeOnOverlayClick: false }));
  };
  const messageUser = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.WRITE_MESSAGE }));
  };
  const connectUser = () => console.log('connect');

  return (
    <div className={styles.personal}>
      {myProfile && <IconSVG name={'editIcon'} className={styles.editIcon} onClick={openModal} />}
      <div className={styles.mainInfo}>
        <Heading tagType="h4">{`${userData.firstName} ${userData.lastName}`}</Heading>
        <span className={styles.experience}>{userData.fieldOfExpertise}</span>
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
          <span className={styles.detail}>{provinceName}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Birthday :</span>
          <div className={styles.detail}>
            {format(new Date(birthDate.getTime() + birthDate.getTimezoneOffset() * 60000), 'MMMM d, yyyy')}
          </div>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Bio&nbsp;:</span>
          <p className={styles.detail}>{userData.bio}</p>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Spoken language :</span>
          <div className={styles.languageDetail}>
            {userData.spokenLanguage &&
              userData.spokenLanguage.map((item: string) => {
                return (
                  <span key={item} className={styles.languageItem}>
                    {item}
                  </span>
                );
              })}
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
