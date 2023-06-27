import classNames from 'classnames';
import React from 'react';

import styles from './Carousel.module.scss';

interface CarouselProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = React.useRef<HTMLDivElement>(null);

  const activeSlide = children.map((slide, index) => (
    <div className={classNames(styles.slide, currentSlide === index && styles.active)} key={`slide-${index + 1}`}>
      {slide}
    </div>
  ));

  React.useEffect(() => {
    if (slides.current && slides) {
      slides.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [slides, currentSlide]);

  return (
    <div>
      <div className={styles.wrapper}>
        <div ref={slides} className={styles.slides}>
          {activeSlide}
        </div>
        <div className={styles.buttonsWrapper}>
          <button
            className={classNames(styles.button, styles.left)}
            onClick={() => {
              setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
            }}
          ></button>
          <div className={styles.dots}>
            {children.map((_, index) => (
              <div
                key={Math.random()}
                className={classNames(styles.dot, currentSlide === index && styles.active)}
              ></div>
            ))}
          </div>
          <button
            className={classNames(styles.button, styles.right)}
            onClick={() => {
              setCurrentSlide((currentSlide + 1) % activeSlide.length);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
