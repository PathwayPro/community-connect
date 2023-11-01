import axios from 'axios';
import classNames from 'classnames';
import { FC, useState, MouseEvent, KeyboardEvent } from 'react';

import ResumeInput from '../../common/components/ResumeDownloadInput/ResumeDownloadInput';
import { fileSize, resumeFileFormat } from '../../common/utils/filesValidation';

import { StepRegisterProps, styles } from './FillUserProfileForm';

const Step3: FC<StepRegisterProps> = ({ formId, errors, register }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');

  const resume = register('resume', {
    validate: {
      checkSize: (value: FileList | undefined) => {
        if (!value?.length) return;
        return fileSize(value[0], 5);
      },
      checkFormat: (value: FileList | undefined) => {
        if (!value?.length) return;
        return resumeFileFormat(value[0]);
      },
    },
  });

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFile(null);
    setProgress(null);
    setUploadMessage("");
  };
  // TODO: save file to the redux store because when you back / forward files are not saving and you need to upload files again
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

  return (
    <>
      <div className={classNames(styles.formRow, styles.column)}>
        <ResumeInput
          title="Upload your CV or Resume"
          name={resume.name}
          id={`${formId}-${resume.name}`}
          onChange={(e) => handleFileChange(e)}
          onDeleteClick={handleDeleteClick}
          selectedFile={selectedFile}
          errorMessage={errors.resume?.message}
          className={styles.formFieldWide}
          ref={resume.ref}
          progress={progress!}
          uploadMessage={uploadMessage}
        />
      </div>
    </>
  );
};

export default Step3;
