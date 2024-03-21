import { FC, useEffect, useRef } from 'react';

import SideBlock from '../../common/components/SideBlock/SideBlock';

import Event from './Event/Event';
import UserEvents from './UserEvents/UserEvents';

import styles from './Events.module.scss';

interface EventProps {
  id: number;
  name: string;
  company: string;
  date: Date;
  time: string;
}

interface EventsProps {
  itemsToShow: number;
}

const eventList: EventProps[] = [
  { id: 1, name: 'Digital Pathways', company: 'Immigrant Techies', date: new Date('2023-08-09'), time: '6:30 PM EST' },
  {
    id: 2,
    name: 'Virtual Connections',
    company: 'Immigrant Techies',
    date: new Date('2023-08-10'),
    time: '6:30 PM EST',
  },
  {
    id: 3,
    name: 'Cultivating Dreams',
    company: 'Immigrant Techies',
    date: new Date('2023-08-11'),
    time: '6:30 PM EST',
  },
  { id: 4, name: 'Digital Pathways', company: 'Immigrant Techies', date: new Date('2023-08-12'), time: '6:30 PM EST' },
  { id: 5, name: 'Digital Pathways', company: 'Immigrant Techies', date: new Date('2023-08-13'), time: '6:30 PM EST' },
];

const Events: FC<EventsProps> = ({ itemsToShow }) => {
  return (
    <>
      <SideBlock title="Your Events" paddingWidth="normal" linkTo="/events">
        <UserEvents haveEvents={2} />
        <div className={styles.title}>Upcoming Events</div>
        <div className={styles.events}>
          {eventList &&
            eventList
              .slice(0, itemsToShow)
              .map((event) => (
                <Event key={event.id} name={event.name} company={event.company} date={event.date} time={event.time} />
              ))}
        </div>
      </SideBlock>
    </>
  );
};

export default Events;
