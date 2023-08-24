import { FC, useState } from 'react';

import Container from '../../common/components/Container/Container';
import Connections from '../../components/Connections/Connections';
import Events from '../../components/Events/Events';
import Images from '../../components/Images/Images';
import Info from '../../components/Info/Info';
import Posts from '../../components/Posts/Posts';

import styles from './Profile.module.scss';

const MyProfile: FC = () => {
  // max height for the sections is 1000px
  const [maxSize, setMaxSize] = useState<number>(1000);

  const handleConnectionsSizeChange = (size: number) => {
    // min height for the sections is 295px
    if (size < maxSize && size < 295) {
      setMaxSize(295);
    } else if (size < maxSize) {
      setMaxSize(size);
    }
  };

  const handlePostsSizeChange = (size: number) => {
    if (size < maxSize && size < 295) {
      setMaxSize(295);
    } else if (size < maxSize) {
      setMaxSize(size);
    }
  };

  const handleEventsSizeChange = (size: number) => {
    if (size < maxSize && size < 295) {
      setMaxSize(295);
    } else if (size < maxSize) {
      setMaxSize(size);
    }
  };

  return (
    <Container>
      <div className={styles.page}>
        <Images myProfile={true} />
        <Info myProfile={true} userProfile={false} />
        <div className={styles.socials}>
          <Events maxSize={maxSize} onSizeChange={handleEventsSizeChange} />
          <Posts myProfile={true} maxSize={maxSize} onSizeChange={handlePostsSizeChange} />
          <Connections myProfile={true} maxSize={maxSize} onSizeChange={handleConnectionsSizeChange} />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
