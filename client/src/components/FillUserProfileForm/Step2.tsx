import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../../common/components/Input/Input';

import { StepProps } from './FillUserProfileForm';
import { IFormInput } from './formInputInterface';

import styles from './FillUserProfileForm.module.scss';

const Step2: FC<StepProps> = ({ formId }) => {
  const {
    register,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const linkedInURL = register('linkedInURL');
  const instagramURL = register('instagramURL');
  const twitterURL = register('twitterURL');
  const githubURL = register('githubURL');
  const behanceURL = register('behanceURL');

  return (
    <>
      <div className={styles.formRow}>
        <Input
          name={linkedInURL.name}
          id={`${formId}-${linkedInURL.name}`}
          label="LinkedIn"
          className={styles.formFieldWide}
          onChange={linkedInURL.onChange}
          onBlur={linkedInURL.onBlur}
          ref={linkedInURL.ref}
          errorMessage={errors.linkedInURL?.message}
        />
      </div>
      <div className={styles.formRow}>
        <Input
          name={instagramURL.name}
          id={`${formId}-${instagramURL.name}`}
          label="Instagram"
          className={styles.formFieldWide}
          onChange={instagramURL.onChange}
          onBlur={instagramURL.onBlur}
          ref={instagramURL.ref}
          errorMessage={errors.instagramURL?.message}
        />
      </div>
      <div className={styles.formRow}>
        <Input
          name={twitterURL.name}
          id={`${formId}-${twitterURL.name}`}
          label="Twitter"
          className={styles.formFieldWide}
          onChange={twitterURL.onChange}
          onBlur={twitterURL.onBlur}
          ref={twitterURL.ref}
          errorMessage={errors.twitterURL?.message}
        />
      </div>
      <div className={styles.formRow}>
        <Input
          name={githubURL.name}
          id={`${formId}-${githubURL.name}`}
          label="Github"
          className={styles.formFieldWide}
          onChange={githubURL.onChange}
          onBlur={githubURL.onBlur}
          ref={githubURL.ref}
          errorMessage={errors.githubURL?.message}
        />
      </div>
      <div className={styles.formRow}>
        <Input
          name={behanceURL.name}
          id={`${formId}-${behanceURL.name}`}
          label="Behance"
          autoComplete="on"
          className={styles.formFieldWide}
          onChange={behanceURL.onChange}
          onBlur={behanceURL.onBlur}
          ref={behanceURL.ref}
          errorMessage={errors.behanceURL?.message}
        />
      </div>
    </>
  );
};

export default Step2;
