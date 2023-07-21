import classNames from 'classnames';
import React, { TextareaHTMLAttributes } from 'react';

import styles from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  rows?: number;
  placeholder?: string;
  errorMessage?: string;
  successMessage?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const TextareaInner = (
  {
    label,
    name,
    rows = 1,
    placeholder = '',
    errorMessage = '',
    successMessage = '',
    className = '',
    onChange,
    onBlur,
  }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <fieldset className={classNames(styles.fieldset, className)}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={classNames(
          styles.textarea,
          styles[`textarea-${rows}`],
          errorMessage && styles.error,
          successMessage && styles.success
        )}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      ></textarea>
      {errorMessage && <div className={classNames(styles.message, styles.errorMessage)}>{errorMessage}</div>}
      {!errorMessage && successMessage && (
        <div className={classNames(styles.message, styles.successMessage)}>{successMessage}</div>
      )}
    </fieldset>
  );
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(TextareaInner);

export default Textarea;
