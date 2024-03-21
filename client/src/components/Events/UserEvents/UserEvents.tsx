import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';

import styles from './UserEvents.module.scss';

type UserEventsProps = {
  haveEvents: number;
};

const UserEvents: React.FC<UserEventsProps> = ({ haveEvents }) => {
  return (
    // <div className={styles.events}>
    <>
      {haveEvents ? (
        <div>
        <div className={styles.title}>Your events</div>
        <div className={styles.event}>
          <div>
            You are registered for &nbsp;
            {haveEvents}
            &nbsp; events.
          </div>
          <ButtonLink label="Go to Calendar" size={'small'} color={'orange'} />
        </div>
        </div>
      ) : (
        <div className={styles.event}>
          <div>You have not registered for any events yet.</div>
          <ButtonLink label="Explore events" size={'small'} color={'orange'} to="/" />
        </div>
      )}
    </>
  );
};

export default UserEvents;
