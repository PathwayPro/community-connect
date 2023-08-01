import { FC } from 'react';

import Scroll from '../../../common/components/Scroll/Scroll';

import AddPost from './AddPost/AddPost';
import styles from './Posts.module.scss';

const Posts: FC = () => {

  return (
    <div className={styles.posts}>
      <Scroll>
        <AddPost />
      </ Scroll>
    </div>
  );
};

export default Posts;
