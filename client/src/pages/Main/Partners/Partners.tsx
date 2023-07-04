import { FC } from 'react';

import Heading from '../../../common/components/Heading/Heading';
import Carousel from '../../../components/Carousel/Carousel';
import CarouselSlide from '../../../components/Carousel/CarouselSlide/CarouselSlide';
import SectionMain from '../../../components/SectionMain/SectionMain';

import styles from './Partners.module.scss';

import partner9Image from '../../../images/Partners/AppHarvest.jpg';
import partner7Image from '../../../images/Partners/BettyLabs.jpg';
import partner1Image from '../../../images/Partners/Blind.jpg';
import partner10Image from '../../../images/Partners/Cohesity.jpg';
import partner5Image from '../../../images/Partners/Coinbase.jpg';
import partner2Image from '../../../images/Partners/Helbiz.jpg';
import partner6Image from '../../../images/Partners/MasterClass.jpg';
import partner8Image from '../../../images/Partners/Replica.jpg';
import partner4Image from '../../../images/Partners/Sonos.jpg';
import partner3Image from '../../../images/Partners/Upstart.jpg';

const partnersList = {
  slide1: [partner1Image, partner2Image, partner3Image, partner4Image],
  slide2: [partner4Image, partner5Image, partner6Image, partner7Image],
  slide3: [partner7Image, partner8Image, partner9Image, partner10Image],
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
