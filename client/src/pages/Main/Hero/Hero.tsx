import { MouseEvent, FC } from 'react';

import Button from '../../../common/components/Button/Button';
import Section from '../../../common/components/Section/Section';

import styles from './Hero.module.scss';

import sectionImg from '../../../images/Main/hero.png';

const Hero: FC = () => {
  const onRegisterClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Section>
      <div className={styles.inner}>
        <div className={styles.part}>
          <h1 className={styles.heading}>Welcome to CommunityConnect</h1>
          <p className={styles.subheading}>Empowering Immigrants Through Connection</p>
          <p className={styles.text}>
            Step into a vibrant and inclusive digital space designed exclusively for immigrants. CommunityConnect is
            your gateway to empowerment and connection within the immigrant community.
          </p>
          <Button label="Get Started" color="orange" onClick={onRegisterClick} className={styles.navButton} />
        </div>
        <div className={styles.part}>
          <img className={styles.image} src={sectionImg} alt="group of people" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
