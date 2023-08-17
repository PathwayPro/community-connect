import { FC, useState } from 'react';

import formatDate from '../../../utils/formatDateUtils';
import IconSVG from '../../IconSVG/IconSVG';
import Toast from '../../Toast/Toast';

import styles from './ShowPost.module.scss';

export interface ShowPostProps {
  imgPath: string;
  name: string;
  position: string;
  date: Date;
  content: string;
}

const ShowPost: FC<ShowPostProps> = ({ imgPath, name, position, date, content }) => {
  const [showToast, setShowToast] = useState(false);

  const leaveComment = () => console.log('comment');
  const repostPost = () => console.log('repost');
  const likePost = () => console.log('like');
  const copyPost = () => {
    console.log('copy post link');
    setShowToast(false);
  };
  const handleClick = () => setShowToast(!showToast);

  return (
    <div className={styles.box}>
      <div className={styles.userInfo}>
        <img src={imgPath} alt="connection img" className={styles.image} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.position}>{position}</div>
          <div className={styles.date}>{formatDate(date)}</div>
        </div>
      </div>
      <div className={styles.setting}>
        <IconSVG name={'settingIcon'} onClick={handleClick} />
        {showToast && <Toast onToastClick={copyPost} toastContent={`Copy link to post`} />}
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.reactions}>
        <div className={styles.repostComment}>
          <IconSVG name={'blogCommentIcon'} color={'orangeLight'} onClick={leaveComment} />
          <IconSVG name={'blogRepostIcon'} color={'orangeLight'} onClick={repostPost} />
        </div>
        <IconSVG name={'likeIcon'} color={'grey'} onClick={likePost} />
      </div>
    </div>
  );
};

export default ShowPost;
