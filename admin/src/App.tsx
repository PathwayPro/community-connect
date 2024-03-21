import { Admin, Resource } from 'react-admin';

import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { Dashboard } from './Pages/Dashboard';
import { MenteesList } from './Pages/MenteesList';
import { MentorsList } from './Pages/MentorsList';
import MentorRequestShow from './Components/MentorRequestShow/MentorRequestShow';
import MentorRequestEdit from './Components/MentorRequestEdit/MentorRequestEdit';
import MenteeRequestShow from './Components/MenteeRequestsShow/MenteeRequestsShow';
import MenteeRequestEdit from './Components/MenteeRequestEdit/MenteeRequestEdit';

import { ReactComponent as IconMentorship } from './images/icon-mentorship.svg';
import { ReactComponent as IconDashboard } from './images/icon-dashboard.svg';
import { myTheme } from './styles/theme';

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    authCallbackPage={Dashboard}
    theme={myTheme}
    // defaultTheme="light"
  >
    <Resource name="dashboard" list={Dashboard} icon={IconDashboard} options={{ label: 'Dashboard' }} />
    <Resource
      name="mentorship/mentees"
      list={MenteesList}
      icon={IconMentorship}
      show={MenteeRequestShow}
      edit={MenteeRequestEdit}
      options={{ label: 'Mentees' }}
    />
    <Resource
      name="mentorship/mentors"
      list={MentorsList}
      icon={IconMentorship}
      show={MentorRequestShow}
      edit={MentorRequestEdit}
      options={{ label: 'Mentors' }}
      hasEdit
    />
  </Admin>
);
