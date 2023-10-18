import { FC } from 'react';

import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';
import formatDate from '../../../common/utils/formatDateUtils';

import styles from './Event.module.scss';

export interface EventProps {
  name: string;
  company: string;
  date: Date;
  time: string;
}

const Event: FC<EventProps> = ({ name, company, date, time }) => {
  return (
    <div className={styles.event}>
      <span>{name}</span>
      <div className={styles.company}>
        <span>From </span>
        <span>{company}</span>
      </div>
      <div className={styles.dateBlock}>
        <div className={styles.date}>{formatDate(date)}</div>
        <div className={styles.date}>{time}</div>
      </div>
      <ButtonLink label="View Event" size={'small'} color={'orange'} to="/"></ButtonLink>
    </div>
  );
};

export default Event;
