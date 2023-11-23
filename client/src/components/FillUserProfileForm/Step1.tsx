import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useFieldArray, Controller } from 'react-hook-form';

import { useGetCountriesQuery, useGetProvincesQuery } from '../../app/slices/apiSlice';
import Dropdown from '../../common/components/Dropdown/Dropdown';
import Input from '../../common/components/Input/Input';
import Textarea from '../../common/components/Textarea/Textarea';
import { fileSize, imageFileFormat } from '../../common/utils/filesValidation';
import {
  NAME_REGEX,
  ERROR_MESSAGE_NAME,
} from '../../common/utils/formComponentsUtils';
import { years, allInterests } from '../../common/utils/userProfile';

import { StepAllProps, styles } from './FillUserProfileForm';

import { ReactComponent as XIcon } from '../../images/Icon/x.svg';

interface OptionType {
  value: string;
  label: string;
}

const Step1: FC<StepAllProps> = ({ formId, errors, register, control, setValue, watch }) => {
  const {
    fields: languageFields,
    append: languageAppend,
    remove: languageRemove,
  } = useFieldArray({
    control,
    name: "spokenLanguage",
  });
  const {
    fields: expertiseFields,
    append: expertiseAppend,
    remove: expertiseRemove,
  } = useFieldArray({
    control,
    name: "fieldOfExpertise",
    rules: {
      required: "Field of expertise is required",
    },
  });
  const {
    fields: interestFields,
    append: interestAppend,
    remove: interestRemove,
  } = useFieldArray({
    control,
    name: "interestList",
  });

  const languages = watch("spokenLanguage");
  const expertises = watch("fieldOfExpertise");
  const interests = watch("interestList");

  const [language, setLanguage] = useState('');
  const languageOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLanguage(value);
  };
  const languageOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const trimmedInput = language.trim();

    if ((key === ',' || key === "Enter") && trimmedInput.length) {
      e.preventDefault();
      if (!findDuplicate(trimmedInput, languages)) return;
      languageAppend({ value: trimmedInput });
      setLanguage('');
    }
  };

  const [expertise, setExpertise] = useState('');
  const expertiseOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setExpertise(value);
  };
  const expertiseOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const trimmedInput = expertise.trim();

    if ((key === ',' || key === "Enter") && trimmedInput.length) {
      e.preventDefault();
      if (!findDuplicate(trimmedInput, expertises)) return;
      expertiseAppend({ value: trimmedInput });
      setExpertise('');
    }
  };

  const interestOnChange = (newValue: any) => {
    if (!findDuplicate(newValue, interests)) return;
    interestAppend({ value: newValue });
  };

  const findDuplicate = (input: string, array: { value: string; }[] | undefined) => {
    const newArray = [];
    if (array === undefined) return true;
    for (const item of array) {
      newArray.push(item.value);
    }
    if (newArray.includes(input)) {
      return false;
    }
    return true;
  };

  // Get countries list
  const [preparedValues, setPreparedValues] = useState([] as OptionType[]);
  const [preparedProvinces, setPreparedProvinces] = useState([] as OptionType[]);
  const { data: contriesQuery } = useGetCountriesQuery({});
  const { data: provincesQuery } = useGetProvincesQuery({});

  useEffect(() => {
    if (!provincesQuery) return;
    const preparedProvinces: OptionType[] = provincesQuery.map((element: Record<string, string>) => {
      const preparedElement: OptionType = { value: '', label: '' };
      preparedElement.value = element.id;
      preparedElement.label = `${element.provinceAndTerritory}, ${element.abbreviation}`;
      return preparedElement;
    });
    setPreparedProvinces(preparedProvinces);
  }, [provincesQuery]);
  useEffect(() => {
    if (!contriesQuery) return;
    const preparedValues1: OptionType[] = contriesQuery.map((element: Record<string, string>) => {
      const preparedElement: OptionType = { value: '', label: '' };
      preparedElement.value = element.id;
      preparedElement.label = element.country;
      return preparedElement;
    });
    preparedValues1.sort((a, b) => a.label.localeCompare(b.label));
    setPreparedValues(preparedValues1);
    return;
  }, [contriesQuery]);

  // TODO: add file preview
  // TODO: save file to the redux store because when you back / forward files are not saving and you need to upload files again
  const avatar = register('image', {
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
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue('birthDate', e.target.value);
    },
  });

  const bio = register('bio', {});

  return (
    <>
      <button onClick={(e) => { e.preventDefault(); console.log(preparedProvinces); }}>CHELLO</button>
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
        {errors.image && <div className={styles.errorMessage}>{errors.image.message}</div>}
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
          name="countryId"
          control={control}
          render={({ field }) => (
            <Dropdown
              name={field.name}
              id={`${formId}-${field.name}`}
              label="Country of origin"
              options={preparedValues}
              className={styles.formField}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={errors.countryId?.message}
            />
          )}
        />
        <Controller
          name="provinceId"
          control={control}
          render={({ field }) => (
            <Dropdown
              name={field.name}
              id={`${formId}-${field.name}`}
              label="Province"
              options={preparedProvinces}
              className={styles.formField}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={errors.provinceId?.message}
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
            type="date"
            className={styles.formField}
            onChange={(e) => birthDate.onChange(e)}
            onBlur={birthDate.onBlur}
            ref={birthDate.ref}
            errorMessage={errors.birthDate?.message}
          />
          <fieldset className={styles.checkboxField}>
            <Controller
              name="isBirthDateVisible"
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
            <label htmlFor={`${formId}-isBirthDateVisible`}>Show my birthday date on my profile.</label>
          </fieldset>
        </div>

        <div className={styles.column}>
          <Input
            label="Spoken languages"
            name={"spokenLanguage"}
            id={`${formId}-spokenLanguage`}
            value={language}
            placeholder="List separated by commas"
            className={styles.formField}
            onChange={languageOnChange}
            onKeyDown={languageOnKeyDown}
          />
          {languageFields && (
            <div className={styles.items}>
              {languageFields.map((item, index) => {
                return (
                  <>
                    <span key={item.id} className={styles.item}>
                      {languageFields[index].value}
                      <XIcon className={styles.itemIcon} onClick={() => languageRemove(index)} />
                    </span>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
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
      <div className={styles.column}>
        <Input
          label="Field of expertise *"
          name={"fieldOfExpertise"}
          id={`${formId}-fieldOfExpertise`}
          value={expertise}
          placeholder="List separated by commas"
          onChange={expertiseOnChange}
          onKeyDown={expertiseOnKeyDown}
          errorMessage={errors.fieldOfExpertise?.root?.message}
        />
        {expertises && (
          <div className={styles.items}>
            {expertiseFields.map((item, index) => {
              return (
                <>
                  <span key={item.id} className={styles.item}>
                    {expertises[index].value}
                    <XIcon className={styles.itemIcon} onClick={() => expertiseRemove(index)} />
                  </span>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.column}>
        <Dropdown
          name={"interestList"}
          id={`${formId}-interestList`}
          label="Interests"
          options={allInterests}
          className={styles.interests}
          onChange={interestOnChange}
        />
        {interests && (
          <div className={styles.items}>
            {interestFields.map((item, index) => {
              return (
                <>
                  <span key={item.id} className={styles.item}>
                    {interests[index].value}
                    <XIcon className={styles.itemIcon} onClick={() => interestRemove(index)} />
                  </span>
                </>
              );
            })}
          </div>
        )}


      </div>
      <div className={styles.formRow}>
        <Textarea
          name={bio.name}
          id={`${formId}-${bio.name}`}
          label="Bio"
          rows={3}
          placeholder="Please provide a brief description about yourself."
          className={styles.formField}
          onChange={bio.onChange}
          onBlur={bio.onBlur}
          ref={bio.ref}
        />
      </div>
    </>
  );
};

export default Step1;
