import { FC } from 'react';

// import Button from '../../common/components/Button/Button';
import Container from '../../common/components/Container/Container';
import Heading from '../../common/components/Heading/Heading';
// import Input from '../../common/components/Input/Input';

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
              877-958-9626
            </a>
          </div>

          <div className={`${styles.contacts} ${styles.icon} ${styles.mail}`}>
            <a href="mailto:immigranttechiesab@gmail.com">
              <div>Email</div>
              immigranttechiesab@gmail.com
            </a>
          </div>
        </div>

        {/*  */}
        {/* <form className={styles.form}>
          <div className={styles.formRow}>
            <Input label="First name" className={styles.input} />
            <Input label="Last name" className={styles.input} />
          </div>

          <div className={styles.formRow}>
            <Input label="Email" className={styles.input} />
            <Input label="Reason (optional)" className={styles.input} />
          </div>

          <div className={styles.formRow}>
            <Input label="Message" className={styles.input} />
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
        </form> */}

        <ContactUsForm />
        {/*  */}
      </div>
    </Container>
  );
};

export default ContactUs;

// import { FC } from 'react';

// import Container from '../../common/components/Container/Container';
// import Heading from '../../common/components/Heading/Heading';

// import styles from './ContactUs.module.scss';

// const ContactUs: FC = () => {
//   return (
//     <Container>
//       <div className={styles.banner}>
//         <Heading tagType="h2" className={styles.heading}>
//           Contact us
//         </Heading>
//       </div>
//       <div className={styles.formWrapper}>
//         <div className={styles.message}>
//           <Heading tagType="h4" className={styles.messageHeading}>
//             Send us a message
//           </Heading>
//           <p className={styles.text}>
//             Need to get in touch with us? Either fill out the form with your inquiry or find the email you&apos;d like
//             to contact below.
//           </p>

//           <div className={`${styles.contacts} ${styles.icon} ${styles.phone}`}>
//             <a href="tel:8779589626">
//               <div>Phone</div>
//               877-958-9626
//             </a>
//           </div>

//           <div className={`${styles.contacts} ${styles.icon} ${styles.mail}`}>
//             <a href="mailto:immigranttechiesab@gmail.com">
//               <div>Email</div>
//               immigranttechiesab@gmail.com
//             </a>
//           </div>
//         </div>

//         <div className={styles.form}></div>
//       </div>
//     </Container>
//   );
// };

// export default ContactUs;
