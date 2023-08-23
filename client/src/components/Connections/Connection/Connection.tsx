import classNames from 'classnames';
import { FC } from 'react';

import Button from '../../../common/components/Button/Button';

import styles from './Connection.module.scss';

export interface connectionProps {
  className?: string;
  imgPath: string;
  name: string;
  position: string;
  buttonText: string;
  isRequest?: boolean;
}

const Connection: FC<connectionProps> = ({
  className,
  imgPath,
  name,
  position,
  buttonText,
  isRequest,
}) => {
  const onOrangeButtonClick = () => console.log('click');
  const onGreyButtonClick = () => console.log('click');

  return (
    <div className={classNames(styles.box, className)}>
      <div className={styles.connection}>
        <img src={imgPath} alt="connection img" className={styles.image} />
        <div className={styles.info}>
          <div>{name}</div>
          <div className={styles.position}>{position}</div>
        </div>
      </div>
      <div className={isRequest ? styles.twoBtns : styles.singleBtn}>
        {isRequest && (
          <Button label={'Decline'} size={'small'} color={'grey'} onClick={onGreyButtonClick}></Button>
        )}
        <Button label={buttonText} size={'small'} color={'orange'} onClick={onOrangeButtonClick}></Button>
      </div>
    </div>
  );
};

export default Connection;
