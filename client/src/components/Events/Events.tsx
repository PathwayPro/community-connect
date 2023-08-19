import { FC } from 'react';

import SideBlock from '../../common/components/SideBlock/SideBlock';

import styles from './Events.module.scss';

const Events: FC = () => {
  return (
    <SideBlock title="Upcoming Events" paddingWidth="normal">
      <div className={styles.events}></div>
    </SideBlock>
  );
};

export default Events;
