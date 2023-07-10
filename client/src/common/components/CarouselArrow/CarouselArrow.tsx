import React, { MouseEventHandler } from "react";

import styles from './CarouselArrow.module.scss';

interface CarouselArrow {
  className?: string;
  onClick?: MouseEventHandler<EventTarget>;
}

const CarouselArrow: React.FC<CarouselArrow> = ({ className, onClick  }) => {
  const arrowClass = className ? (className.includes('slick-next') ? styles.next : styles.prev) : '';

  return (
    <button
      className={`${styles.arrow} ${arrowClass}`}
      onClick={onClick}
    />
  );
};

export default CarouselArrow;