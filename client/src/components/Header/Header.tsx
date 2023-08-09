import { FC } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../common/components/Container/Container';

import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}></Link>
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
