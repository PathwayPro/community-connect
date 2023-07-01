import { FC } from 'react';

import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';
import Heading from '../../../common/components/Heading/Heading';
import SectionMain from '../../../components/SectionMain/SectionMain';

import styles from './Mentorship.module.scss';

import sectionImg from '../../../images/Main/mentorship.png';

const Mentorship: FC = () => {
  return (
    <SectionMain>
      <div className={styles.inner}>
        <div className={styles.part}>
          <Heading tagType="h2" className={styles.heading}>
            Mentorship
          </Heading>
          <p className={styles.text}>
            Connect with experienced mentors who understand the challenges and opportunities of the immigrant
            experience. Get personalized guidance, support, and advice to help you thrive in your new environment.
          </p>
          <ButtonLink
            to="/mentorship"
            label="Book a session!"
            color="orange"
            size="small"
            className={styles.buttonMentorship}
          />
        </div>
        <div className={styles.part}>
          <img src={sectionImg} alt="man and a laptop" />
        </div>
      </div>
    </SectionMain>
  );
};

export default Mentorship;
