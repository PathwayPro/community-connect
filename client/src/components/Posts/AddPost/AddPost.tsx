import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { showModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import Avatar from '../../../common/components/Avatar/Avatar';

import styles from './AddPost.module.scss';

const AddPost: FC = () => {
  const dispatch = useAppDispatch();

  const openPostModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.WRITE_POST }));
  };

  return (
    <div className={styles.newPost}>
      <Avatar size="medium" className={styles.image} />
      <input type="text" placeholder="What is in your mind ?" className={styles.input} onClick={openPostModal} />
    </div>
  );
};

export default AddPost;
