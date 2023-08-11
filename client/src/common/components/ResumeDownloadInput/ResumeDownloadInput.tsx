import classNames from 'classnames';
import React, { FC, MouseEvent, KeyboardEvent } from 'react';

import useWindowSize, { BREAKPOINTS } from '../../../common/utils/useWindowSize';
import IconSVG from '../IconSVG/IconSVG';

import styles from './ResumeDownloadInput.module.scss';

interface FileInputProps {
  title?: string;
  name: string;
  id: string;
  className?: string;
  errorMessage?: string;
  onFileChange: (file: File | null) => void;
  onDeleteClick: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  selectedFile: File | null;
}

const truncateFileName = (fileName: string, maxLength: number): string => {
  if (fileName.length <= maxLength) {
    return fileName;
  }

  const fileFormat = fileName.split('.').pop();
  const truncatedName = fileName.slice(0, maxLength - 4);
  return `${truncatedName}[...].${fileFormat}`;
};

// TODO validation
const ResumeDownloadInput: FC<FileInputProps> = ({
  title,
  name,
  id,
  className = '',
  errorMessage,
  onFileChange,
  onDeleteClick,
  selectedFile,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      onFileChange(files[0]);
    }
  };

  const windowSize = useWindowSize();
  const maxFileNameLength = windowSize.width > BREAKPOINTS.small ? 60 : 20;

  return (
    <>
      {title && <p className={styles.title}>{title}</p>}
      <label htmlFor={id} className={classNames(styles.label, className)} />
      <div className={styles.inputWrap}>
        <input
          type="file"
          id={id}
          name={name}
          accept=".docx,application/pdf"
          className={styles.input}
          onChange={handleFileChange}
        />
        <span className={styles.fileName}>
          {selectedFile ? truncateFileName(selectedFile.name, maxFileNameLength) : 'No selected File'}
        </span>
        <IconSVG
          name="deleteIcon"
          label="Delete file"
          color="black"
          size="medium"
          onClick={onDeleteClick}
          className={styles.deleteIcon}
        />
      </div>
      {errorMessage && <div className={classNames(styles.resumeMessage, styles.errorMessage)}>{errorMessage}</div>}
    </>
  );
};

export default ResumeDownloadInput;
