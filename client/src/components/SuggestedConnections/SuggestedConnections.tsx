import { FC } from 'react';

import ButtonLink from '../../common/components/ButtonLink/ButtonLink';
import SideBlock from '../../common/components/SideBlock/SideBlock';

import SuggestedConnection from './SuggestedConnection/SuggestedConnection';

import styles from './SuggestedConnections.module.scss';

interface suggestedConnectionProps {
  id: number;
  name: string;
  position: string;
}

const suggestedConnectionList: suggestedConnectionProps[] = [
  { id: 1, name: 'Clark Mante', position: 'Technician' },
  { id: 2, name: 'Adam Kenedi', position: 'Developer' },
  { id: 3, name: 'Theneshkumar Sathiyaseelan', position: 'Designer' },
];

const SuggestedConnections: FC = () => {
  return (
    <SideBlock title="Suggested Connections" btnTitle='View all'>
      <div className={styles.connections}>
        {suggestedConnectionList &&
          suggestedConnectionList
            .slice(0, 3)
            .map((connection) => (
              <SuggestedConnection
                key={connection.id}
                id={connection.id}
                name={connection.name}
                position={connection.position}
              />
            ))}
      </div>
      <div className={styles.buttonWrapper}>
        <ButtonLink label="View all connections" size={'small'} color={'orangeLight'} to="/" />
      </div>
    </SideBlock>
  );
};

export default SuggestedConnections;
