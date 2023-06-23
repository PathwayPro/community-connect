import React, { FC } from 'react';

import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';
import Section from '../../../common/components/Section/Section';

import styles from './Education.module.scss';

import sectionImg from '../../../images/Main/education.png';

const Education: FC = () => {
  return (
    <Section>
      <div className={styles.inner}>
        <div className={styles.part}>
          <img className={styles.image} src={sectionImg} alt="image of human and laptop" />
        </div>
        <div className={styles.part}>
          <h2 className={styles.heading}>Resource Hub</h2>
          <p className={styles.text}>
            Access to quality education is essential for personal and professional growth. The Resource Hub offers a
            curated collection of educational resources, including scholarship opportunities, online courses,
            educational grants, and mentoring programs. Users can expand their knowledge, acquire new skills, and pursue
            educational advancement opportunities.
          </p>
          <ButtonLink to="/events" label="Unlock Your Potential Now" color="orange" className={styles.link} />
        </div>
      </div>
    </Section>
  );
};

export default Education;
