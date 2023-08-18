import { FC } from 'react';

import Button from '../Button/Button';
import Heading from '../Heading/Heading';

import styles from './Alert.module.scss';

interface alertInterface {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
}

const Alert: FC<alertInterface> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.customAlertOverlay}>
      <div className={styles.customAlert}>
        {title && (
          <Heading tagType="h5" className={styles.title}>
            {title}
          </Heading>
        )}
        {content && <p className={styles.content}>{content}</p>}
        <Button label="Close" size="small" onClick={onClose} />
      </div>
    </div>
  );
};

export default Alert;
