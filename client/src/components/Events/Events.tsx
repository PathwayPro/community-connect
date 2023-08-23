import { FC, useEffect, useRef } from 'react';

import styles from './Events.module.scss';

interface EventsProps {
  maxSize: number;
  onSizeChange: (size: number) => void;
}

const Events: FC<EventsProps> = ( {
    maxSize,
    onSizeChange,
}) => {

  const eventsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(eventsRef.current) {
      const events = eventsRef.current;
      const eventsHeight = events.clientHeight;
      onSizeChange(eventsHeight);
    }
  }, [onSizeChange]);

  const divStyles = {
    height: maxSize ? `${maxSize}px` : 'none',
  };

  return (
    <div className={styles.events} ref={eventsRef}  style={divStyles}>
      Upcoming Events
    </div>
  );
};

export default Events;
