import { FC } from 'react';

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
  { id: 3, name: 'Hana Allen', position: 'Designer' },
];

const SuggestedConnections: FC = () => {
  return (
    <SideBlock title="Suggested Connections">
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
    </SideBlock>
  );
};

export default SuggestedConnections;
