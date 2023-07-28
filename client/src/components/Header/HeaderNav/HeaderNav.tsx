import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../../app/hooks';
import { showModal, MODAL_TYPE } from '../../../app/slices/modalSlice';
import Button from '../../../common/components/Button/Button';
import Heading from '../../../common/components/Heading/Heading';
import useWindowSize, { BREAKPOINTS } from '../../../common/utils/useWindowSize';
import HeaderDropDown from '../HeaderDropDown/HeaderDropDown';

import styles from './HeaderNav.module.scss';

const HeaderNav: FC = () => {
  const [isNavDropDownActive, setNavDropDownActive] = useState(false);
  const dispatch = useAppDispatch();

  // Using window width size to update nav view: desktop or mobile
  const { width } = useWindowSize();

  const onLoginClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    handleMobileDropDownClose();
    dispatch(showModal({ content: MODAL_TYPE.LOGIN, closeOnOverlayClick: true }));
  };

  const onRegisterClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    handleMobileDropDownClose();
    dispatch(showModal({ content: MODAL_TYPE.REGISTER, closeOnOverlayClick: true }));
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
      <div
        className={classNames(
          styles.wrapper,
          width <= BREAKPOINTS.small && !isNavDropDownActive && styles.hidden,
          width <= BREAKPOINTS.xsmall && styles.wide
        )}
      >
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

          {width > BREAKPOINTS.small ? (
            <HeaderDropDown label="Mentorship" />
          ) : (
            <>
              <NavLink
                to="/mentorship/apply"
                className={({ isActive, isPending }) =>
                  classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
                }
                onClick={handleMobileDropDownClose}
              >
                Apply for mentorship
              </NavLink>
              <NavLink
                to="/mentorship/become-mentor"
                className={({ isActive, isPending }) =>
                  classNames(styles.navLink, isPending && styles.pending, isActive && styles.active)
                }
                onClick={handleMobileDropDownClose}
              >
                Become a mentor
              </NavLink>
            </>
          )}
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
    </>
  );
};

export default HeaderNav;
