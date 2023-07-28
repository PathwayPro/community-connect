import classNames from 'classnames';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Dropdown from '../../common/components/Dropdown/Dropdown';
import Input from '../../common/components/Input/Input';
import Textarea from '../../common/components/Textarea/Textarea';
import { NAME_REGEX, ERROR_MESSAGE_NAME } from '../../common/utils/formComponentsUtils';

import { StepProps } from './FillUserProfileForm';
import { IFormInput } from './formInputInterface';

import styles from './FillUserProfileForm.module.scss';

const countries = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const provinces = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const years = [
  { value: 'less than 1', label: 'less than 1' },
  { value: 'less than 3', label: 'less than 3' },
  { value: 'less than 5', label: 'less than 5' },
  { value: 'less than 8', label: 'less than 8' },
  { value: 'more than 8', label: 'more than 8' },
];

const Step1: FC<StepProps> = () => {
  const {
    register, control, setValue, formState: { errors },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const avatar = register('avatar', {
    required: 'User photo is required',
  });
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
  const originCountry = register('originCountry');
  const province = register('province');
  const birthDate = register('birthDate', {
    pattern: {
      value: /^[0-9]{4}\/(0[1-9]|1[0-2])$/,
      message: 'Birth date should be in format "yyyy/mm"',
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      let { value } = e.target;
      value = value.replace(/[^0-9]/g, ''); // allow only numbers
      if (value.length > 4) {
        value = value.slice(0, 4) + '/' + value.slice(4);
      }
      setValue('birthDate', value); // set the value manually
    },
  });
  const spokenLanguage = register('spokenLanguage');
  const fieldOfExpertise = register('fieldOfExpertise', {
    required: 'Field of expertise is required',
  });
  const yearsOfExperience = register('yearsOfExperience', {
    required: 'Years of experience are required',
  });
  const bio = register('bio', {
    required: 'Bio is required',
  });

  return (
    <>
      <div className={classNames(styles.formRow, styles.column)}>
        <p className={styles.avatarTitle}>Add Photo *</p>
        <label htmlFor={avatar.name} className={styles.avatarLabel}></label>
        <input
          type="file"
          id={avatar.name}
          name={avatar.name}
          className={styles.avatar}
          onChange={avatar.onChange}
          onBlur={avatar.onBlur}
          ref={avatar.ref}
        />
      </div>
      <div className={styles.formRow}>
        <Input
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
        <Dropdown
          name={originCountry.name}
          label="Country of origin"
          options={countries}
          className={styles.formField}
          onChange={originCountry.onChange}
          onBlur={originCountry.onBlur}
          ref={originCountry.ref}
          errorMessage={errors.originCountry?.message}
        />
        <Dropdown
          name={province.name}
          label="Province"
          options={provinces}
          className={styles.formField}
          onChange={province.onChange}
          onBlur={province.onBlur}
          ref={province.ref}
          errorMessage={errors.province?.message}
        />
      </div>
      <div className={styles.formRow}>
        <div className={styles.fieldWithCheckbox}>
          <Input
            name={birthDate.name}
            label="Date of Birth"
            placeholder="Year / Month"
            className={styles.formField}
            onChange={birthDate.onChange}
            onBlur={birthDate.onBlur}
            ref={birthDate.ref}
            errorMessage={errors.birthDate?.message}
          />
          <fieldset className={styles.checkboxField}>
            <Controller
              name="isBirthdayVisible"
              control={control}
              render={({ field: { value, ...field } }) => (
                <input type="checkbox" {...field} className={styles.checkbox} checked={value} />
              )}
            />
            <label htmlFor="isBirthdayVisible">Show my birthday date on my profile.</label>
          </fieldset>
        </div>

        <Input
          name={spokenLanguage.name}
          label="Spoken languages"
          placeholder="List separated by commas"
          className={styles.formField}
          onChange={spokenLanguage.onChange}
          onBlur={spokenLanguage.onBlur}
          ref={spokenLanguage.ref}
          errorMessage={errors.spokenLanguage?.message}
        />
      </div>
      <div className={styles.formRow}>
        <Input
          name={fieldOfExpertise.name}
          label="Field of expertise *"
          className={styles.formField}
          onChange={fieldOfExpertise.onChange}
          onBlur={fieldOfExpertise.onBlur}
          ref={fieldOfExpertise.ref}
          errorMessage={errors.fieldOfExpertise?.message}
        />
        <Dropdown
          name={yearsOfExperience.name}
          label="Years of experience *"
          options={years}
          className={styles.formField}
          onChange={yearsOfExperience.onChange}
          onBlur={yearsOfExperience.onBlur}
          ref={yearsOfExperience.ref}
          errorMessage={errors.yearsOfExperience?.message}
        />
      </div>
      <div className={styles.formRow}>
        <Textarea
          name={bio.name}
          label="Bio *"
          rows={3}
          placeholder="Please provide a brief description about yourself."
          className={styles.formFieldWide}
          onChange={bio.onChange}
          onBlur={bio.onBlur}
          ref={bio.ref}
          errorMessage={errors.bio?.message}
        />
      </div>
    </>
  );
};

export default Step1;
