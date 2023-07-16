import { FC, useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

import { useAppDispatch } from '../../app/hooks';
import { closeModal } from '../../app/slices/modalSlice';
import Button from '../../common/components/Button/Button';

import { IFormInput } from './formInputInterface';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export interface StepProps {
  register: UseFormRegister<IFormInput>;
  data: Partial<IFormInput>;
}

const FillUserProfileForm: FC = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const watchedFields = watch();

  const onSubmit = (data: IFormInput) => {
    console.log('Data:', data);
    dispatch(closeModal());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && <Step1 register={register} data={watchedFields} />}
      {step === 2 && <Step2 register={register} data={watchedFields} />}
      {step === 3 && <Step3 register={register} data={watchedFields} />}
      <Button
        label={step === 1 ? 'Skip' : 'Back'}
        onClick={step === 1 ? () => dispatch(closeModal()) : () => setStep((prevStep) => prevStep - 1)}
      />
      <Button
        label={step === 3 ? 'Finish' : 'Next'}
        onClick={step === 3 ? handleSubmit(onSubmit) : () => setStep((prevStep) => prevStep + 1)}
      />
    </form>
  );
};

export default FillUserProfileForm;
