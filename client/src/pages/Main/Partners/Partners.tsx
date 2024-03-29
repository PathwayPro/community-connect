import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import CarouselArrow from '../../../common/components/CarouselArrow/CarouselArrow';
import stylesCarouselDots from '../../../common/components/CarouselDots/CarouselDots.module.scss';
import Heading from '../../../common/components/Heading/Heading';
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

const partnersImages = [
  partner1Image,
  partner2Image,
  partner3Image,
  partner4Image,
  partner5Image,
  partner6Image,
  partner7Image,
  partner8Image,
  partner9Image,
  partner10Image,
];

const Partners: FC = () => {
  const settings = {
    className: `${styles.slider}`,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    dotsClass: `${stylesCarouselDots.carouselDots}`,
    nextArrow: <CarouselArrow />,
    prevArrow: <CarouselArrow />,
  };
  return (
    <SectionMain>
      <Heading tagType="h2" className={styles.heading}>
        Our partners
      </Heading>
      <Slider {...settings}>
        {partnersImages.map((image, index) => (
          <div className={styles.slide} key={Math.random()}>
            <img src={image} alt={`partner-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </SectionMain>
  );
};

export default Partners;
