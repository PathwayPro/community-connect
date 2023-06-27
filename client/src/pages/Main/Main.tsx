import { FC } from 'react';

import Education from './Education/Education';
import Events from './Events/Events';
import Hero from './Hero/Hero';
import Mentorship from './Mentorship/Mentorship';
import Partners from './Partners/Partners';

const Main: FC = () => {
  return (
    <>
      <Hero />
      <Events />
      <Mentorship />
      <Partners />
      <Education />
    </>
  );
};

export default Main;
