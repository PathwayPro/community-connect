import classNames from 'classnames';
import { FC, useState, MouseEvent, KeyboardEvent } from 'react';

import ResumeInput from '../../common/components/ResumeDownloadInput/ResumeDownloadInput';

import { StepRegisterProps } from './FillUserProfileForm';

import styles from './FillUserProfileForm.module.scss';

const Step3: FC<StepRegisterProps> = ({ formId, errors, register }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // TODO: validation
  const resume = register('resume', {
    // validate: {
    //   fileFormat: (value: FileList | undefined) => {
    //     const file = value ? value[0] : undefined;
    //     if (
    //       file &&
    //       ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
    //         file.type
    //       )
    //     ) {
    //       return true;
    //     }
    //     return 'File must be a .docx or .pdf';
    //   },
    //   fileSize: (value: FileList | undefined) => {
    //     const file = value ? value[0] : undefined;
    //     if (file && file.size <= 5 * 1024 * 1024) {
    //       // 5MB
    //       return true;
    //     }
    //     return 'File must be less than 5MB';
    //   },
    // },
  });

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFile(null);
  };

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  return (
    <>
      <div className={classNames(styles.formRow, styles.column)}>
        <ResumeInput
          title="Upload your CV or Resume"
          name={resume.name}
          id={`${formId}-${resume.name}`}
          onFileChange={handleFileChange}
          onDeleteClick={handleDeleteClick}
          selectedFile={selectedFile}
          errorMessage={errors.resume?.message}
          className={styles.formFieldWide}
        />
      </div>
    </>
  );
};

export default Step3;
