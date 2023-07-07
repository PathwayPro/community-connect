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
  // TODO: This behaviour has to be updated according to backend logic for password reset and email conformation
  // Now it works if URL from email contains resetPassword=true parameter => show resetPasswordForm
  // if URL from email contains emailConfirmed=true parameter => show ConfirmEmail
  const [searchParams, setSearchParams] = useSearchParams();
  const resetPassword = searchParams.get('resetPassword');
  const emailConfirmed = searchParams.get('emailConfirmed');

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (resetPassword && resetPassword === 'true') {
      dispatch(showModal({ content: MODAL_TYPE.RESET_PASSWORD }));
      searchParams.delete('resetPassword');
      setSearchParams(searchParams);
    }
    if (emailConfirmed && emailConfirmed === 'true') {
      dispatch(showModal({ content: MODAL_TYPE.CONFIRM_EMAIL }));
    }
    return;
  }, [resetPassword, emailConfirmed]);

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
