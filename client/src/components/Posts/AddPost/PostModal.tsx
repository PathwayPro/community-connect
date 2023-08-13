import { FC } from 'react';

import IconSVG from '../../../common/components/IconSVG/Button/IconSVG';

import styles from './PostModal.module.scss';

import defaultProfileImage from '../../../images/defaultProfileImg.svg';

export interface PostModal {
  imgPath?: string;
  name: string;
}

const user: PostModal[] = [
  {
    imgPath: defaultProfileImage,
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
        <IconSVG size={'big'} name={'deleteIcon'} onClick={closeModal} />
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
