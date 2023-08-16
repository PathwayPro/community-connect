import { FC } from 'react';

import Heading from '../../../common/components/Heading/Heading';

import styles from './MentorshipBody.module.scss';

import mentorshipImage from '../../../images/Mentorship/mentorship.png';

interface MentorshipBodyProps {
  text: string;
}

const MentorshipBody: FC<MentorshipBodyProps> = ({ text }) => {
  return (
    <>
      <div className={styles.titleBlock}>
        <Heading tagType="h2" className={styles.title}>
          Welcome to Mentorship Program!
        </Heading>
      </div>
      <div className={styles.block}>
        <div className={styles.left}>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.right}>
          <img src={mentorshipImage} alt="mentorship image" />
        </div>
      </div>
    </>
  );
};

export default MentorshipBody;
