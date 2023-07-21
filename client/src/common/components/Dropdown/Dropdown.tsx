import classNames from 'classnames';
import React, { SelectHTMLAttributes, useState } from 'react';

import styles from './Dropdown.module.scss';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  placeholder?: string;
  options: Option[];
  errorMessage?: string;
  successMessage?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

const DropdownInner = (
  {
    label,
    name,
    placeholder = 'Choose from the list',
    options,
    errorMessage = '',
    successMessage = '',
    className = '',
    onChange: onChangeProp,
    onBlur,
  }: DropdownProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) => {
  const [hasSelected, setHasSelected] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHasSelected(true);
    if (onChangeProp) {
      onChangeProp(event);
    }
  };

  return (
    <fieldset className={classNames(styles.fieldset, className)}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <select
        name={name}
        defaultValue=""
        className={classNames(
          styles.select,
          errorMessage && styles.error,
          successMessage && styles.success,
          !hasSelected && styles._notSelected
        )}
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <div className={classNames(styles.message, styles.errorMessage)}>{errorMessage}</div>}
      {!errorMessage && successMessage && (
        <div className={classNames(styles.message, styles.successMessage)}>{successMessage}</div>
      )}
    </fieldset>
  );
};

const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(DropdownInner);

export default Dropdown;
