import {FC, useState} from 'react';
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useCreateRepostMutation} from "../../app/slices/apiSlice";
import {closeModal} from '../../app/slices/modalSlice';
import Avatar from "../../common/components/Avatar/Avatar";
import Button from '../../common/components/Button/Button';
import IconSVG from '../../common/components/IconSVG/Button/IconSVG';
import Toast from "../../common/components/Toast/Toast";
import formatDate from "../../common/utils/formatDateUtils";

import styles from './RepostModal.module.scss';

import defaultProfileImage from '../../images/defaultProfileImg.svg';


export interface RepostModal {
  imgPath?: string;
  name: string;
}

const user: RepostModal = {
  imgPath: defaultProfileImage,
  name: 'Mock Data for Debug',
};

const image = user.imgPath ? user.imgPath : defaultProfileImage;

const RepostModal: FC = () => {
  const dispatch = useAppDispatch();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [comment, setComment] = useState('');
  const modalData = useAppSelector((state) => state.modal);
  const [createRepost] = useCreateRepostMutation();

  let cachedUserFullName: { firstName: string; lastName: string; } | null = null;
  const userFullName = useAppSelector((state) => {
    const newUserData = {firstName: state.user.user.firstName, lastName: state.user.user.lastName};
    if (JSON.stringify(cachedUserFullName) !== JSON.stringify(newUserData)) {
      cachedUserFullName = newUserData;
    }
    return cachedUserFullName ?? {firstName: '', lastName: ''};
  });
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Call the createRepost mutation with the post ID
      await createRepost({ postId: modalData.postData?.id, content: comment }).unwrap();
      console.log('The post was successfuly reposted');
      setShowSuccessToast(true);
      modalData.postData?.onRepostSuccess?.();
      // Here will be th post-repost logic, like showing a success message (toast)
    } catch (error) {
      // Handle the error case
      setShowErrorToast(true);
      console.error('Failed to repost:', error);
    }
    closePostModal();
  };

  const closePostModal = () => {
    dispatch(closeModal());
  };

  return (
    <form className={styles.modalWindow}>
      <div className={styles.closeBtn}>
        <IconSVG size="big" name="closeIcon" onClick={closePostModal} />
      </div>
      <div className="repost">
        <div className={styles.userInfo}>
          <img src={image} alt="profile" className={styles.image} />
          <div className={styles.textInfo}>
            <div className={styles.info}>{`${userFullName.firstName} ${userFullName.lastName}`}</div>
            <div className={styles.privacySelector}>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4741 14.4721C14.2401 13.7521 13.5651 13.2211 12.7641 13.2211H11.8641V10.5211C11.8641 10.2824 11.7692 10.0535 11.6005 9.8847C11.4317 9.71591 11.2028 9.62109 10.9641 9.62109H5.56406V7.82109H7.36406C7.60276 7.82109 7.83168 7.72627 8.00046 7.55749C8.16924 7.38871 8.26406 7.15979 8.26406 6.92109V5.12109H10.0641C10.5415 5.12109 10.9993 4.93145 11.3369 4.59389C11.6744 4.25632 11.8641 3.79848 11.8641 3.32109V2.95209C14.5011 4.01409 16.3641 6.59709 16.3641 9.62109C16.3641 11.4931 15.6441 13.1941 14.4741 14.4721ZM8.26406 16.7581C4.70906 16.3171 1.96406 13.2931 1.96406 9.62109C1.96406 9.06309 2.03606 8.52309 2.15306 8.01009L6.46406 12.3211V13.2211C6.46406 13.6985 6.65371 14.1563 6.99127 14.4939C7.32884 14.8315 7.78667 15.0211 8.26406 15.0211M9.16406 0.621094C7.98217 0.621094 6.81184 0.853886 5.71991 1.30618C4.62798 1.75847 3.63583 2.42141 2.8001 3.25713C1.11227 4.94496 0.164063 7.23415 0.164062 9.62109C0.164063 12.008 1.11227 14.2972 2.8001 15.9851C3.63583 16.8208 4.62798 17.4837 5.71991 17.936C6.81184 18.3883 7.98217 18.6211 9.16406 18.6211C11.551 18.6211 13.8402 17.6729 15.528 15.9851C17.2159 14.2972 18.1641 12.008 18.1641 9.62109C18.1641 8.4392 17.9313 7.26887 17.479 6.17694C17.0267 5.08501 16.3638 4.09286 15.528 3.25713C14.6923 2.42141 13.7001 1.75847 12.6082 1.30618C11.5163 0.853886 10.346 0.621094 9.16406 0.621094Z" fill="black"/>
              </svg>
              <select className={styles.privacyDropdown}>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>
        <input onChange={(e) => setComment(e.target.value)} value={comment} placeholder="Add a comment" className={styles.input} />
        <div className={styles.inputBtns}>
          <button onClick={(e) => e.preventDefault()}>
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.551758" width="30.9832" height="30.2233" rx="4" fill="#374983"/>
              <path d="M24.043 15.1113C24.043 12.9896 23.2001 10.9548 21.6998 9.45447C20.1995 7.95418 18.1647 7.11133 16.043 7.11133C13.9212 7.11133 11.8864 7.95418 10.3861 9.45447C8.88582 10.9548 8.04297 12.9896 8.04297 15.1113C8.04297 17.2331 8.88582 19.2679 10.3861 20.7682C11.8864 22.2685 13.9212 23.1113 16.043 23.1113C18.1647 23.1113 20.1995 22.2685 21.6998 20.7682C23.2001 19.2679 24.043 17.2331 24.043 15.1113ZM26.043 15.1113C26.043 17.7635 24.9894 20.307 23.114 22.1824C21.2387 24.0578 18.6951 25.1113 16.043 25.1113C14.7297 25.1113 13.4294 24.8527 12.2161 24.3501C11.0029 23.8476 9.90049 23.111 8.9719 22.1824C7.09654 20.307 6.04297 17.7635 6.04297 15.1113C6.04297 12.4592 7.09654 9.91562 8.9719 8.04026C10.8473 6.1649 13.3908 5.11133 16.043 5.11133C17.3562 5.11133 18.6565 5.36999 19.8698 5.87253C21.0831 6.37508 22.1855 7.11167 23.114 8.04026C24.0426 8.96885 24.7792 10.0712 25.2818 11.2845C25.7843 12.4977 26.043 13.7981 26.043 15.1113ZM14.043 12.6113C14.043 13.4113 13.343 14.1113 12.543 14.1113C11.743 14.1113 11.043 13.4113 11.043 12.6113C11.043 11.8113 11.743 11.1113 12.543 11.1113C13.343 11.1113 14.043 11.8113 14.043 12.6113ZM21.043 12.6113C21.043 13.4113 20.343 14.1113 19.543 14.1113C18.743 14.1113 18.043 13.4113 18.043 12.6113C18.043 11.8113 18.743 11.1113 19.543 11.1113C20.343 11.1113 21.043 11.8113 21.043 12.6113ZM16.043 20.3413C14.293 20.3413 12.753 19.6113 11.853 18.5313L13.273 17.1113C13.723 17.8313 14.793 18.3413 16.043 18.3413C17.293 18.3413 18.363 17.8313 18.813 17.1113L20.233 18.5313C19.333 19.6113 17.793 20.3413 16.043 20.3413Z" fill="#E1E4EC"/>
            </svg>
          </button>
          <button onClick={(e) => e.preventDefault()}>
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.960938" width="30.9832" height="30.2233" rx="4" fill="#374983"/>
              <path d="M13.1188 15.5875V7.96847C13.1188 6.92085 13.976 6.06371 15.0236 6.06371H23.595C24.6426 6.06371 25.4998 6.92085 25.4998 7.96847V13.6828H22.2331L21.0141 12.0256C20.9569 11.9399 20.8426 11.9399 20.7855 12.0256L18.8902 14.6351C18.8331 14.6923 18.7188 14.7018 18.6617 14.6351L17.2998 12.9685C17.2426 12.9018 17.1379 12.9018 17.0807 12.9685L15.0712 15.5018C14.995 15.5875 15.0617 15.7304 15.176 15.7304H21.2141V17.4923H15.0236C13.9664 17.4923 13.1188 16.6447 13.1188 15.5875ZM10.2617 24.1589V23.2066H8.35691V24.1589H6.45215V5.11133H8.35691V6.06371H10.2617V5.11133H12.5379C11.7283 5.81609 11.2141 6.82561 11.2141 7.96847V15.5875C11.2141 17.6923 12.9188 19.397 15.0236 19.397H19.4998C18.5188 20.1875 17.8807 21.378 17.8807 22.7304C17.8807 23.2351 17.9855 23.7113 18.1474 24.1589H10.2617ZM8.35691 9.87323H10.2617V7.96847H8.35691V9.87323ZM8.35691 13.6828H10.2617V11.778H8.35691V13.6828ZM8.35691 17.4923H10.2617V15.5875H8.35691V17.4923ZM10.2617 21.3018V19.397H8.35691V21.3018H10.2617ZM26.4521 15.5875V17.4923H24.5474V22.7304C24.5474 24.0447 23.4807 25.1113 22.1664 25.1113C20.8521 25.1113 19.7855 24.0447 19.7855 22.7304C19.7855 21.4161 20.8521 20.3494 22.1664 20.3494C22.5093 20.3494 22.8236 20.4161 23.1188 20.5494V15.5875H26.4521Z" fill="#E1E4EC"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="post">
        <div className={styles.box}>
          <div className={styles.userInfo}>
            <Avatar size="medium" className={styles.image} />
            <div className={styles.info}>
              <Link to={`/profile/user/1}`} className={styles.name}>
                {modalData.postData?.name}
              </Link>
              <span className={styles.position}>{modalData.postData?.position}</span>
              <span className={styles.date}>{formatDate(new Date(`${modalData.postData?.date}`))}</span>
            </div>
          </div>
          <div className={styles.content}>{modalData.postData?.content}</div>
        </div>
      </div>
      <div className={styles.btnDiv}>
        <Button
          label="Repost"
          size="small"
          color="orange"
          onClick={handleSubmit}
          isSubmit
          className={styles.postBnt}
        ></Button>
        {showSuccessToast &&
          <Toast onToastClick={() => setShowSuccessToast(false)} toastContent="Reposted seccessfully." type="success"/>}
        {showErrorToast &&
          <Toast onToastClick={() => setShowErrorToast(false)} toastContent="Failed to repost" type="error"/>}
      </div>
    </form>
  );
};

export default RepostModal;
