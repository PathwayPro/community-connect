import { MouseEvent, FC } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../common/components/Avatar/Avatar';
import Button from '../../../common/components/Button/Button';

import styles from './SuggestedConnection.module.scss';

export interface connectionProps {
  id: number;
  name: string;
  position: string;
}

const SuggestedConnection: FC<connectionProps> = ({ id, name, position }) => {
  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.connection}>
      <Avatar size="small" className={styles.image} />
      <div>
        <div className={styles.info}>
          <Link to={`/profile/user/${id}`} className={styles.name}>
            {name}
          </Link>
          <span className={styles.position}>{position}</span>
        </div>
        <Button label="Connect" size="small" color="orange" onClick={onClick}></Button>
      </div>
    </div>
  );
};

export default SuggestedConnection;
