import Button from '../../../common/components/Button/Button';
import Input from '../../../common/components/Input/Input';

import styles from './ContactUsForm.module.scss';

const ContactUsForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <Input label="First name" className={styles.input} />
        <Input label="Last name" className={styles.input} />
      </div>

      <div className={styles.formRow}>
        <Input label="Email" className={styles.input} />
        <Input label="Reason (optional)" className={styles.input} />
      </div>

      <label htmlFor="message" className={styles.label}>
        Message
      </label>
      <div className={styles.formRow}>
        <textarea id="message" name="message" className={styles.textarea} />
      </div>

      <div className={styles.formButton}>
        <Button
          label="Submit"
          isSubmit
          onClick={() => {
            console.log('!');
          }}
          size="small"
        />
      </div>
    </form>
  );
};

export default ContactUsForm;
