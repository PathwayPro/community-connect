import { FC, useState } from 'react';
import { useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { closeModal } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';
import Heading from '../../common/components/Heading/Heading';

import { IFormInput } from './formInputInterface';
import ProgressBar from './ProgressBar/ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import styles from './FillUserProfileForm.module.scss';

export interface StepProps {
  register: UseFormRegister<IFormInput>;
  data: Partial<IFormInput>;
}

const FillUserProfileForm: FC = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const watchedFields = watch();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    const bodyObject = {
      firstName: values.firstName,
      lastName: values.lastName,
      originCountry: values.originCountry,
      province: values.province,
      birthDate: values.birthDate,
      spokenLanguage: values.spokenLanguage,
      fieldOfExpertise: values.fieldOfExpertise,
      yearsOfExperience: values.yearsOfExperience,
      bio: values.bio,
    };

    dispatch(closeModal());
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading tagType="h4" className={styles.title}>
        {step === 1 && 'Welcome back Niloofar!'}
        {step === 2 && 'Social Media'}
        {step === 3 && 'Resume / CV'}
        {step === 4 && 'Your Goal'}
      </Heading>
      <ProgressBar step={step} />
      <div className={styles.content}>
        {step === 1 && <Step1 register={register} data={watchedFields} />}
        {step === 2 && <Step2 register={register} data={watchedFields} />}
        {step === 3 && <Step3 register={register} data={watchedFields} />}
        {step === 4 && <Step4 register={register} data={watchedFields} />}
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
          onClick={step === 4 ? handleSubmit(onSubmit) : () => setStep((prevStep) => prevStep + 1)}
        />
      </div>
    </form>
  );
};

export default FillUserProfileForm;
