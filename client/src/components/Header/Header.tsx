import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector} from '../../app/hooks';
import Container from '../../common/components/Container/Container';
import IconSVG from '../../common/components/IconSVG/Button/IconSVG';
import IconLinkSVG from '../../common/components/IconSVG/Link/IconLinkSVG';

import HeaderNav from './HeaderNav/HeaderNav';

import styles from './Header.module.scss';

const Header: FC = () => {
  const isLogin = useAppSelector((state) => state.auth.login);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}></Link>
          {isLogin && (
          <>
            <div className={styles.icons}>
              <IconLinkSVG
                name="headerHomeIcon"
                size="big"
                color="orange"
                className={styles.headerIcon}
                href="/home"
                label="Link to User Profile"
              />
              <IconSVG
                name="headerMsgIcon"
                size="big"
                color="orange"
                className={styles.headerIcon}
                label="Messages"
                onClick={(e) => e.preventDefault()}
              />
              <IconSVG
                name="headerNotificationIcon"
                size="big"
                color="orange"
                className={styles.headerIcon}
                label="Notifications"
                onClick={(e) => e.preventDefault()}
              />
              <IconSVG
                name="headerSearchIcon"
                size="big"
                color="orange"
                className={styles.headerIcon}
                label="Search"
                onClick={(e) => e.preventDefault()}
              />
            </div>
          </>
        )}
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
