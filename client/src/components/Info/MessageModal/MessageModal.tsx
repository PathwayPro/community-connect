import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { closeModal } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
import IconSVG from '../../../common/components/IconSVG/Button/IconSVG';

import styles from './MessageModal.module.scss';

import defaultProfileImage from '../../../images/defaultProfileImg.svg';

export interface MessageModal {
  imgPath?: string;
  name: string;
}

const user: MessageModal = {
  imgPath: defaultProfileImage,
  name: 'Clark Mante',
};

const image = user.imgPath ? user.imgPath : defaultProfileImage;

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
        <IconSVG name="closeIcon" size="big" onClick={closeMessageModal} />
      </div>
      <div className={styles.title}>Send a message</div>
      <div className={styles.userInfo}>
        <img src={image} alt="profile" className={styles.image} />
        <div className={styles.info}>{user.name}</div>
      </div>
      <textarea placeholder="Write something here..." className={styles.input} />
      <div className={styles.btnDiv}>
        <Button label="Message" size="small" color="orange" onClick={message} className={styles.messageBnt} />
      </div>
    </div>
  );
};

export default MessageModal;
