import classNames from 'classnames';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import Dropdown from '../../common/components/Dropdown/Dropdown';
import Input from '../../common/components/Input/Input';
import Textarea from '../../common/components/Textarea/Textarea';
import { fileSize, imageFileFormat } from '../../common/utils/filesValidation';
import {
  NAME_REGEX,
  ERROR_MESSAGE_NAME,
  BIRTHDATE_REGEX,
  ERROR_MESSAGE_BIRTHDATE,
  LANGUAGES_REGEX,
  LANGUAGES_MESSAGE_NAME,
} from '../../common/utils/formComponentsUtils';
import { years } from '../../common/utils/userProfile';

import { StepAllProps, styles } from './FillUserProfileForm';

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

const Step1: FC<StepAllProps> = ({ formId, errors, register, control, setValue }) => {
  // TODO: add file preview
  // TODO: save file to the redux store because when you back / forward files are not saving and you need to upload files again
  const avatar = register('avatar', {
    required: false,
    validate: {
      checkFormat: (value: FileList | undefined) => {
        if (!value?.length) return;
        return imageFileFormat(value[0]);
      },
      checkSize: (value: FileList | undefined) => {
        if (!value?.length) return;
        return fileSize(value[0], 8);
      },
    },
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
      if (
        (e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === 'deleteContentBackward') ||
        (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.key === 'Backspace')
      ) {
        return;
      }
      // TODO: fix unexpected behaviour: if delete some numbers from from year and month string will be updated incorrectly
      value = value.replace(/[^0-9]/g, ''); // allow only numbers
      if (value.length >= 4) {
        value = value.slice(0, 4) + '/' + value.slice(4);

        if (value.length >= 7) {
          value = value.slice(0, 7) + '/' + value.slice(7);
        }
      }

      setValue('birthDate', value);
    },
  });

  const spokenLanguage = register('spokenLanguage', {
    pattern: {
      value: LANGUAGES_REGEX,
      message: LANGUAGES_MESSAGE_NAME,
    },
  });

  const fieldOfExpertise = register('fieldOfExpertise', {
    required: 'Field of expertise is required',
  });

  const bio = register('bio', {
    required: 'Bio is required',
  });

  return (
    <>
      <div className={classNames(styles.formRow, styles.column, styles.avatarWrap)}>
        <p className={styles.avatarTitle}>Add Photo</p>
        <label htmlFor={`${formId}-${avatar.name}`} className={styles.avatarLabel}></label>
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
            placeholder="yyyy/mm/dd"
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
