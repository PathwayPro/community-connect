import styles from './SuccessMessage.module.scss';

import submitIcon from '../../../images/ContactUs/submit-icon.png';

interface SuccessMessageProps {
  heading: string;
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ heading, message }) => {
  return (
    <div className={styles.submitMessage}>
      <div className={styles.image}>
        <img src={submitIcon} />
      </div>
      <div className={styles.text}>{heading}</div>
      <div className={styles.text}>{message}</div>
    </div>
  );
};

export default SuccessMessage;
