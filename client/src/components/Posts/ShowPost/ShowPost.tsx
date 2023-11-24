import {FC, useState} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch} from "../../../app/hooks";
// import {useCreateRepostMutation} from "../../../app/slices/apiSlice";
import {useAddLikeToPostMutation} from "../../../app/slices/apiSlice";
import {MODAL_TYPE, showModal} from "../../../app/slices/modalSlice";
import Avatar from '../../../common/components/Avatar/Avatar';
import IconSVG from '../../../common/components/IconSVG/Button/IconSVG';
import Toast from '../../../common/components/Toast/Toast';
import formatDate from '../../../common/utils/formatDateUtils';

import styles from './ShowPost.module.scss';


export interface ShowPostProps {
  id: number,
  name: string,
  position: string,
  date: string,
  content: string,
  likesCount: number,
  repostsCount: number,
  commentsCount: number
}

const ShowPost: FC<ShowPostProps> = ({id, name, position, date, content, likesCount, repostsCount, commentsCount}) => {
  const dispatch = useAppDispatch();
  const [postLikesCount, setPostLikesCount] = useState(likesCount)
  const [showToast, setShowToast] = useState(false);
  const [showLikeToast, setShowLikeToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  // TODO: Add Post actions
  const [showCommentBox, setshowCommentBox] = useState(false);
  const [likeBtnGrey, setlikeBtnGrey] = useState(true);
  const [addLikeToPost] = useAddLikeToPostMutation();

  // const [createRepost] = useCreateRepostMutation();

  const leaveComment = () => {
    setshowCommentBox(!showCommentBox);
  };
  const repostPost = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(showModal({content: MODAL_TYPE.REPOST, postData: { name, content }}));
    // try {
    //   // Call the createRepost mutation with the post ID
    //   await createRepost({ postId: id }).unwrap();
    //   console.log('The post was successfuly reposted');
    //   setShowSuccessToast(true);
    //   // Here will be th post-repost logic, like showing a success message (toast)
    // } catch (error) {
    //   // Handle the error case
    //   setShowErrorToast(true);
    //   console.error('Failed to repost:', error);
    // }
  };
  const likePost = async () => {
    try {
      const response = await addLikeToPost(id).unwrap();
      console.log('Like added, new count:', response.likesCount);
      setlikeBtnGrey(!likeBtnGrey);
      setPostLikesCount(response.likesCount);
      setShowLikeToast(true);
    } catch (error) {
      console.error('Failed to add like:', error);
    }
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
        <Avatar size="medium" className={styles.image}/>
        <div className={styles.info}>
          <Link to={`/profile/user/${id}`} className={styles.name}>
            {name}
          </Link>
          <span className={styles.position}>{position}</span>
          <span className={styles.date}>{formatDate(new Date(date))}</span>
        </div>
      </div>
      <div className={styles.setting}>
        <IconSVG name={'settingIcon'} onClick={handleClick}/>
        {showToast && <Toast onToastClick={copyPost} toastContent={`Copy link to post`} type={"info"}/>}
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.reactions}>
        <div className={styles.repostComment}>
          <IconSVG name={'blogCommentIcon'} color="orangeLight" onClick={leaveComment}/>
          <div className={styles.quantity}>{commentsCount || ''}</div>
          <IconSVG name={'blogRepostIcon'} color="orangeLight" size="wide" onClick={repostPost}/>
          <div className={styles.quantity}>{repostsCount || ''}</div>
        </div>
        <div className={styles.repostComment}>
          <IconSVG name={'likeIcon'} color={likeBtnGrey ? 'grey' : 'green'} onClick={likePost}/>
          {showLikeToast && <Toast onToastClick={copyPost} toastContent={`You have liked the post`} type={"success"}/>}
          <div className={styles.quantity}>{postLikesCount || ''}</div>
        </div>
      </div>
      {showCommentBox && (
        <div className={styles.commentBox}>
          <Avatar size="small" className={styles.image}/>
          <textarea className={styles.comment} placeholder="Comment"/>
          <IconSVG name={'sendMessageIcon'} color={'grey'} size="wide" onClick={sendMessage}/>
        </div>
      )}
      {showSuccessToast &&
        <Toast onToastClick={() => setShowSuccessToast(false)} toastContent="Reposted seccessfully." type="success"/>}
      {showErrorToast &&
        <Toast onToastClick={() => setShowErrorToast(false)} toastContent="Failed to repost" type="error"/>}
    </div>
  );
};

export default ShowPost;
