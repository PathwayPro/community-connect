import { FC } from 'react';

import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';
import Section from '../../../common/components/Section/Section';

import styles from './Mentorship.module.scss';

import sectionImg from '../../../images/Main/mentorship.png';

const Mentorship: FC = () => {
  return (
    <Section>
      <div className={styles.inner}>
        <div className={styles.part}>
          <h2 className={styles.heading}>Mentorship</h2>
          <p className={styles.text}>
            Connect with experienced mentors who understand the challenges and opportunities of the immigrant
            experience. Get personalized guidance, support, and advice to help you thrive in your new environment.
          </p>
          <ButtonLink
            to="/mentorship"
            label="Book a session!"
            color="orange"
            size="small"
            className={styles.navButton}
          />
        </div>
        <div className={styles.part}>
          <img className={styles.image} src={sectionImg} alt="man and a laptop" />
        </div>
      </div>
    </Section>
  );
};

export default Mentorship;
