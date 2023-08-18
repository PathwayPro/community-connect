import { FC } from 'react';

import { useAppDispatch } from '../../../../app/hooks';
import { closeModal } from '../../../../app/slices/modalSlice';
import defaultProfileImage from '../../../../images/Main/defaultProfileImg.svg';
import Button from '../../Button/Button';
import IconSVG from '../../IconSVG/IconSVG';

import styles from './PostModal.module.scss';

export interface PostModal {
  imgPath?: string;
  name: string;
}

const user: PostModal[] = [
  {
    imgPath: 'https://media.istockphoto.com/id/1415929535/photo/creative-entrepreneur-talking-on-business-phone-call-writing-in-notebook-and-planning-a.jpg?s=2048x2048&w=is&k=20&c=MDp4A4Km15g2u8DAZIH1w-DFquZH6CsEQ_eZUH_ohEg=',
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
        <IconSVG
          name={'closeIcon'}
          onClick={closePostModal}
        />
      </div>
      <div className={styles.title}>Create a post</div>
      <div className={styles.userInfo}>
        <img src={image} alt="profile" className={styles.image} />
        <div className={styles.info}>{user[0].name}</div>
      </div>
      <textarea
        placeholder="What is in your mind ?"
        className={styles.input}
      />
      <div className={styles.btnDiv}>
        <Button label={'Post'} size={'small'} color={'orange'} onClick={post} className={styles.postBnt}></Button>
      </div>
    </div>
  );
};

export default PostModal;
