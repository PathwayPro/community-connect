import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../common/components/Button/Button';
import Heading from '../../../common/components/Heading/Heading';
import useWindowSize, { BREAKPOINTS } from '../../../common/utils/useWindowSize';
import LoginForm from '../../LoginForm/LoginForm';
import Modal from '../../Modal/Modal';
import RegisterForm from '../../RegisterForm/RegisterForm';

import styles from './HeaderNav.module.scss';

const HeaderNav: FC = () => {
  const [isNavDropDownActive, setNavDropDownActive] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  // Using window width size to update nav view: desktop or mobile
  const { width } = useWindowSize();

  const onLoginClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    handleMobileDropDownClose();
    setLoginModalIsOpen(true);
  };

  const onRegisterClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    handleMobileDropDownClose();
    setRegisterModalIsOpen(true);
  };

  const onMobileButtonClick = () => {
    setNavDropDownActive(!isNavDropDownActive);
  };

  const handleMobileDropDownClose = () => {
    setNavDropDownActive(false);
  };

  return (
    <>
      <Heading tagType="h2" className={classNames(styles.title, width > BREAKPOINTS.small && styles.hidden)}>
        CommunityConnect
      </Heading>
      <button
        type="button"
        className={classNames(
          styles.mobileButton,
          width > BREAKPOINTS.small && styles.hidden,
          isNavDropDownActive && styles.active
        )}
        onClick={onMobileButtonClick}
      />
      <div className={classNames(styles.wrapper, width <= BREAKPOINTS.small && !isNavDropDownActive && styles.hidden)}>
        <nav className={styles.nav}>
          <NavLink
            to="/events"
            className={({ isActive, isPending }) =>
              classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
            }
            onClick={handleMobileDropDownClose}
          >
            Events
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive, isPending }) =>
              classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
            }
            onClick={handleMobileDropDownClose}
          >
            Resources
          </NavLink>

          <NavLink
            to="/mentorship"
            className={({ isActive, isPending }) =>
              classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
            }
            onClick={handleMobileDropDownClose}
          >
            Mentorship
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive, isPending }) =>
              classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
            }
            onClick={handleMobileDropDownClose}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
            }
            onClick={handleMobileDropDownClose}
          >
            About Us
          </NavLink>
        </nav>
        <div className={styles.buttons}>
          <Button
            label="Login"
            color="hollow"
            size={width <= BREAKPOINTS.small ? 'small' : 'normal'}
            onClick={onLoginClick}
            className={styles.navButton}
          />
          <Button
            label="Register"
            color="orangeLight"
            size={width <= BREAKPOINTS.small ? 'small' : 'normal'}
            onClick={onRegisterClick}
          />
        </div>
      </div>

      <Modal isModalOpen={loginModalIsOpen} setIsModalOpen={setLoginModalIsOpen}>
        <LoginForm isFormOpen={setLoginModalIsOpen} />
      </Modal>
      <Modal isModalOpen={registerModalIsOpen} setIsModalOpen={setRegisterModalIsOpen}>
        <RegisterForm />
      </Modal>
    </>
  );
};

export default HeaderNav;
