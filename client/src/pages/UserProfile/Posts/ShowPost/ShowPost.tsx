import { FC } from 'react';

import CommentBtn from '../../../../common/components/Comment/CommentBtn';
import LikeBtn from '../../../../common/components/Like/LikeBtn';
import RepostBtn from '../../../../common/components/Repost/RepostBtn';
import ToastSetting from '../../../../common/components/Toast/Toast';
import formatDate from '../../../../common/utils/formatDateUtils';

import styles from './ShowPost.module.scss';

export interface ShowPostProps {
  imgPath?: string;
  name: string;
  position: string;
  date: Date;
  content: string;
}

const ShowPost: FC<ShowPostProps> = ({ imgPath, name, position, date, content }) => {
  const leaveComment = () => console.log('comment');
  const repostPost = () => console.log('repost');
  const likePost = () => console.log('like');
  const copyPost = () => console.log('copy post link');

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
        <ToastSetting onToastClick={copyPost} toastContent={`Copy link to post`}/>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.reactions}>
        <div className={styles.repostComment}>
          <CommentBtn onClick={leaveComment} />
          <RepostBtn onClick={repostPost} />
        </div>
        <LikeBtn onClick={likePost} />
      </div>
    </div>
  );
};

export default ShowPost;
