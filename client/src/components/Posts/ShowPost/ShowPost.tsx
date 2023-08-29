import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../common/components/Avatar/Avatar';
import IconSVG from '../../../common/components/IconSVG/Button/IconSVG';
import Toast from '../../../common/components/Toast/Toast';
import formatDate from '../../../common/utils/formatDateUtils';

import styles from './ShowPost.module.scss';

export interface ShowPostProps {
  id: number;
  name: string;
  position: string;
  date: Date;
  content: string;
}

const ShowPost: FC<ShowPostProps> = ({ id, name, position, date, content }) => {
  const [showToast, setShowToast] = useState(false);

  // TODO: Add POst actions
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
        <Avatar size="medium" className={styles.image} />
        <div className={styles.info}>
          <Link to={`/profile/user/${id}`} className={styles.name}>
            {name}
          </Link>
          <span className={styles.position}>{position}</span>
          <span className={styles.date}>{formatDate(date)}</span>
        </div>
      </div>
      <div className={styles.setting}>
        <IconSVG name={'settingIcon'} onClick={handleClick} />
        {showToast && <Toast onToastClick={copyPost} toastContent={`Copy link to post`} />}
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.reactions}>
        <div className={styles.repostComment}>
          <IconSVG name={'blogCommentIcon'} color="orangeLight" onClick={leaveComment} />
          <IconSVG name={'blogRepostIcon'} color="orangeLight" size="wide" onClick={repostPost} />
        </div>
        <IconSVG name={'likeIcon'} color="grey" onClick={likePost} />
      </div>
    </div>
  );
};

export default ShowPost;
