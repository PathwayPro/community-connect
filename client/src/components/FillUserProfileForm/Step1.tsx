import classNames from 'classnames';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import Dropdown from '../../common/components/Dropdown/Dropdown';
import Input from '../../common/components/Input/Input';
import Textarea from '../../common/components/Textarea/Textarea';
import {
  NAME_REGEX,
  ERROR_MESSAGE_NAME,
  BIRTHDATE_REGEX,
  ERROR_MESSAGE_BIRTHDATE,
} from '../../common/utils/formComponentsUtils';

import { StepAllProps } from './FillUserProfileForm';

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

const Step1: FC<StepAllProps> = ({ formId, errors, register, control, setValue }) => {
  // TODO: add file upload
  const avatar = register('avatar', {
    // required: 'User photo is required',
    // validate: {
    //   fileFormat: (value: FileList | undefined) => {
    //     const file = value ? value[0] : undefined;
    //     if (file && ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type)) {
    //       return true;
    //     }
    //     return 'Image must be a .jpg, .jpeg or .png format';
    //   },
    //   fileSize: (value: FileList | undefined) => {
    //     const file = value ? value[0] : undefined;
    //     if (file && file.size <= 8 * 1024 * 1024) {
    //       // 8MB
    //       return true;
    //     }
    //     return 'Image must be less than 8MB';
    //   },
    // },
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

  const birthDate = register('birthDate', {
    pattern: {
      value: BIRTHDATE_REGEX,
      message: ERROR_MESSAGE_BIRTHDATE,
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      let { value } = e.target;
      value = value.replace(/[^0-9]/g, ''); // allow only numbers
      if (value.length > 4) {
        value = value.slice(0, 4) + '/' + value.slice(4);
      }
      setValue('birthDate', value);
    },
  });

  const spokenLanguage = register('spokenLanguage');

  const fieldOfExpertise = register('fieldOfExpertise', {
    required: 'Field of expertise is required',
  });

  const bio = register('bio', {
    required: 'Bio is required',
  });

  return (
    <>
      <div className={classNames(styles.formRow, styles.column, styles.avatarWrap)}>
        <p className={styles.avatarTitle}>Add Photo *</p>
        <label htmlFor={`${formId}_${avatar.name}`} className={styles.avatarLabel}></label>
        <input
          type="file"
          id={`${formId}-${avatar.name}`}
          name={avatar.name}
          accept="image/jpg, image/jpeg, image/png"
          className={styles.avatar}
          onChange={avatar.onChange}
          onBlur={avatar.onBlur}
          ref={avatar.ref}
        />
        {errors.avatar && (
          <div className={classNames(styles.avatarMessage, styles.errorMessage)}>{errors.avatar.message}</div>
        )}
      </div>
      <div className={styles.formRow}>
        <Input
          name={firstName.name}
          id={`${formId}-${firstName.name}`}
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
          id={`${formId}-${lastName.name}`}
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
        <Controller
          name="originCountry"
          control={control}
          render={({ field }) => (
            <Dropdown
              name={field.name}
              id={`${formId}-${field.name}`}
              label="Country of origin"
              options={countries}
              className={styles.formField}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={errors.originCountry?.message}
            />
          )}
        />
        <Controller
          name="province"
          control={control}
          render={({ field }) => (
            <Dropdown
              name={field.name}
              id={`${formId}-${field.name}`}
              label="Province"
              options={provinces}
              className={styles.formField}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={errors.province?.message}
            />
          )}
        />
      </div>
      <div className={styles.formRow}>
        <div className={styles.fieldWithCheckbox}>
          <Input
            name={birthDate.name}
            id={`${formId}-${birthDate.name}`}
            label="Date of Birth"
            placeholder="yyyy/mm"
            className={styles.formField}
            onChange={(e) => birthDate.onChange(e)}
            onBlur={birthDate.onBlur}
            ref={birthDate.ref}
            errorMessage={errors.birthDate?.message}
          />
          <fieldset className={styles.checkboxField}>
            <Controller
              name="isBirthdayVisible"
              control={control}
              render={({ field: { value, name, ...field } }) => (
                <input
                  type="checkbox"
                  id={`${formId}-${name}`}
                  className={styles.checkbox}
                  checked={value}
                  {...field}
                />
              )}
            />
            <label htmlFor={`${formId}-isBirthdayVisible`}>Show my birthday date on my profile.</label>
          </fieldset>
        </div>

        <Input
          name={spokenLanguage.name}
          id={`${formId}-${spokenLanguage.name}`}
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
          id={`${formId}-${fieldOfExpertise.name}`}
          label="Field of expertise *"
          className={styles.formField}
          onChange={fieldOfExpertise.onChange}
          onBlur={fieldOfExpertise.onBlur}
          ref={fieldOfExpertise.ref}
          errorMessage={errors.fieldOfExpertise?.message}
        />
        <Controller
          name="yearsOfExperience"
          control={control}
          rules={{
            required: 'Years of experience are required',
          }}
          render={({ field }) => (
            <Dropdown
              name={field.name}
              id={`${formId}-${field.name}`}
              label="Years of experience *"
              options={years}
              className={styles.formField}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={errors.yearsOfExperience?.message}
            />
          )}
        />
      </div>
      <div className={styles.formRow}>
        <Textarea
          name={bio.name}
          id={`${formId}-${bio.name}`}
          label="Bio *"
          rows={3}
          placeholder="Please provide a brief description about yourself."
          className={styles.formField}
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
