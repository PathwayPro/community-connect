import { FC } from 'react';
import { Controller } from 'react-hook-form';

import Dropdown from '../../common/components/Dropdown/Dropdown';

import { StepControlProps, styles } from './FillUserProfileForm';

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

const Step4: FC<StepControlProps> = ({ formId, errors, control }) => {
  return (
    <>
      <div className={styles.formRow}>
        <Controller
          name="timeInCanada"
          control={control}
          render={({ field }) => (
            <Dropdown
              name={field.name}
              id={`${formId}-${field.name}`}
              label="How long have you been in Canada?"
              options={years}
              className={styles.formFieldWide}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={errors.timeInCanada?.message}
            />
          )}
        />
      </div>
      <div className={styles.formRow}>
        <Controller
          name="goal"
          control={control}
          render={({ field }) => (
            <Dropdown
              name={field.name}
              id={`${formId}-${field.name}`}
              label="What is your goal to join the Community Connect?"
              options={goals}
              className={styles.formFieldWide}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={errors.goal?.message}
            />
          )}
        />
      </div>
    </>
  );
};

export default Step4;
