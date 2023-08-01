import { ReactComponent as DeleteIcon } from "./img/delete-can.svg";

interface IconMap {
  deleteIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconMap: IconMap = {
  deleteIcon: DeleteIcon,
};

export default iconMap;