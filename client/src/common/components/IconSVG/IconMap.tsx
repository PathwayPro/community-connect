import { ReactComponent as blogCommentIcon } from './img/blog-comment.svg';
import { ReactComponent as blogRepostIcon } from './img/blog-repost.svg';
import { ReactComponent as closeIcon } from './img/close.svg';
import { ReactComponent as deleteIcon } from './img/delete-can.svg';
import { ReactComponent as editIcon } from './img/edit-pen.svg';
import { ReactComponent as headerNotificationIcon } from './img/header-bell.svg';
import { ReactComponent as headerHomeIcon } from './img/header-home.svg';
import { ReactComponent as headerMsgIcon } from './img/header-msg.svg';
import { ReactComponent as headerSearchIcon } from './img/header-search.svg';
import { ReactComponent as likeIcon } from './img/like.svg';
import { ReactComponent as sendMessageIcon } from './img/send-msg.svg';
import { ReactComponent as settingIcon } from './img/setting.svg';
//Toast
import { ReactComponent as toastWarningAlert } from './img/toast/alert-warning-fill.svg';
import { ReactComponent as toastWarningClose } from './img/toast/alert_baseline-close.svg';
import { ReactComponent as toastErrorAlert } from './img/toast/error-warning-fill.svg';
import { ReactComponent as toastErrorClose } from './img/toast/error_baseline-close.svg';
import { ReactComponent as toastInfoAlert } from './img/toast/info-warning-fill.svg';
import { ReactComponent as toastInfoClose } from './img/toast/info_baseline-close.svg';
import { ReactComponent as toastSuccessAlert } from './img/toast/success-warning-fill.svg';
import { ReactComponent as toastSuccessClose } from './img/toast/success_baseline-close.svg';

interface IconMap {
  blogCommentIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  blogRepostIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  closeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  deleteIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  editIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerNotificationIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerHomeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerMsgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerSearchIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  likeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  sendMessageIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  settingIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  //Toast
  warningAlert: React.FC<React.SVGProps<SVGSVGElement>>;
  warningClose: React.FC<React.SVGProps<SVGSVGElement>>;
  errorAlert: React.FC<React.SVGProps<SVGSVGElement>>;
  errorClose: React.FC<React.SVGProps<SVGSVGElement>>;
  infoAlert: React.FC<React.SVGProps<SVGSVGElement>>;
  infoClose: React.FC<React.SVGProps<SVGSVGElement>>;
  successAlert: React.FC<React.SVGProps<SVGSVGElement>>;
  successClose: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconMap: IconMap = {
  blogCommentIcon: blogCommentIcon,
  blogRepostIcon: blogRepostIcon,
  closeIcon: closeIcon,
  deleteIcon: deleteIcon,
  editIcon: editIcon,
  headerNotificationIcon: headerNotificationIcon,
  headerHomeIcon: headerHomeIcon,
  headerMsgIcon: headerMsgIcon,
  headerSearchIcon: headerSearchIcon,
  likeIcon: likeIcon,
  sendMessageIcon: sendMessageIcon,
  settingIcon: settingIcon,
  //Toast
  warningAlert: toastWarningAlert,
  warningClose: toastWarningClose,
  errorAlert: toastErrorAlert,
  errorClose: toastErrorClose,
  infoAlert: toastInfoAlert,
  infoClose: toastInfoClose,
  successAlert: toastSuccessAlert,
  successClose: toastSuccessClose,
};

export default iconMap;
