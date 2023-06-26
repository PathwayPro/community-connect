import { FC } from 'react';

import Education from './Education/Education';
import Events from './Events/Events';
import Hero from './Hero/Hero';
import Mentorship from './Mentorship/Mentorship';

const Main: FC = () => {
  return (
    <>
      <Hero />
      <Events />
      <Mentorship />
      <Education />
    </>
  );
};

export default Main;
