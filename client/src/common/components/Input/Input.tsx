import classNames from 'classnames';
import React, { InputHTMLAttributes, useState } from 'react';

import EyeIcon from './EyeIcon';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  id?: string;
  type?: string;
  value?: string;
  isPassword?: boolean;
  placeholder?: string;
  errorMessage?: string;
  successMessage?: string;
  autoComplete?: string;
  disabled?: boolean;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputInner = (
  {
    label,
    name,
    id,
    type = 'text',
    value,
    isPassword = false,
    placeholder = '',
    errorMessage = '',
    successMessage = '',
    autoComplete = 'off',
    disabled = false,
    className = '',
    onChange,
    onBlur,
    onKeyDown,
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <fieldset className={classNames(styles.fieldset, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.eyeIconAndInput}>
        {isPassword && (
          <div className={styles.eyeIcon} onClick={togglePasswordVisibility}>
            <EyeIcon visible={isPasswordVisible} />
          </div>
        )}
        <input
          name={name}
          id={id}
          type={isPasswordVisible ? 'text' : type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={classNames(
            styles.input,
            errorMessage && styles.error,
            successMessage && styles.success,
            disabled && styles.disabled
          )}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          ref={ref}
          disabled={disabled}
        ></input>
      </div>

      {errorMessage && <div className={classNames(styles.message, styles.errorMessage)}>{errorMessage}</div>}
      {!errorMessage && successMessage && (
        <div className={classNames(styles.message, styles.successMessage)}>{successMessage}</div>
      )}
    </fieldset>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(InputInner);

export default Input;
