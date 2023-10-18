import classNames from 'classnames';
import { FC } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';

import styles from './Dropdown.module.scss';

import { ReactComponent as DDIcon } from '../../../images/Icon/dropdown-arrow.svg';

interface OptionType {
  value: string;
  label: string;
}

interface DropdownProps {
  options: OptionType[];
  defaultValue?: OptionType;
  name: string;
  id: string;
  label?: string;
  className?: string;
  classNamePrefix?: string;
  placeholder?: string;
  isSearchable?: boolean;
  onChange: (value: string | null | undefined) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const DropdownIndicator = (props: DropdownIndicatorProps<OptionType, false>) => {
  return (
    <components.DropdownIndicator {...props}>
      <DDIcon />
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
  onChange,
  onBlur,
  errorMessage,
}) => {
  return (
    <fieldset className={classNames(styles.fieldset, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Select
        className={classNames(errorMessage && styles.error)}
        classNamePrefix={classNamePrefix}
        defaultValue={defaultValue}
        name={name}
        id={id}
        options={options}
        placeholder={placeholder}
        isSearchable={isSearchable}
        components={{ DropdownIndicator }}
        onChange={(newValue) => onChange(newValue?.value)}
        onBlur={onBlur}
      />
      {errorMessage && <div className={classNames(styles.message, styles.errorMessage)}>{errorMessage}</div>}
    </fieldset>
  );
};

export default Dropdown;
