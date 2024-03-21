import { FC, useState } from 'react';
import { useForm, UseFormRegister, UseFormSetValue, UseFormWatch, SubmitHandler, FieldErrors, Control } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { useCreateUserProfileMutation } from '../../app/slices/apiSlice';
import { closeModal } from '../../app/slices/modalSlice';
import { setUserData } from '../../app/slices/userSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';
import { ERROR_MESSAGES } from '../../common/utils/errors';

import { IFormInput } from './formInputInterface';
import ProgressBar from './ProgressBar/ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import styles from './FillUserProfileForm.module.scss';

interface StepGeneralProps {
  formId: string;
  errors: FieldErrors<IFormInput>;
}
export interface StepControlProps extends StepGeneralProps {
  control: Control<IFormInput>;
}

export interface StepRegisterProps extends StepGeneralProps {
  register: UseFormRegister<IFormInput>;
}

export interface StepAllProps extends StepControlProps, StepRegisterProps {
  setValue: UseFormSetValue<IFormInput>;
  watch: UseFormWatch<IFormInput>;
}

const formId = 'fillUserProfile';

const FillUserProfileForm: FC = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      isBirthDateVisible: false,
    },
  });

  const getLanguages = (languages: { value: string; }[]) => {
    const languagesArray = languages.map((l) => l.value);
    return languagesArray;
  };

  const getExpertises = (expertises: { value: string; }[]) => {
    const items = expertises.map((e) => e.value);
    return items.join(", ");
  };

  const getInterests = (interests: { value: string; }[]) => {
    const interestsArray = interests.map((i) => i.value);
    return interestsArray;
  };

  const [createProfile] = useCreateUserProfileMutation();
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    if (step != 4) {
      setStep((prevStep) => prevStep + 1);
    } else {
      const { birthDate, spokenLanguage, fieldOfExpertise, interestList, ...profileData } = values;

      // const laguagesArray = spokenLanguage ? spokenLanguage?.replaceAll(' ', '').split(',') : [];
      let languagesArray: string[] = [];
      if (spokenLanguage) {
        languagesArray = getLanguages(spokenLanguage);
      }

      let fieldOfExpertiseString = "";
      if (fieldOfExpertise) {
        fieldOfExpertiseString = getExpertises(fieldOfExpertise);
      }

      let interestsArray: string[] = [];
      if (interestList) {
        interestsArray = getInterests(interestList);
      }
      // TODO If birthDate were passed, update it to the proper date format (replace new Date())
      const birtDateToDate = birthDate || null;
      await createProfile({
        ...profileData,
        birthDate: birtDateToDate,
        spokenLanguage: languagesArray,
        fieldOfExpertise: fieldOfExpertiseString,
        interests: interestsArray,
      })
        .unwrap()
        .then((data) => {
          // TODO: save profile data to the store
          dispatch(closeModal());
          dispatch(setUserData(data));
          console.log(data);
        })
        .catch((error) => {
          if (error?.data?.message) {
            setErrorMessage(error?.data?.message);
          } else {
            setErrorMessage(ERROR_MESSAGES.SERVER_ERROR);
          }
        });
    }
  };

  return (
    <form className={styles.form}>
      <Heading tagType="h4" className={styles.title}>
        {step === 1 && 'Welcome!'}
        {step === 2 && 'Social Media'}
        {step === 3 && 'Resume / CV'}
        {step === 4 && 'Your Goal'}
      </Heading>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <ProgressBar step={step} />
      <div className={styles.content}>
        {step === 1 && (
          <Step1
            register={register}
            formId={formId}
            errors={errors}
            control={control}
            setValue={setValue}
            watch={watch}
          />
        )}
        {step === 2 && <Step2 register={register} formId={formId} errors={errors} />}
        {step === 3 && <Step3 register={register} formId={formId} errors={errors} />}
        {step === 4 && <Step4 formId={formId} errors={errors} control={control} />}
      </div>
      <div className={styles.btnWrapper}>
        <Button
          size="small"
          label={step === 1 ? 'Skip' : 'Back'}
          color="blueLight"
          onClick={step === 1 ? () => dispatch(closeModal()) : () => setStep((prevStep) => prevStep - 1)}
        />
        <Button
          size="small"
          label={step === 4 ? 'Finish' : 'Next'}
          isSubmit={step === 4 ? true : false}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
};

export default FillUserProfileForm;

export { styles };
