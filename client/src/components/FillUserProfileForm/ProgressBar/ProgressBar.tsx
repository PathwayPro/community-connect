import classNames from 'classnames';
import { FC } from 'react';

import styles from './ProgressBar.module.scss';

type ProgressBarProps = {
  step: number;
};

const stepsLabels = ['Basic Information', 'Social Media', 'Resume / CV', 'Your Goal'];

const ProgressBar: FC<ProgressBarProps> = ({ step }) => {
  return (
    <div className={styles.progressBar}>
      {stepsLabels.map((label, index) => {
        const currentStep = index + 1;
        const stepClass = currentStep === step ? styles.active : currentStep < step ? styles.finished : styles.inactive;

        return (
          <div key={label} className={classNames(styles.block, stepClass)}>
            <div className={styles.dot} />
            <span className={styles.label}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
