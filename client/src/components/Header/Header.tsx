import React, { FC } from 'react';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}></a>
      <nav className={styles.nav}>
        <a href="/events" className={styles.navLink}>
          Events
        </a>
        <a href="/mentorship" className={styles.navLink}>
          Mentorship
        </a>
        <a href="/faq" className={styles.navLink}>
          FAQ
        </a>
      </nav>
    </header>
  );
};

export default Header;
