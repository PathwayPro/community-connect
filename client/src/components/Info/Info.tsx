/* eslint-disable max-len */
import { format } from 'date-fns';
import { FC } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Icon, { iconProps } from '../../common/components/Icon/Icon';
import IconSVG from '../../common/components/IconSVG/IconSVG';

import styles from './Info.module.scss';

interface userDataProps {
  name: string;
  background: string;
  experience: string;
  location: string;
  birthday: Date;
  bio: string;
  language: string[];
  socialsList: iconProps[];
}

const userData: userDataProps = {
  name: 'Niloofar Karyar',
  background: 'UI/UX Designer',
  experience: '7 Years Experience',
  location: 'Alberta',
  birthday: new Date('1990-01-01'),
  bio: 'Ut ullam numquam voluptas amet dolores incidunt. Dolorum temporibus exercitationem. Perspiciatis saepe velit eos illo atque ut consequatur. At dignissimos esse doloribus dicta ut. Reiciendis at quae a sed et laboriosam commodi cupiditate. Odit rerum illo assumenda nulla dolores harum eius beatae perspiciatis.',
  language: ['English', 'Farsi'],
  socialsList: [
    { href: '/', type: 'be', className: styles.roundIcons },
    { href: '/', type: 'git', className: styles.squareIcons },
    { href: '/', type: 'tw', className: styles.roundIcons },
    { href: '/', type: 'in', className: styles.roundIcons },
    // { href: '/', type: 'inst', className: styles.roundIcons },
  ],
};

interface InfoProps {
  myProfile: boolean;
  userProfile: boolean;
}

const Info: FC<InfoProps> = ({ myProfile, userProfile }) => {
  const dispatch = useAppDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.FILL_USER_PROFILE }));
  };

  const messageUser = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.WRITE_MESSAGE }));
  };

  const connectUser = () => console.log('connect');

  return (
    <div className={styles.personal}>
      {myProfile && <IconSVG name={'editIcon'} className={styles.editIcon} onClick={openModal} />}
      <div className={styles.infoButtons}>
        <div className={styles.mainInfo}>
          <div className={styles.name}>{userData.name}</div>
          <div className={styles.experience}>{userData.background}</div>
          <div className={styles.experience}>{userData.experience}</div>
        </div>
        {userProfile && (
          <div className={styles.connectionBtns}>
            <Button label={'Message'} size={'small'} color={'orangeLight'} onClick={messageUser}></Button>
            <Button label={'Connect'} size={'small'} color={'orange'} onClick={connectUser}></Button>
          </div>
        )}
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.infoRow}>
          <div className={styles.title}>Location :</div>
          <div className={styles.detail}>{userData.location}</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.title}>Birthday :</div>
          <div className={styles.detail}>
            {format(
              new Date(userData.birthday.getTime() + userData.birthday.getTimezoneOffset() * 60000),
              'MMMM d, yyyy'
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.title}>Bio&nbsp;:</div>
          <div className={styles.detail}>{userData.bio}</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.title}>Spoken language :</div>
          <div className={styles.languageDetail}>
            {userData.language.map((item, index) => {
              return (
                <div key={index} className={styles.languageItem}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.socials}>
          {userData.socialsList.map((item) => (
            <Icon key={item.type} href={item.href} type={item.type} className={item.className} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
