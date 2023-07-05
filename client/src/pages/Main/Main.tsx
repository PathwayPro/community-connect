import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { showModal, MODAL_TYPE } from '../../app/slices/modalSlice';

import Events from './Events/Events';
import Hero from './Hero/Hero';
import Mentorship from './Mentorship/Mentorship';
import Partners from './Partners/Partners';
import Resources from './Resources/Resources';

const Main: FC = () => {
  // TODO: This behaviour has to be updated according to backend logic for password reset
  // Now it works if URL from email contains resetPassword=true parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const resetPassword = searchParams.get('resetPassword');
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (resetPassword && resetPassword === 'true') {
      dispatch(showModal({ content: MODAL_TYPE.RESET_PASSWORD }));
      searchParams.delete('resetPassword');
      setSearchParams(searchParams);
    }
    return;
  }, [resetPassword]);

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
