import { FC } from 'react';

import Section from '../../../common/components/Section/Section';
import Carousel from '../../../components/Carousel/Carousel';
import CarouselSlide from '../../../components/Carousel/CarouselSlide/CarouselSlide';

import styles from './Partners.module.scss';

import partner1Image from '../../../images/Partners/partner-1.png';
import partner2Image from '../../../images/Partners/partner-2.png';
import partner3Image from '../../../images/Partners/partner-3.png';

const partnersList = {
  slide1: [partner1Image, partner2Image, partner3Image],
  slide2: [partner1Image, partner2Image, partner3Image],
  slide3: [partner1Image, partner2Image, partner3Image],
};

const Partners: FC = () => {
  return (
    <Section>
      <h2 className={styles.heading}>Our partners</h2>
      <Carousel>
        <CarouselSlide slidesList={partnersList.slide1} />
        <CarouselSlide slidesList={partnersList.slide2} />
        <CarouselSlide slidesList={partnersList.slide3} />
      </Carousel>
    </Section>
  );
};

export default Partners;
