import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../../../common/components/Button/Button';

import styles from './ApplyForMentorshipForm.module.scss';

interface IFormInput {
  message: string;
  resume: File;
}

const ApplyForMentorshipForm: FC = () => {
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
    <div className={styles.block}>
      <form className={styles.form}>
        <textarea className={styles.textarea} rows={5}></textarea>
        <Button
          label="Apply"
          size="small"
          isSubmit
          onClick={handleSubmit(onSubmit)}
          className={styles.mentorshipButton}
        />
      </form>
    </div>
  );
};

export default ApplyForMentorshipForm;
