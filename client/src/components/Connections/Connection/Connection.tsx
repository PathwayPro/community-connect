import classNames from 'classnames';
import { FC } from 'react';

// import Avatar from '../../../common/components/Avatar/Avatar';
import ButtonLink from '../../../common/components/ButtonLink/ButtonLink';

import styles from './Connection.module.scss';
import Button from '../../../common/components/Button/Button';

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
          <span>{name}</span>
          <span className={styles.position}>{position}</span>
          <ButtonLink label={'View Profile'} size={'small'} color={'orange'} to={`/profile/user/${id}`}></ButtonLink>
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
