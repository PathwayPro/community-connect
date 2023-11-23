import React, { useState, ChangeEvent } from 'react';

import Button from '../../../common/components/Button/Button';
import Input from '../../../common/components/Input/Input';

import styles from './ContactUsForm.module.scss';

import submitIcon from '../../../images/ContactUs/submit-icon.png';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
  message: string;
}

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: '',
  });

  const [onSubmit, setOnSubmit] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setOnSubmit(true);
    console.log('Form Data:', formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {onSubmit ? (
        <div className={styles.submitMessage}>
          <div className={styles.image}>
            <img src={submitIcon} />
          </div>
          <div className={styles.text}>Thank you for reaching out!</div>
          <div className={styles.text}>
            Your message has been successfully submitted. We&apos;ll get back to you as soon as possible!
          </div>
        </div>
      ) : (
        <>
          <div className={styles.formRow}>
            <Input
              label="First name"
              className={styles.input}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              label="Last name"
              className={styles.input}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formRow}>
            <Input label="Email" className={styles.input} name="email" value={formData.email} onChange={handleChange} />
            <Input
              label="Reason (optional)"
              className={styles.input}
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <div className={styles.formRow}>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formButton}>
            <Button label="Submit" isSubmit size="small" onClick={() => setOnSubmit(true)} />
          </div>
        </>
      )}
    </form>
  );
};

export default ContactUsForm;
