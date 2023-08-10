import classNames from 'classnames';
import { FC } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';

import styles from './Dropdown.module.scss';

interface ColourOption {
  readonly value: string;
  readonly label: string;
}

interface DropdownProps {
  options: readonly ColourOption[];
  defaultValue?: ColourOption;
  name: string;
  id: string;
  label?: string;
  className?: string;
  classNamePrefix?: string;
  placeholder?: string;
  isSearchable?: boolean;
}

const DropdownIndicator = (props: DropdownIndicatorProps<ColourOption, true>) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6"  viewBox="0 0 10 6">
        <path d="M0.6,1.1l4.2,4.2c0.1,0.1,0.3,0.1,0.5,0l4.2-4.2c0.2-0.2,0.1-0.6-0.2-0.6H0.8C0.5,0.5,0.4,0.9,0.6,1.1z" fill="black" />
      </svg>
    </components.DropdownIndicator>
  );
};

const Dropdown: FC<DropdownProps> = ({
  options,
  defaultValue,
  name,
  id,
  label,
  className = '',
  classNamePrefix = 'select',
  placeholder = 'Choose from the list',
  isSearchable = false,
}) => {
  return (
    <fieldset className={classNames(styles.fieldset, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Select
        classNamePrefix={classNamePrefix}
        defaultValue={defaultValue}
        name={name}
        id={id}
        options={options}
        placeholder={placeholder}
        isSearchable={isSearchable}
        components={{ DropdownIndicator }}
      />
      {/* {errorMessage && <div className={classNames(styles.message, styles.errorMessage)}>{errorMessage}</div>} */}
    </fieldset>
  );
};

export default Dropdown;
