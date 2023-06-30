import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Button from '../../common/components/Button/Button';
import LoginForm from '../LoginForm/LoginForm';
import Modal from '../Modal/Modal';
import RegisterForm from '../RegisterForm/RegisterForm';

import styles from './Header.module.scss';

const Header: FC = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const onLoginClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setLoginModalIsOpen(true);
  };

  const onRegisterClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setRegisterModalIsOpen(true);
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

        <Modal isModalOpen={loginModalIsOpen} setIsModalOpen={setLoginModalIsOpen}>
          <LoginForm isFormOpen={setLoginModalIsOpen} />
        </Modal>

        <Button label="Register" color="orangeLight" onClick={onRegisterClick} />

        <Modal isModalOpen={registerModalIsOpen} setIsModalOpen={setRegisterModalIsOpen}>
          <RegisterForm />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
