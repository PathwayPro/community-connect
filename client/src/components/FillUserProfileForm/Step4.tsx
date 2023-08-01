import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Dropdown from '../../common/components/Dropdown/Dropdown';

import { StepProps } from './FillUserProfileForm';
import { IFormInput } from './formInputInterface';

import styles from './FillUserProfileForm.module.scss';

const years = [
  { value: 'less than 1', label: 'less than 1' },
  { value: 'less than 3', label: 'less than 3' },
  { value: 'less than 5', label: 'less than 5' },
  { value: 'less than 8', label: 'less than 8' },
  { value: 'more than 8', label: 'more than 8' },
];

const goals = [
  { value: 'connections', label: 'New Connections' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'careerSwitch', label: 'Career switch' },
  { value: 'learningLanguage', label: 'Learning a new language' },
  { value: 'networking', label: 'Networking' },
];

const Step4: FC<StepProps> = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const timeInCanada = register('timeInCanada');
  const goal = register('goal');

  return (
    <>
      <div className={styles.formRow}>
        <Dropdown
          name={timeInCanada.name}
          label="How long have you been in Canada?"
          options={years}
          className={styles.formFieldWide}
          onChange={timeInCanada.onChange}
          onBlur={timeInCanada.onBlur}
          ref={timeInCanada.ref}
          errorMessage={errors.timeInCanada?.message}
        />
      </div>
      <div className={styles.formRow}>
        <Dropdown
          name={goal.name}
          label="What is your goal to join the Community Connect?"
          options={goals}
          className={styles.formFieldWide}
          onChange={goal.onChange}
          onBlur={goal.onBlur}
          ref={goal.ref}
          errorMessage={errors.goal?.message}
        />
      </div>
    </>
  );
};

export default Step4;
