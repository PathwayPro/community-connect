import { format } from 'date-fns';
import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { showModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import Heading from '../../../common/components/Heading/Heading';
import Icon, { iconProps } from '../../../common/components/Icon/Icon';
import IconSVG from '../../../common/components/IconSVG/IconSVG';

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
  bio: 'Ut ullam numquam voluptas amet dolores incidunt. Dolorum temporibus exercitationem. \
  Perspiciatis saepe velit eos illo atque ut consequatur. At dignissimos esse doloribus dicta ut. \
  Reiciendis at quae a sed et laboriosam commodi cupiditate. Odit rerum illo assumenda nulla dolores \
  harum eius beatae perspiciatis.',
  language: ['English', 'Farsi'],
  socialsList: [
    { href: '/', type: 'be' },
    { href: '/', type: 'git' },
    { href: '/', type: 'tw' },
    { href: '/', type: 'in' },
    { href: '/', type: 'inst' },
  ],
};

const Info: FC = () => {
  const dispatch = useAppDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.FILL_USER_PROFILE, closeOnOverlayClick: false }));
  };

  return (
    <div className={styles.personal}>
      <IconSVG name={'editIcon'} className={styles.editIcon} onClick={openModal} />
      <div className={styles.mainInfo}>
        <Heading tagType="h4">{userData.name}</Heading>
        <span className={styles.experience}>{userData.background}</span>
        <span className={styles.experience}>{userData.experience}</span>
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.infoRow}>
          <span className={styles.title}>Location :</span>
          <span className={styles.detail}>{userData.location}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Birthday :</span>
          <span className={styles.detail}>
            {format(
              new Date(userData.birthday.getTime() + userData.birthday.getTimezoneOffset() * 60000),
              'MMMM d, yyyy'
            )}
          </span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Bio&nbsp;:</span>
          <p className={styles.detail}>{userData.bio}</p>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.title}>Spoken language :</span>
          <div className={styles.languageDetail}>
            {userData.language.map((item) => {
              return (
                <span key={item} className={styles.languageItem}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.socials}>
          {userData.socialsList &&
            userData.socialsList.map((item) => (
              <Icon key={item.type} href={item.href} type={item.type} className={styles.icons} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
