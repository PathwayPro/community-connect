import classNames from 'classnames';
import { FC, useState, MouseEvent, KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';

import IconSVG from '../../common/components/IconSVG/IconSVG';

import { StepProps } from './FillUserProfileForm';
import { IFormInput } from './formInputInterface';

import styles from './FillUserProfileForm.module.scss';

const Step3: FC<StepProps> = () => {
  const { register } = useForm<IFormInput>({ mode: 'onChange' });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const resume = register('resume');

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFile(files[0]);
      resume.onChange(e);
    }
  };

  return (
    <>
      <div className={classNames(styles.formRow, styles.column)}>
        <p className={styles.resumeTitle}>Upload your CV or Resume</p>
        <label htmlFor={resume.name} className={classNames(styles.resumeLabel, styles.formFieldWide)}></label>
        <div className={styles.inputWrap}>
          <input
            type="file"
            id={resume.name}
            name={resume.name}
            className={styles.input}
            onChange={handleFileChange}
            onBlur={resume.onBlur}
            ref={resume.ref}
          />
          <span className={styles.fileName}>{selectedFile ? selectedFile.name : 'No selected File -'}</span>
          <IconSVG
            name="deleteIcon"
            label="Delete file"
            color="black"
            size="medium"
            onClick={handleDeleteClick}
            className={styles.deleteIcon}
          />
        </div>
      </div>
    </>
  );
};

export default Step3;
