import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { closeModal } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
import Heading from '../../../common/components/Heading/Heading';
import IconSVG from '../../../common/components/IconSVG/Button/IconSVG';

import styles from './PostModal.module.scss';

import defaultProfileImage from '../../../images/defaultProfileImg.svg';

export interface PostModal {
  imgPath?: string;
  name: string;
}

const user: PostModal = {
  imgPath: defaultProfileImage,
  name: 'Clark Mante',
};

const image = user.imgPath ? user.imgPath : defaultProfileImage;

const PostModal: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: send post to the BE
    closePostModal();
  };

  const closePostModal = () => {
    dispatch(closeModal());
  };

  return (
    <form className={styles.modalWindow}>
      <div className={styles.closeBtn}>
        <IconSVG size="big" name="closeIcon" onClick={closePostModal} />
      </div>
      <Heading tagType="h5" className={styles.title}>
        Create a post
      </Heading>
      <div className={styles.userInfo}>
        <img src={image} alt="profile" className={styles.image} />
        <div className={styles.info}>{user.name}</div>
      </div>
      <textarea placeholder="What is in your mind ?" className={styles.input} />
      <div className={styles.btnDiv}>
        <Button
          label="Post"
          size="small"
          color="orange"
          onClick={handleSubmit}
          isSubmit
          className={styles.postBnt}
        ></Button>
      </div>
    </form>
  );
};

export default PostModal;
