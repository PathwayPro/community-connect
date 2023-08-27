import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../../common/components/Container/Container';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';

import Connections from './Connections/Connections';
import Requests from './Requests/Requests';

import styles from './ViewAllConnections.module.scss';

const ViewMyAllConnections: FC = () => {

  const location = useLocation();
  const connections = location.state.connections;

  // max height for the sections is 875px
  const [maxSize, setMaxSize] = useState<number>(875);

  const handleSizeChange = (size: number) => {
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
        <Images myProfile={true} />
        <Info myProfile={true} userProfile={false} />
        <div className={styles.socials}>
          <div className={styles.requests}>
            <Requests maxSize={maxSize} onSizeChange={handleSizeChange} />
          </div>
          <div className={styles.connections}>
            <Connections data={connections} maxSize={maxSize} onSizeChange={handleSizeChange} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ViewMyAllConnections;
