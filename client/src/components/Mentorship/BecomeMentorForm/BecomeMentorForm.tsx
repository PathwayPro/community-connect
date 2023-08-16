import classNames from 'classnames';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../../../common/components/Button/Button';
import Input from '../../../common/components/Input/Input';
import {
  NAME_REGEX,
  ERROR_MESSAGE_NAME,
  NUMBER_REGEX,
  ERROR_MESSAGE_NUMBER,
} from '../../../common/utils/formComponentsUtils';

import styles from './BecomeMentorForm.module.scss';

interface IFormInput {
  firstName: string;
  lastName: string;
  fieldOfExpertise: string;
  yearsOfExperience: number;
  numberOfMentees: number;
  availability: number;
  otherMentorships: string;
}

const formId = 'becomeMentorForm';

const BecomeMentorForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onChange' });
  // TODO: add components and register them
  const firstName = register('firstName', {
    required: 'First name is required',
    pattern: {
      value: NAME_REGEX,
      message: ERROR_MESSAGE_NAME,
    },
  });

  const lastName = register('lastName', {
    required: 'Last name is required',
    pattern: {
      value: NAME_REGEX,
      message: ERROR_MESSAGE_NAME,
    },
  });

  const fieldOfExpertise = register('fieldOfExpertise', {
    required: 'Field of expertise is required',
    pattern: {
      value: NAME_REGEX,
      message: ERROR_MESSAGE_NAME,
    },
  });

  const yearsOfExperience = register('yearsOfExperience', {
    required: 'Years of experience are required',
    pattern: {
      value: NUMBER_REGEX,
      message: ERROR_MESSAGE_NUMBER,
    },
  });

  const numberOfMentees = register('numberOfMentees', {
    required: 'Number of mentees is required',
    pattern: {
      value: NUMBER_REGEX,
      message: ERROR_MESSAGE_NUMBER,
    },
  });

  const availability = register('availability', {
    required: 'Availability is required',
    pattern: {
      value: NUMBER_REGEX,
      message: ERROR_MESSAGE_NUMBER,
    },
  });

  const otherMentorships = register('otherMentorships', {
    required: 'Provide any details',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    console.log(values);
  };
  return (
    <div className={styles.block}>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <Input
            id={`${formId}-${firstName.name}`}
            name={firstName.name}
            label="First name *"
            autoComplete="on"
            className={styles.formField}
            onChange={firstName.onChange}
            onBlur={firstName.onBlur}
            ref={firstName.ref}
            errorMessage={errors.firstName?.message}
          />
          <Input
            id={`${formId}-${lastName.name}`}
            name={lastName.name}
            label="Last name *"
            autoComplete="on"
            className={styles.formField}
            onChange={lastName.onChange}
            onBlur={lastName.onBlur}
            ref={lastName.ref}
            errorMessage={errors.lastName?.message}
          />
        </div>
        <div className={styles.formRow}>
          <Input
            id={`${formId}-${fieldOfExpertise.name}`}
            name={fieldOfExpertise.name}
            label="Field of expertise *"
            className={styles.formField}
            onChange={fieldOfExpertise.onChange}
            onBlur={fieldOfExpertise.onBlur}
            ref={fieldOfExpertise.ref}
            errorMessage={errors.fieldOfExpertise?.message}
          />
          <Input
            id={`${formId}-${yearsOfExperience.name}`}
            name={yearsOfExperience.name}
            label="Years of experience *"
            className={styles.formField}
            onChange={yearsOfExperience.onChange}
            onBlur={yearsOfExperience.onBlur}
            ref={yearsOfExperience.ref}
            errorMessage={errors.yearsOfExperience?.message}
          />
        </div>
        <div className={styles.formRow}>
          <Input
            id={`${formId}-${numberOfMentees.name}`}
            name={numberOfMentees.name}
            label="Number of mentees you can accommodate *"
            className={styles.formField}
            onChange={numberOfMentees.onChange}
            onBlur={numberOfMentees.onBlur}
            ref={numberOfMentees.ref}
            errorMessage={errors.numberOfMentees?.message}
          />
          <Input
            id={`${formId}-${availability.name}`}
            name={availability.name}
            label="Availability (hours a week) *"
            className={styles.formField}
            onChange={availability.onChange}
            onBlur={availability.onBlur}
            ref={availability.ref}
            errorMessage={errors.availability?.message}
          />
        </div>
        <div className={styles.formRow}>
          <Input
            id={`${formId}-${otherMentorships.name}`}
            name={otherMentorships.name}
            label="Have you provided mentorship in other organizations (yes or no). If yes, provide details"
            className={classNames(styles.formFieldLabel)}
            onChange={otherMentorships.onChange}
            onBlur={otherMentorships.onBlur}
            ref={otherMentorships.ref}
            errorMessage={errors.otherMentorships?.message}
          />
        </div>
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

export default BecomeMentorForm;
