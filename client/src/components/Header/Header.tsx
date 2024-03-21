import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import Avatar from '../../common/components/Avatar/Avatar';
import Container from '../../common/components/Container/Container';

import HeaderNav from './HeaderNav/HeaderNav';

import styles from './Header.module.scss';

const Header: FC = () => {
  const isLogin = useAppSelector((state) => state.auth.login);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}></Link>
          <HeaderNav isLogin={isLogin} />
          {isLogin && <Avatar size="small" borderColor="white" className={styles.profileImage} />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
