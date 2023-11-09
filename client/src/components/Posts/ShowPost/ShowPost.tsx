import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import {useCreateRepostMutation} from "../../../app/slices/apiSlice";
import Avatar from '../../../common/components/Avatar/Avatar';
import IconSVG from '../../../common/components/IconSVG/Button/IconSVG';
import Toast from '../../../common/components/Toast/Toast';
import formatDate from '../../../common/utils/formatDateUtils';

import styles from './ShowPost.module.scss';

export interface ShowPostProps {
  id: number;
  name: string;
  position: string;
  date: string;
  content: string;
}

const ShowPost: FC<ShowPostProps> = ({ id, name, position, date, content }) => {
  const [showToast, setShowToast] = useState(false);

  // TODO: Add Post actions
  const [showCommentBox, setshowCommentBox] = useState(false);
  const [likeBtnGrey, setlikeBtnGrey] = useState(true);

  const [createRepost] = useCreateRepostMutation();

  const leaveComment = () => {
    setshowCommentBox(!showCommentBox);
  };
  const repostPost = async () => {
    try {
      // Call the createRepost mutation with the post ID
      await createRepost({ postId: id }).unwrap();
      console.log('The post was successfuly reposted')
      // Here will be th post-repost logic, like showing a success message (toast)
    } catch (error) {
      // Handle the error case
      console.error('Failed to repost:', error);
    }
  };
  const likePost = () => {
    setlikeBtnGrey(!likeBtnGrey);
  };
  const sendMessage = () => console.log('send message');
  const copyPost = () => {
    console.log(`post id: ${id} copied`)
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
          <span className={styles.date}>{formatDate(new Date(date))}</span>
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
        <IconSVG name={'likeIcon'} color={likeBtnGrey ? 'grey' : 'green'} onClick={likePost} />
      </div>
      {showCommentBox && (
        <div className={styles.commentBox}>
          <Avatar size="small" className={styles.image} />
          <textarea className={styles.comment} placeholder="Comment" />
          <IconSVG name={'sendMessageIcon'} color={'grey'} size="wide" onClick={sendMessage} />
        </div>
      )}
    </div>
  );
};

export default ShowPost;
