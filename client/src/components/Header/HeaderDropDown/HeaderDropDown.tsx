import classNames from 'classnames';
import { FC, useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import styles from './HeaderDropDown.module.scss';

interface DropDownOption {
  label: string;
  link: string;
}

const dropDownOptions: DropDownOption[] = [
  { label: 'Apply for Mentorship', link: '/mentorship/apply' },
  { label: 'Become a Mentor', link: '/mentorship/become-mentor' },
];

interface HeaderDropDownProps {
  label: string;
}

const HeaderDropDown: FC<HeaderDropDownProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  const onOpenDropdown = () => {
    setIsOpen(true);
  };

  const onCloseDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    isOpen ? onCloseDropdown() : onOpenDropdown();
  };

  const onClickDropDownLink = (to: string) => {
    onCloseDropdown();
    navigate(to);
  };

  useEffect(() => {
    document.addEventListener('click', onCloseDropdown);
    return () => {
      document.removeEventListener('click', onCloseDropdown);
    };
  }, [onCloseDropdown]);

  return (
    <div className={styles.dropdown}>
      <NavLink
        className={({ isActive, isPending }) =>
          classNames(styles.link, isPending && styles.pending, isActive && styles.active)
        }
        to="/mentorship"
        onClick={(e) => toggleDropdown(e)}
      >
        {label}
      </NavLink>

      <Transition in={isOpen} timeout={300} unmountOnExit nodeRef={nodeRef}>
        {(state) => (
          <div className={classNames(styles.options, styles[state])} ref={nodeRef}>
            {dropDownOptions.map((option) => (
              <div
                className={styles.option}
                key={option.label}
                role="button"
                tabIndex={0}
                onClick={() => onClickDropDownLink(option.link)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default HeaderDropDown;
