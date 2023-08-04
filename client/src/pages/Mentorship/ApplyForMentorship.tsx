import { FC } from 'react';

import ApplyForMentorshipForm from '../../components/Mentorship/ApplyForMentorshipForm/ApplyForMentorshipForm';
import MentorshipBody from '../../components/Mentorship/MentorshipBody/MentorshipBody';
import SectionMain from '../../components/SectionMain/SectionMain';

const text = `Our mentorship program was created to${'\u00A0'}empower our community by${'\u00A0'}providing guidance, \
  support, and knowledge necessary to${'\u00A0'}achieve personal and professional goals. \
  By${'\u00A0'}pairing you with experienced mentors who are passionate about sharing their wisdom and expertise, \
  we${'\u00A0'}create a${'\u00A0'}nurturing environment where you can learn, gain new perspectives, \
  and navigate challenges with the guidance of${'\u00A0'}a${'\u00A0'}trusted advisor.`;

const ApplyForMentorship: FC = () => {
  return (
    <SectionMain>
      <MentorshipBody text={text} />
      <ApplyForMentorshipForm />
    </SectionMain>
  );
};

export default ApplyForMentorship;
