import classNames from 'classnames';
import { FC } from 'react';

import Button from '../Button/Button';

import styles from './SettingBtn.module.scss';

import setting from '../../../images/Icon/setting.svg'

interface SettingBtnProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
}

const SettingBtn: FC<SettingBtnProps> = ({
  onClick,
  className,
}) => {
  return (
    <Button
      imgPath={setting}
      onClick={onClick}
      className={classNames(className, styles.settingBtn)}
    ></Button>
  );
};

export default SettingBtn;
