import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { closeModal } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
import CloseBtn from '../../../common/components/CloseBtn/CloseBtn';

import styles from './MessageModal.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.png';


export interface MessageModal {
  imgPath?: string;
  name: string;
}

const user: MessageModal[] = [
  {
    imgPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'Clark Mante',
  },
];

const image = user[0].imgPath ? user[0].imgPath : defaultProfileImage;

const MessageModal: FC = () => {
  const dispatch = useAppDispatch();

  const message = () => {
    console.log('message');
    closeMessageModal();
  };

  const closeMessageModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.closeBtn}>
        <CloseBtn onClick={closeMessageModal} />
      </div>
      <div className={styles.title}>Send a message</div>
      <div className={styles.userInfo}>
        <img src={image} alt="profile" className={styles.image} />
        <div className={styles.info}>{user[0].name}</div>
      </div>
      <textarea
        placeholder="Write something here..."
        className={styles.input}
      />
      <div className={styles.btnDiv}>
        <Button
          label={'Message'}
          size={'small'}
          color={'orange'}
          onClick={message}
          className={styles.messageBnt}
        />

      </div>
    </div>
  );
};

export default MessageModal;
