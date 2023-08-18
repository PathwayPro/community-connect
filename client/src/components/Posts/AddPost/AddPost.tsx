import { FC } from 'react';

import styles from './AddPost.module.scss';

interface addPostProps {
  imgPath: string;
}
const AddPost: FC<addPostProps> = ({ imgPath }) => {
  return (
    <div className={styles.newPost}>
      <img src={imgPath} alt="profile" className={styles.image} />
      <input type="text" placeholder="What is in your mind ?" className={styles.input} />
    </div>
  );
};

export default AddPost;
