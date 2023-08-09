import { FC, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setVerifyEmailToken, setResetPasswordToken } from '../../app/slices/authSlice';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';

import Events from './Events/Events';
import Hero from './Hero/Hero';
import Mentorship from './Mentorship/Mentorship';
import Partners from './Partners/Partners';
import Resources from './Resources/Resources';

const Main: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = searchParams.get('token');
    if (location.pathname === '/verify-email' && token) {
      dispatch(setVerifyEmailToken(token));
      navigate('/');
      dispatch(showModal({ content: MODAL_TYPE.VERIFY_EMAIL }));
    }
    if (location.pathname === '/reset-password' && token) {
      dispatch(setResetPasswordToken(token));
      navigate('/');
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
