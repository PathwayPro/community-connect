/* eslint-disable max-len */
import { FC } from 'react';

import Icon, { iconProps } from '../../../common/components/Icon/Icon';
import VectorEditBtn from '../../../common/components/Vector/VectorEditBtn';

import styles from './Info.module.scss';

const socialsList: iconProps[] = [
    { href: '/', type: 'be', className: styles.roundIcons },
    { href: 'https://github.com/Hoorasadat', type: 'git', className: styles.squareIcons },
    { href: '/', type: 'tw', className: styles.roundIcons },
    { href: '/', type: 'in', className: styles.roundIcons },
    { href: '/', type: 'inst', className: styles.roundIcons },
];

const Info: FC = () => {
    const openModal = () => console.log('click');

  return (
    <div className={styles.personal}>
        <VectorEditBtn
          position={'top'}
          onClick={openModal}
        />
        <div className={styles.mainInfo}>
            <div className={styles.name}>Niloofar Karyar</div>
            <div className={styles.experience}>UI/UX Designer</div>
            <div className={styles.experience}>7 Years Experience</div>
        </div>
        <div className={styles.otherInfo}>
            <div className={styles.infoRow}>
                <div className={styles.title}>Location :</div>
                <div className={styles.detail}>Alberta</div>
            </div>
            <div className={styles.infoRow}>
                <div className={styles.title}>Birthday :</div>
                <div className={styles.detail}>Jun 16</div>
            </div>
            <div className={styles.infoRow}>
                <div className={styles.title}>Bio&nbsp;:</div>
                <div className={styles.detail}>
                    Ut ullam numquam voluptas amet dolores incidunt. Dolorum temporibus exercitationem. Perspiciatis saepe velit eos illo atque ut consequatur. At dignissimos esse doloribus dicta ut. Reiciendis at quae a sed et laboriosam commodi cupiditate. Odit rerum illo assumenda nulla dolores harum eius beatae perspiciatis.
                </div>
            </div>
            <div className={styles.infoRow}>
                <div className={styles.title}>Spoken language :</div>
                <div className={styles.languageDetail}>
                    <div className={styles.languageItem}>English</div>
                    <div className={styles.languageItem}>Farsi</div>
                </div>
            </div>
            <div className={styles.socials}>
                {socialsList.map((item) => (
                    <Icon key={item.type} href={item.href} type={item.type} className={item.className} />
                ))}
          </div>

        </div>
    </div>
  );
};

export default Info;
