import { FC, useState } from 'react';

import Container from '../../common/components/Container/Container';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';

import Connections from './Connections/Connections';
import Requests from './Requests/Requests';

import styles from './ViewAllConnections.module.scss';

const ViewUserAllConnections: FC = () => {

  // max height for the sections is 875px
  const [maxSize, setMaxSize] = useState<number>(875);

  const handleConnectionsSizeChange = (size: number) => {
    // min height for the sections is 235px
    if (size < maxSize && size < 235) {
      setMaxSize(235);
    }
    else if (size < maxSize) {
      setMaxSize(size);
    }
  };

  const handleRequestsSizeChange = (size: number) => {
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
          <Requests maxSize={maxSize} onSizeChange={handleRequestsSizeChange} />
          <Connections maxSize={maxSize} onSizeChange={handleConnectionsSizeChange} />
        </div>
      </div>
    </Container>
  );
};

export default ViewUserAllConnections;
