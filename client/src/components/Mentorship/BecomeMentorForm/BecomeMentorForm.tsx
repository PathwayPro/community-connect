import classNames from 'classnames';
import { FC, useState, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useBecomeMentorMutation } from '../../../app/slices/apiSlice';
import { showModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
import Dropdown from '../../../common/components/Dropdown/Dropdown';
import Input from '../../../common/components/Input/Input';
import { NUMBER_REGEX, ERROR_MESSAGE_NUMBER } from '../../../common/utils/formComponentsUtils';
import { years, availabilityOptions } from '../../../common/utils/userProfile';

import styles from './BecomeMentorForm.module.scss';

interface IFormInput {
  firstName?: string;
  lastName?: string;
  fieldOfExpertise: string;
  yearsOfExperience: number;
  numberOfMentees: number;
  availability: number;
  otherMentorships: string;
}

const formId = 'becomeMentorForm';

const BecomeMentorForm: FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isLogin = useAppSelector((state) => state.auth.login);

  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
    },
  });

  useEffect(() => {
    if (!user) return;
    reset({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
    });
  }, [user]);

  const firstName = register('firstName');

  const lastName = register('lastName');

  const fieldOfExpertise = register('fieldOfExpertise', {
    required: 'Field of expertise is required',
  });

  const numberOfMentees = register('numberOfMentees', {
    required: 'Number of mentees is required',
    pattern: {
      value: NUMBER_REGEX,
      message: ERROR_MESSAGE_NUMBER,
    },
  });

  const otherMentorships = register('otherMentorships', {
    required: 'Provide any details',
  });

  const [applyMentorRequest, { isLoading }] = useBecomeMentorMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    const requestData = { ...values };
    delete requestData.firstName;
    delete requestData.lastName;

    await applyMentorRequest(requestData)
      .unwrap()
      .then(() => {
        setLoadingMessage('');
        setErrorMessage('');
        setSuccessMessage('Your application successfully sent');
      })
      .catch(() => {
        setLoadingMessage('');
        setSuccessMessage('');
        setErrorMessage('Please, try later');
      });
  };

  useEffect(() => {
    if (isLoading) {
      setSuccessMessage('');
      setErrorMessage('');
      setLoadingMessage('Loading...');
    }
  }, [isLoading]);

  return (
    <>
      {isLogin && (
        <div className={styles.block}>
          <form className={styles.form}>
            {loadingMessage && (
              <div className={classNames(styles.message, styles.loadingMessage)}>{loadingMessage}</div>
            )}
            {errorMessage && <div className={classNames(styles.message, styles.errorMessage)}>{errorMessage}</div>}
            {successMessage && (
              <div className={classNames(styles.message, styles.successMessage)}>{successMessage}</div>
            )}
            <div className={styles.formRow}>
              <Input
                id={`${formId}-${firstName.name}`}
                name={firstName.name}
                label="First name *"
                autoComplete="on"
                className={styles.formField}
                onChange={firstName.onChange}
                onBlur={firstName.onBlur}
                ref={firstName.ref}
                errorMessage={errors.firstName?.message}
                disabled
              />
              <Input
                id={`${formId}-${lastName.name}`}
                name={lastName.name}
                label="Last name *"
                autoComplete="on"
                className={styles.formField}
                onChange={lastName.onChange}
                onBlur={lastName.onBlur}
                ref={lastName.ref}
                errorMessage={errors.lastName?.message}
                disabled
              />
            </div>
            <div className={styles.formRow}>
              <Input
                id={`${formId}-${fieldOfExpertise.name}`}
                name={fieldOfExpertise.name}
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
              <Input
                id={`${formId}-${numberOfMentees.name}`}
                name={numberOfMentees.name}
                label="Number of mentees you can accommodate *"
                className={styles.formField}
                onChange={numberOfMentees.onChange}
                onBlur={numberOfMentees.onBlur}
                ref={numberOfMentees.ref}
                errorMessage={errors.numberOfMentees?.message}
              />
              <Controller
                name="availability"
                control={control}
                rules={{
                  required: 'Availability is required',
                }}
                render={({ field }) => (
                  <Dropdown
                    name={field.name}
                    id={`${formId}-${field.name}`}
                    label="Availability (hours a month) *"
                    options={availabilityOptions}
                    className={styles.formField}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    errorMessage={errors.availability?.message}
                  />
                )}
              />
            </div>
            <div className={styles.formRow}>
              <Input
                id={`${formId}-${otherMentorships.name}`}
                name={otherMentorships.name}
                label="Have you provided mentorship in other organizations (yes or no). If yes, provide details"
                className={classNames(styles.formFieldLabel)}
                onChange={otherMentorships.onChange}
                onBlur={otherMentorships.onBlur}
                ref={otherMentorships.ref}
                errorMessage={errors.otherMentorships?.message}
              />
            </div>
            <Button
              label="Apply"
              size="small"
              isSubmit
              onClick={handleSubmit(onSubmit)}
              className={styles.mentorshipButton}
            />
          </form>
        </div>
      )}
      {!isLogin && (
        <div className={styles.block}>
          <div className={classNames(styles.form, styles.center)}>
            <p>
              Please log in&nbsp;to&nbsp;access this service. Click here log in&nbsp;and to&nbsp;create a&nbsp;user
              profile if&nbsp;you do&nbsp;not already have one
            </p>
            <Button
              label="LogIn"
              size="small"
              isSubmit
              onClick={() => dispatch(showModal({ content: MODAL_TYPE.LOGIN }))}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BecomeMentorForm;
