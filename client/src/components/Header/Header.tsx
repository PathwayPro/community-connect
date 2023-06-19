import classNames from 'classnames';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Button from '../../common/components/Button/Button';

import styles from './Header.module.scss';

const Header: FC = () => {
  const onLoginClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
  };

  const onRegisterClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}></Link>
      <nav className={styles.nav}>
        <NavLink
          to="/events"
          className={({ isActive, isPending }) =>
            classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/mentorship"
          className={({ isActive, isPending }) =>
            classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
          }
        >
          Mentorship
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
          }
        >
          FAQ
        </NavLink>
      </nav>
      <div className={styles.buttons}>
        <Button label="Login" color="hollow" onClick={onLoginClick} className={styles.navButton} />
        <Button label="Register" color="light" onClick={onRegisterClick} />
      </div>
    </header>
  );
};

export default Header;
