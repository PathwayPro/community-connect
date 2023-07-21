import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';

import Events from './Events/Events';
import Hero from './Hero/Hero';
import Mentorship from './Mentorship/Mentorship';
import Partners from './Partners/Partners';
import Resources from './Resources/Resources';

const Main: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === '/verify-email') {
      dispatch(showModal({ content: MODAL_TYPE.VERIFY_EMAIL }));
    }
    if (location.pathname === '/reset-password') {
      dispatch(showModal({ content: MODAL_TYPE.RESET_PASSWORD }));
    }
    return;
  }, [location.pathname]);

  return (
    <>
      <Hero />
      <Events />
      <Mentorship />
      <Partners />
      <Resources />
    </>
  );
};

export default Main;
