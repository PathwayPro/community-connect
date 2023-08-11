import { FC, useState } from 'react';
import { useForm, UseFormRegister, UseFormSetValue, SubmitHandler, FieldErrors, Control } from 'react-hook-form';

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
}

const FillUserProfileForm: FC = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      isBirthdayVisible: false,
    },
  });
  const formId = 'fillUserProfile';

  // TODO: send data to backend
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    if (step != 4) {
      setStep((prevStep) => prevStep + 1);
    } else {
      console.log(values);
      dispatch(closeModal());
    }
  };

  return (
    <form>
      <Heading tagType="h4" className={styles.title}>
        {step === 1 && 'Welcome!'}
        {step === 2 && 'Social Media'}
        {step === 3 && 'Resume / CV'}
        {step === 4 && 'Your Goal'}
      </Heading>
      <ProgressBar step={step} />
      <div className={styles.content}>
        {step === 1 && (
          <Step1 register={register} formId={formId} errors={errors} control={control} setValue={setValue} />
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
