import { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { closeModal } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
import IconSVG from '../../../common/components/IconSVG/IconSVG';

import styles from './MessageModal.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.svg';

export interface MessageModal {
  imgPath?: string;
  name: string;
}

const user: MessageModal =
{
  imgPath: 'https://media.istockphoto.com/id/1415929535/photo/creative-entrepreneur-talking-on-business-phone-call-writing-in-notebook-and-planning-a.jpg?s=2048x2048&w=is&k=20&c=MDp4A4Km15g2u8DAZIH1w-DFquZH6CsEQ_eZUH_ohEg=',
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
        <IconSVG
          name={'closeIcon'}
          onClick={closeMessageModal}
        />
      </div>
      <div className={styles.title}>Send a message</div>
      <div className={styles.userInfo}>
        <img src={image} alt="profile" className={styles.image} />
        <div className={styles.info}>{user.name}</div>
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
