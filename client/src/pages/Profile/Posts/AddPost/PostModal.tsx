import { FC } from 'react';

import LikeBtn from '../../../../common/components/Like/LikeBtn';
import defaultProfileImage from '../../../../images/Main/defaultProfileImg.png';

import styles from './PostModal.module.scss';

export interface PostModal {
  imgPath?: string;
  name: string;
}

const user: PostModal[] = [
  {
    imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'Clark Mante',
  },
];

const image = user[0].imgPath ? user[0].imgPath : defaultProfileImage;

const PostModal: FC = () => {
  const closeModal = () => {
    console.log('close modal');
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.closeBtn}>
        <LikeBtn onClick={closeModal} />
      </div>
      <div className={styles.title}>Create a post</div>
      <div className={styles.userInfo}>
        <img src={image} alt="profile" className={styles.image} />
        <div className={styles.info}>{user[0].name}</div>
      </div>
      <input type="text" placeholder="What is in your mind ?" className={styles.input} />
    </div>
  );
};

export default PostModal;
