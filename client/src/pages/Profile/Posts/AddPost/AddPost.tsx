import { FC } from 'react';

import defaultProfileImage from '../../../../images/Main/defaultProfileImg.png';

import styles from './AddPost.module.scss';

const AddPost: FC = () => {

  return (
    <div className={styles.newPost}>
      <img src={defaultProfileImage} alt="profile" className={styles.image} />
      <input type="text" placeholder="What is in your mind ?" className={styles.input}/>
    </div>
  );
};

export default AddPost;
