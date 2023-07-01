import { FC } from 'react';

import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';
import Heading from '../../../common/components/Heading/Heading';
import SectionMain from '../../../components/SectionMain/SectionMain';

import styles from './Events.module.scss';

import sectionImg from '../../../images/Main/events.png';

const Events: FC = () => {
  return (
    <SectionMain>
      <div className={styles.inner}>
        <div className={styles.part}>
          <img src={sectionImg} alt="peple behind a calendar" />
        </div>
        <div className={styles.part}>
          <Heading tagType="h2" className={styles.heading}>
            Events and Activities
          </Heading>
          <p className={styles.text}>
            Discover a vibrant calendar of events on CommunityConnect, the innovative web app for immigrants. Join us
            for cultural celebrations, workshops, seminars, and community gatherings to embrace your heritage and forge
            connections with like-minded individuals. Together, let&apos;s build a brighter future!
          </p>
          <ButtonLink
            to="/events"
            label="Explore Upcoming Events"
            color="orange"
            size="small"
            className={styles.linkEvent}
          />
        </div>
      </div>
    </SectionMain>
  );
};

export default Events;
