import { ReactComponent as blogCommentIcon } from '../../../images/Icon/blog-comment.svg';
import { ReactComponent as blogRepostIcon } from '../../../images/Icon/blog-repost.svg';
import { ReactComponent as DeleteIcon } from '../../../images/Icon/delete-can.svg';
import { ReactComponent as editIcon } from '../../../images/Icon/edit-pen.svg';
import { ReactComponent as headerNotificationIcon } from '../../../images/Icon/header-bell.svg';
import { ReactComponent as headerHomeIcon } from '../../../images/Icon/header-home.svg';
import { ReactComponent as headerMsgIcon } from '../../../images/Icon/header-msg.svg';
import { ReactComponent as headerSearchIcon } from '../../../images/Icon/header-search.svg';
import { ReactComponent as likeIcon } from '../../../images/Icon/like.svg';
import { ReactComponent as settingIcon } from '../../../images/Icon/setting.svg';


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
};

export default iconMap;
