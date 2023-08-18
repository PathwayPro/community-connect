import { FC, useState } from 'react';

import IconSVG from '../../../common/components/IconSVG/IconSVG';
import Toast from '../../../common/components/Toast/Toast';
import formatDate from '../../../common/utils/formatDateUtils';

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
  const [showCommentBox, setshowCommentBox] = useState(false);
  const [likeBtnGrey, setlikeBtnGrey] = useState(true);

  const leaveComment = () => { setshowCommentBox(!showCommentBox) };
  const repostPost = () => console.log('repost');
  const likePost = () => {
    setlikeBtnGrey(!likeBtnGrey);
    console.log(likeBtnGrey)
  };
  const sendMessage = () => console.log('send message');
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
        <div className={styles.repostCommentBtn}>
          <IconSVG name={'blogCommentIcon'} color={'orangeLight'} onClick={leaveComment} />
          <IconSVG name={'blogRepostIcon'} color={'orangeLight'} onClick={repostPost} />
        </div>
        <IconSVG name={'likeIcon'} color={likeBtnGrey ? 'grey' : 'green'} onClick={likePost} />
      </div>
      {showCommentBox &&
        <div className={styles.commentBox}>
          <img src={imgPath} alt="connection img" className={styles.commentImage} />
          <textarea className={styles.comment} placeholder="Comment" />
          <IconSVG name={'sendMessageIcon'} color={'grey'} onClick={sendMessage} />
        </div>
      }
    </div>
  );
};

export default ShowPost;
