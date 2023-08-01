import { FC } from 'react';

import defaultProfileImage from '../../../../images/Main/defaultProfileImg.png';

import styles from './AddPost.module.scss';

const AddPost: FC = () => {

  return (
    <div className={styles.newPost}>
      <img src={defaultProfileImage} alt="profile" />
      <input type="text" placeholder="What is in your mind ?" />
    </div>
  );
};

export default AddPost;
