import { FC } from 'react';

import Avatar from '../../../common/components/Avatar/Avatar';

import styles from './AddPost.module.scss';

interface addPostProps {
  imgPath: string;
}
const AddPost: FC<addPostProps> = ({ imgPath }) => {
  return (
    <div className={styles.newPost}>
      <Avatar src={imgPath} size="medium" className={styles.image} />
      <input type="text" placeholder="What is in your mind ?" className={styles.input} />
    </div>
  );
};

export default AddPost;
