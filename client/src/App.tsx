import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutUs from './pages/AboutUs/AboutUs';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Main from './pages/Main/Main';
import { ApplyForMentorship, BecomeMentor } from './pages/Mentorship';
import MyProfile from './pages/Profile/MyProfile';
import UserProfile from './pages/Profile/UserProfile';
import Resources from './pages/Resources/Resources';
import Volunteering from './pages/Volunteering/Volunteering';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: 'verify-email',
        Component: Main,
      },
      {
        path: 'reset-password',
        Component: Main,
      },
      {
        path: 'events',
        Component: Events,
      },
      {
        path: 'resources',
        Component: Resources,
      },
      {
        path: 'mentorship/apply',
        Component: ApplyForMentorship,
      },
      {
        path: 'mentorship/become-mentor',
        Component: BecomeMentor,
      },
      {
        path: 'about',
        Component: AboutUs,
      },
      {
        path: 'volunteering',
        Component: Volunteering,
      },
      {
        path: 'profile/my',
        Component: MyProfile,
      },
      {
        path: 'profile/user/:Id',
        Component: UserProfile,
      },
      {
        path: 'home',
        Component: Home,
      },
    ],
  },
]);

const App: FC = () => <RouterProvider router={router} />;

export default App;
