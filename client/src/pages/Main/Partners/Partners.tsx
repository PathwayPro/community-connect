import { FC } from 'react';

import Heading from '../../../common/components/Heading/Heading';
import Carousel from '../../../components/Carousel/Carousel';
import CarouselSlide from '../../../components/Carousel/CarouselSlide/CarouselSlide';
import SectionMain from '../../../components/SectionMain/SectionMain';

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
    <SectionMain>
      <Heading tagType="h2" className={styles.heading}>
        Our partners
      </Heading>
      <Carousel>
        <CarouselSlide slidesList={partnersList.slide1} />
        <CarouselSlide slidesList={partnersList.slide2} />
        <CarouselSlide slidesList={partnersList.slide3} />
      </Carousel>
    </SectionMain>
  );
};

export default Partners;
