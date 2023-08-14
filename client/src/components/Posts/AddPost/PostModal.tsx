import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { closeModal } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
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
  const dispatch = useAppDispatch();

  const post = () => {
    console.log('post');
    closePostModal();
  };

  const closePostModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.closeBtn}>
        <IconSVG size={'big'} name={'closeIcon'} onClick={closePostModal} />
      </div>
      <div className={styles.title}>Create a post</div>
      <div className={styles.userInfo}>
        <img src={image} alt="profile" className={styles.image} />
        <div className={styles.info}>{user[0].name}</div>
      </div>
      <textarea placeholder="What is in your mind ?" className={styles.input} />
      <div className={styles.btnDiv}>
        <Button label={'Post'} size={'small'} color={'orange'} onClick={post} className={styles.postBnt}></Button>
      </div>
    </div>
  );
};

export default PostModal;
