import { MouseEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../common/components/Avatar/Avatar';
import Button from '../../../common/components/Button/Button';
import { truncateString } from '../../../common/utils/truncateUtils';

import styles from './SuggestedConnection.module.scss';

export interface connectionProps {
  id: number;
  name: string;
  position: string;
}

const SuggestedConnection: FC<connectionProps> = ({ id, name, position }) => {
  const [isConnected, setIsConnected] = useState(false);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsConnected((prevIsConnected) => !prevIsConnected);
  };

  return (
    <div className={styles.connection}>
      <Avatar size="small" className={styles.image} />
      <div>
        <div className={styles.info}>
          <Link to={`/profile/user/${id}`} className={styles.name}>
            {truncateString(name, 20)}
          </Link>
          <span className={styles.position}>{position}</span>
        </div>
        <Button
          label={isConnected ? 'Disconnect' : 'Connect'}
          size="small"
          color="orange"
          onClick={onClick}
          isDisabled={isConnected ? true : false}
        />
      </div>
    </div>
  );
};

export default SuggestedConnection;
