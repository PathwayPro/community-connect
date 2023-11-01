import axios from 'axios';
import classNames from 'classnames';
import { FC, useState, MouseEvent, KeyboardEvent, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useApplyForMentorshipMutation } from '../../../app/slices/apiSlice';
import { showModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
import ResumeDownloadInput from '../../../common/components/ResumeDownloadInput/ResumeDownloadInput';
import Textarea from '../../../common/components/Textarea/Textarea';
import { fileSize, resumeFileFormat } from '../../../common/utils/filesValidation';

import styles from './ApplyForMentorshipForm.module.scss';

interface IFormInput {
  message: string;
  resume: FileList;
}

const formId = 'applyForMentorshipForm';

const ApplyForMentorshipForm: FC = () => {
  const roles = useAppSelector((state) => state.auth.user?.roles);
  const isLogin = useAppSelector((state) => state.auth.login);

  const dispatch = useAppDispatch();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>({});

  const message = register('message', {
    required: 'Message is required',
  });

  const resume = register('resume', {
    validate: {
      checkSize: (value: FileList) => {
        return fileSize(value[0], 5);
      },
      checkFormat: (value: FileList) => {
        return resumeFileFormat(value[0]);
      },
    },
  });

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFile(null);
    setProgress(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    setSelectedFile(files[0]);
    const formData = new FormData();
    formData.append('file', selectedFile!);
    setUploadMessage("Uploading...");
    axios.post("http://httpbin.org/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (e) => {
        setProgress(e.progress! * 100);
      },
    })
      .then(() => {
        setUploadMessage("");
        setProgress(null);
      })
      .catch(err => {
        setUploadMessage("Upload failed");
        setProgress(null);
        console.log(err);
      });
    resume.onChange(e);
  };

  const [applyMenteeRequest, { isLoading }] = useApplyForMentorshipMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    const formData = new FormData();
    formData.append('message', values.message.trim());
    formData.append('resume', values.resume[0]);
    await applyMenteeRequest(formData)
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
      {isLogin && roles?.includes('user') && (
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
              <label className={styles.applyLabel} htmlFor={`${formId}-${message.name}`}>
                Tell us why you want a mentor?
              </label>
              <Textarea
                name={message.name}
                id={`${formId}-${message.name}`}
                rows={4}
                onChange={message.onChange}
                onBlur={message.onBlur}
                ref={message.ref}
                errorMessage={errors.message?.message}
              />
            </div>
            <div className={styles.formRow}>
              <p className={classNames(styles.applyLabel, styles.center)}>Upload your CV or Resume</p>
              <ResumeDownloadInput
                name={resume.name}
                id={`${formId}-${resume.name}`}
                onChange={(e) => handleFileChange(e)}
                onDeleteClick={handleDeleteClick}
                selectedFile={selectedFile}
                errorMessage={errors.resume?.message}
                ref={resume.ref}
                className={styles.applyResume}
                progress={progress!}
                uploadMessage={uploadMessage}
              />
            </div>
            <Button label="Apply" size="small" isSubmit onClick={handleSubmit(onSubmit)} />
          </form>
        </div>
      )}
      {isLogin && !roles?.includes('user') && (
        <div className={styles.block}>
          <div className={classNames(styles.form, styles.center)}>
            <p>Please complete your user profile to&nbsp;access this service. Click here to&nbsp;complete</p>
            <Button
              label="Update Profile"
              size="small"
              isSubmit
              onClick={() => dispatch(showModal({ content: MODAL_TYPE.FILL_USER_PROFILE, closeOnOverlayClick: false }))}
            />
          </div>
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

export default ApplyForMentorshipForm;
