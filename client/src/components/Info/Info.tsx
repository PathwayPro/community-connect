import { format } from 'date-fns';
import { FC } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import Icon, { iconProps } from '../../common/components/Icon/Icon';
import IconSVG from '../../common/components/IconSVG/Button/IconSVG';

import styles from './Info.module.scss';

interface userDataProps {
  firstName: string;
  lastName: string;
  fieldOfExpertise: string;
  experience: string;
  provinceId: number;
  birthDate: Date;
  bio: string;
  spokenLanguage: string[];
  linkedInURL: string;
  instagramURL: string;
  twitterURL: string;
  githubURL: string;
  behanceURL: string;
}

const userData: userDataProps = {
  firstName: 'Niloofar',
  lastName: 'Karyar',
  fieldOfExpertise: 'UI/UX Designer',
  experience: '7 Years Experience',
  provinceId: 1,
  birthDate: new Date('1990-01-01'),
  bio: 'Ut ullam numquam voluptas amet dolores incidunt. Dolorum temporibus exercitationem. Perspiciatis saepe velit eos illo atque ut consequatur. At dignissimos esse doloribus dicta ut. Reiciendis at quae a sed et laboriosam commodi cupiditate. Odit rerum illo assumenda nulla dolores harum eius beatae perspiciatis.',
  spokenLanguage: ['English', 'Farsi'],
  linkedInURL: '/',
  instagramURL: '',
  twitterURL: '/',
  githubURL: '/',
  behanceURL: '/',
};

// TODO: get data from BE
// TODO: get province name from BE
const province = userData.provinceId == 1 ? 'Alberta' : 'British Columbia';

const socialsList: iconProps[] = [
  { href: userData.behanceURL, type: 'be' },
  { href: userData.githubURL, type: 'git' },
  { href: userData.twitterURL, type: 'tw' },
  { href: userData.linkedInURL, type: 'in' },
  { href: userData.instagramURL, type: 'inst' },
];

interface InfoProps {
  myProfile: boolean;
  userProfile: boolean;
}

const Info: FC<InfoProps> = ({ myProfile, userProfile }) => {
  const dispatch = useAppDispatch();

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
        <span className={styles.experience}>{userData.experience}</span>
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
          <span className={styles.detail}>{province}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Birthday :</span>
          <div className={styles.detail}>
            {format(
              new Date(userData.birthDate.getTime() + userData.birthDate.getTimezoneOffset() * 60000),
              'MMMM d, yyyy'
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Bio&nbsp;:</span>
          <p className={styles.detail}>{userData.bio}</p>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Spoken language :</span>
          <div className={styles.languageDetail}>
            {userData.spokenLanguage.map((item) => {
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
