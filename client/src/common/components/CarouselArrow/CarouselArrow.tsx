import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

import styles from './CarouselArrow.module.scss';

interface CarouselArrow {
  className?: string;
  onClick?: MouseEventHandler<EventTarget>;
}

const CarouselArrow: React.FC<CarouselArrow> = ({ className, onClick }) => {
  return (
    <button
      className={classNames(styles.arrow, className && className.includes('slick-next') ? styles.next : styles.prev)}
      onClick={onClick}
    />
  );
};

export default CarouselArrow;
