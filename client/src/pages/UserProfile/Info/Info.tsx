import { format } from 'date-fns';
import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { showModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
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
        <div className={styles.name}>{userData.name}</div>
        <div className={styles.experience}>{userData.background}</div>
        <div className={styles.experience}>{userData.experience}</div>
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
            {userData.language.map((item) => {
              return (
                <div key={item} className={styles.languageItem}>
                  {item}
                </div>
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
