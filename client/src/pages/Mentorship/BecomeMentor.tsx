import { FC } from 'react';

import BecomeMentorForm from '../../components/Mentorship/BecomeMentorForm/BecomeMentorForm';
import MentorshipBody from '../../components/Mentorship/MentorshipBody/MentorshipBody';
import SectionMain from '../../components/SectionMain/SectionMain';

const text = `Thank you for your interest in${'\u00A0'}becoming a${'\u00A0'}mentor in${'\u00A0'}our mentorship program. 
  As${'\u00A0'}a${'\u00A0'}mentor, you have the opportunity to${'\u00A0'}positively impact someone${'\u2019'}s life, 
  share your knowledge, and guide them on${'\u00A0'}their personal and professional journey. 
  Please take a${'\u00A0'}few moments to${'\u00A0'}fill out this application form. Your responses will 
  help${'\u00A0'}us understand your background, experience, and areas of${'\u00A0'}expertise to${'\u00A0'}best 
  match you with a${'\u00A0'}mentee.`;

const BecomeMentor: FC = () => {
  return (
    <SectionMain>
      <MentorshipBody text={text} />
      <BecomeMentorForm />
    </SectionMain>
  );
};

export default BecomeMentor;
