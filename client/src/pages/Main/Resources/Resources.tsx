import { FC } from 'react';

import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';
import Heading from '../../../common/components/Heading/Heading';
import SectionMain from '../../../components/SectionMain/SectionMain';

import styles from './Resources.module.scss';

import sectionImg from '../../../images/Main/education.png';

const Resources: FC = () => {
  return (
    <SectionMain>
      <div className={styles.inner}>
        <div className={styles.part}>
          <img src={sectionImg} alt="image of human and laptop" />
        </div>
        <div className={styles.part}>
          <Heading tagType="h2" className={styles.heading}>
            Resource Hub
          </Heading>
          <p className={styles.text}>
            Access to quality education is essential for personal and professional growth. The Resource Hub offers a
            curated collection of educational resources, including scholarship opportunities, online courses,
            educational grants, and mentoring programs. Users can expand their knowledge, acquire new skills, and pursue
            educational advancement opportunities.
          </p>
          <ButtonLink
            to="/events"
            label="Unlock Your Potential Now"
            color="orange"
            size="small"
            className={styles.linkResources}
          />
        </div>
      </div>
    </SectionMain>
  );
};

export default Resources;
