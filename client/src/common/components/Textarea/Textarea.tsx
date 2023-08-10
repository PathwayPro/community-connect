import classNames from 'classnames';
import React, { TextareaHTMLAttributes } from 'react';

import styles from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  id: string;
  rows?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
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
    id,
    rows = 3,
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
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={id}
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
