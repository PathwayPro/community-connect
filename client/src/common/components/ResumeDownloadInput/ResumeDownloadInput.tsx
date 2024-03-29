import classNames from 'classnames';
import React, { MouseEvent, KeyboardEvent } from 'react';

import { truncateFileName } from '../../../common/utils/truncateUtils';
import useWindowSize, { BREAKPOINTS } from '../../../common/utils/useWindowSize';
import IconSVG from '../IconSVG/Button/IconSVG';

import styles from './ResumeDownloadInput.module.scss';

interface FileInputProps {
  title?: string;
  name: string;
  id: string;
  className?: string;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteClick: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  selectedFile: File | null;
}

const ResumeDownloadInputInner = (
  { title, name, id, className = '', errorMessage, onChange, onDeleteClick, selectedFile }: FileInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
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
          onChange={onChange}
          ref={ref}
        />
        <span className={styles.fileName}>
          {selectedFile ? truncateFileName(selectedFile.name, maxFileNameLength) : 'No selected File'}
        </span>
        <IconSVG name="deleteIcon" label="Delete file" onClick={onDeleteClick} />
      </div>
      {errorMessage && <div className={classNames(styles.message, styles.errorMessage)}>{errorMessage}</div>}
    </>
  );
};

const ResumeDownloadInput = React.forwardRef<HTMLInputElement, FileInputProps>(ResumeDownloadInputInner);

export default ResumeDownloadInput;
