import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../../common/components/Container/Container';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';

import Connections from './Connections/Connections';

import styles from './ViewAllConnections.module.scss';

const ViewUserAllConnections: FC = () => {

  const location = useLocation();
  const connections = location.state.connections;

  // max height for the sections is 875px
  const [maxSize, setMaxSize] = useState<number>(875);

  const handleSizeChange = (size: number) => {
    // min height for the sections is 235px
    if (size < maxSize && size < 235) {
      setMaxSize(235);
    }
    else if (size < maxSize) {
      setMaxSize(size);
    }
  };

  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={false} />
        <Info myProfile={false} userProfile={true} />
        <div className={styles.connectionsOnly}>
          <Connections data={connections} maxSize={maxSize} onSizeChange={handleSizeChange} />
        </div>
      </div>
    </Container>
  );
};

export default ViewUserAllConnections;
