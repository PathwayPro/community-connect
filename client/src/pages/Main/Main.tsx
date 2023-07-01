import { FC } from 'react';

import Events from './Events/Events';
import Hero from './Hero/Hero';
import Mentorship from './Mentorship/Mentorship';
import Partners from './Partners/Partners';
import Resources from './Resources/Resources';

const Main: FC = () => {
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
