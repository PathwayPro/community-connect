import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  autoComplete?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputInner = (
  {
    label,
    name,
    type = 'text',
    placeholder = '',
    errorMessage = '',
    autoComplete = 'off',
    className = '',
    onChange,
    onBlur,
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <fieldset className={classNames(styles.fieldset, className)}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={classNames(styles.input, errorMessage && styles.error)}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      ></input>
      <div className={styles.errorMessage}>{errorMessage}</div>
    </fieldset>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(InputInner);

export default Input;
