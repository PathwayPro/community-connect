import { ReactComponent as editIcon } from './img/edit-pen.svg';
import { ReactComponent as headerNotificationIcon } from './img/header-bell.svg';
import { ReactComponent as headerHomeIcon } from './img/header-home.svg';
import { ReactComponent as headerMsgIcon } from './img/header-msg.svg';
import { ReactComponent as headerSearchIcon } from './img/header-search.svg';

interface IconMap {
  editIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerNotificationIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerHomeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerMsgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  headerSearchIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconMap: IconMap = {
  editIcon: editIcon,
  headerNotificationIcon: headerNotificationIcon,
  headerHomeIcon: headerHomeIcon,
  headerMsgIcon: headerMsgIcon,
  headerSearchIcon: headerSearchIcon,
};

export default iconMap;
