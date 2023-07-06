import { FC } from 'react';
// import  SwiperOptions  from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/modules/navigation/navigation.scss';
// import 'swiper/modules/pagination/pagination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import Heading from '../../../common/components/Heading/Heading';
import SectionMain from '../../../components/SectionMain/SectionMain';

import styles from './Partners.module.scss';

// import partner9Image from '../../../images/Partners/AppHarvest.jpg';
// import partner7Image from '../../../images/Partners/BettyLabs.jpg';
// import partner1Image from '../../../images/Partners/Blind.jpg';
// import partner10Image from '../../../images/Partners/Cohesity.jpg';
// import partner5Image from '../../../images/Partners/Coinbase.jpg';
// import partner2Image from '../../../images/Partners/Helbiz.jpg';
// import partner6Image from '../../../images/Partners/MasterClass.jpg';
// import partner8Image from '../../../images/Partners/Replica.jpg';
// import partner4Image from '../../../images/Partners/Sonos.jpg';
// import partner3Image from '../../../images/Partners/Upstart.jpg';

const Partners: FC = () => {

  return (
    <SectionMain>
      <Heading tagType="h2" className={styles.heading}>
         Our partners
      </Heading>
      <Swiper navigation={true} modules={[Navigation, Pagination]}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </SectionMain>
  );
};

export default Partners;
