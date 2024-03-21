import { FC } from 'react';

import Container from '../../common/components/Container/Container';
import Heading from '../../common/components/Heading/Heading';

import ContactUsForm from './ContactUsForm/ContactUsForm';

import styles from './ContactUs.module.scss';

const ContactUs: FC = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <Heading tagType="h2" className={styles.heading}>
          Contact us
        </Heading>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.message}>
          <Heading tagType="h4" className={styles.messageHeading}>
            Send us a message
          </Heading>
          <p className={styles.text}>
            Need to get in touch with us? Either fill out the form with your inquiry or find the email you&apos;d like
            to contact below.
          </p>

          <div className={`${styles.contacts} ${styles.icon} ${styles.phone}`}>
            <a href="tel:8779589626">
              <div>Phone</div>
              <span>877-958-9626</span>
            </a>
          </div>

          <div className={`${styles.contacts} ${styles.icon} ${styles.mail}`}>
            <a href="mailto:immigranttechiesab@gmail.com">
              <div>Email</div>
              <span>immigranttechiesab@gmail.com</span>
            </a>
          </div>
        </div>

        <ContactUsForm />
      </div>
    </Container>
  );
};

export default ContactUs;
