import classNames from 'classnames';
import React, { FC, MouseEvent, KeyboardEvent } from 'react';

import IconSVG from '../IconSVG/IconSVG';

import styles from './ResumeInput.module.scss';

interface FileInputProps {
  title?: string;
  name: string;
  id?: string;
  className?: string;
  errorMessage?: string;
  onFileChange: (file: File | null) => void;
  onDeleteClick: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  selectedFile: File | null;
}

// TODO validation
const ResumeInput: FC<FileInputProps> = ({
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
        <span className={styles.fileName}>{selectedFile ? selectedFile.name : 'No selected File -'}</span>
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

export default ResumeInput;