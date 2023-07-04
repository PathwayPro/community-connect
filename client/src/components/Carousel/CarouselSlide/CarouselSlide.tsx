import { FC } from 'react';

import styles from './CarouselSlide.module.scss';

interface CarouselSlideProps {
  slidesList: string[];
}

const CarouselSlide: FC<CarouselSlideProps> = ({ slidesList }) => (
  <div className={styles.container}>
    {slidesList.map((image) => (
      <div key={Math.random()} className={styles.slide}>
        <img src={image} />
      </div>
    ))}
  </div>
);

export default CarouselSlide;
