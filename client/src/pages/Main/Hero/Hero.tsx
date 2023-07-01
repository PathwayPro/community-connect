import { MouseEvent, FC } from 'react';

import Button from '../../../common/components/Button/Button';
import Heading from '../../../common/components/Heading/Heading';
import SectionMain from '../../../components/SectionMain/SectionMain';

import styles from './Hero.module.scss';

import sectionImg from '../../../images/Main/hero.png';

const Hero: FC = () => {
  const onRegisterClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <SectionMain>
      <div className={styles.inner}>
        <div className={styles.part}>
          <Heading tagType="h1" className={styles.heading}>
            Welcome to CommunityConnect
          </Heading>
          <Heading tagType="h6" className={styles.subheading}>
            Empowering Immigrants Through Connection
          </Heading>
          <p className={styles.text}>
            Step into a vibrant and inclusive digital space designed exclusively for immigrants. CommunityConnect is
            your gateway to empowerment and connection within the immigrant community.
          </p>
          <Button label="Get Started" color="orange" onClick={onRegisterClick} className={styles.buttonHero} />
        </div>
        <div className={styles.part}>
          <img src={sectionImg} alt="group of people" />
        </div>
      </div>
    </SectionMain>
  );
};

export default Hero;
