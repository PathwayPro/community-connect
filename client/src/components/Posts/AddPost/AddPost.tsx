import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { showModal, MODAL_TYPE } from '../../../app/slices/modalSlice';

import styles from './AddPost.module.scss';

interface AddPostProps {
  imgPath: string;
}
const AddPost: FC<AddPostProps> = ({ imgPath }) => {
  const dispatch = useAppDispatch();

  const openPostModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showModal({ content: MODAL_TYPE.WRITE_POST }));
  };

  return (
    <div className={styles.newPost}>
      <img src={imgPath} alt="profile" className={styles.image} />
      <input type="text" placeholder="What is in your mind ?" className={styles.input} onClick={openPostModal} />
    </div>
  );
};

export default AddPost;
