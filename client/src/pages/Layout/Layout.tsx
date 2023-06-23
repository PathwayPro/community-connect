import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import styles from './Layout.module.scss';

const Layout: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
