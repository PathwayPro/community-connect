import { ReactComponent as blogCommentIcon } from './img/blog-comment.svg';
import { ReactComponent as blogRepostIcon } from './img/blog-repost.svg';
import { ReactComponent as closeIcon } from './img/close.svg';
import { ReactComponent as DeleteIcon } from './img/delete-can.svg';
import { ReactComponent as editIcon } from './img/edit-pen.svg';
import { ReactComponent as headerNotificationIcon } from './img/header-bell.svg';
import { ReactComponent as headerHomeIcon } from './img/header-home.svg';
import { ReactComponent as headerMsgIcon } from './img/header-msg.svg';
import { ReactComponent as headerSearchIcon } from './img/header-search.svg';
import { ReactComponent as likeIcon } from './img/like.svg';
import { ReactComponent as sendMessageIcon } from './img/send-msg.svg';
import { ReactComponent as settingIcon } from './img/setting.svg';

interface IconMap {
  blogCommentIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  blogRepostIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  deleteIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  editIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerNotificationIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerHomeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerMsgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerSearchIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  likeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  settingIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  closeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  sendMessageIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconMap: IconMap = {
  blogCommentIcon: blogCommentIcon,
  blogRepostIcon: blogRepostIcon,
  deleteIcon: DeleteIcon,
  editIcon: editIcon,
  headerNotificationIcon: headerNotificationIcon,
  headerHomeIcon: headerHomeIcon,
  headerMsgIcon: headerMsgIcon,
  headerSearchIcon: headerSearchIcon,
  likeIcon: likeIcon,
  settingIcon: settingIcon,
  closeIcon: closeIcon,
  sendMessageIcon: sendMessageIcon,
};

export default iconMap;
