import React, { useState, ChangeEvent } from 'react';

import Button from '../../../common/components/Button/Button';
import Input from '../../../common/components/Input/Input';
import SuccessMessage from '../../../common/components/SuccessMessage/SuccessMessage';

import styles from './ContactUsForm.module.scss';
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
        <div className={styles.successMessageWrapper}>
          <SuccessMessage
            heading="Thank you for reaching out!"
            message="Your message has been successfully submitted. We'll get back to you as soon as possible!"
          />
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
