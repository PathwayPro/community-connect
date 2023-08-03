import { FC } from 'react';

import CommentBtn from '../../../../common/components/Comment/CommentBtn';
import LikeBtn from '../../../../common/components/Like/LikeBtn';
import RepostBtn from '../../../../common/components/Repost/RepostBtn';
import SettingBtn from '../../../../common/components/Setting/SettingBtn';

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

  function formatDate(date: Date): string {
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - date.getTime() + 100000;

    const millisecondsIn24Hours = 24 * 60 * 60 * 1000;

    if (diffInMilliseconds < millisecondsIn24Hours) {
      const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
      return date.toLocaleTimeString(undefined, options);
    } else {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    }
  }

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
        <SettingBtn onClick={likePost} />
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
