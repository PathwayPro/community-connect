import classNames from 'classnames';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../../../common/components/Button/Button';
import Heading from '../../../common/components/Heading/Heading';
import SectionMain from '../../../components/SectionMain/SectionMain';

import styles from './ApplyForMentorship.module.scss';

import mentorshipImage from '../../../images/Mentorship/mentorship.png';

interface IFormInput {
  message: string;
  resume: File;
}

const ApplyForMentorship: FC = () => {
  const { handleSubmit } = useForm<IFormInput>({ mode: 'onChange' });
  // TODO: add components and register then
  // const message = register('message', {
  //   required: 'Message is required',
  // });
  // const resume = register('message');

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    console.log(values);
  };
  return (
    <SectionMain>
      <div className={styles.titleBlock}>
        <Heading tagType="h2" className={styles.title}>
          Welcome to Mentorship Program!
        </Heading>
      </div>
      <div className={styles.block}>
        <div className={styles.left}>
          <p className={styles.text}>
            Our mentorship program was created to&nbsp;empower our community by&nbsp;providing guidance, support, and
            knowledge necessary to&nbsp;achieve personal and professional goals. By&nbsp;pairing you with experienced
            mentors who are passionate about sharing their wisdom and expertise, we&nbsp;create a&nbsp;nurturing
            environment where you can learn, gain new perspectives, and navigate challenges with the guidance
            of&nbsp;a&nbsp;trusted advisor.
          </p>
        </div>
        <div className={styles.right}>
          <img src={mentorshipImage} alt="mentorship image" />
        </div>
      </div>
      <div className={classNames(styles.block, styles.blockForm)}>
        <form className={styles.form}>
          <textarea className={styles.textarea} rows={5}></textarea>
          <Button label="Apply" isSubmit onClick={handleSubmit(onSubmit)} className={styles.mentorshipButton} />
        </form>
      </div>
    </SectionMain>
  );
};

export default ApplyForMentorship;
