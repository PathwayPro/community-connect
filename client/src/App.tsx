import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutUs from './pages/AboutUs/AboutUs';
import Events from './pages/Events/Events';
import Faq from './pages/FAQ/Faq';
import Layout from './pages/Layout/Layout';
import Main from './pages/Main/Main';
import Mentorship from './pages/Mentorship/Mentorship';
import MyProfile from './pages/Profile/MyProfile';
import UserProfile from './pages/Profile/UserProfile';
import Resources from './pages/Resources/Resources';

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
        path: 'events',
        Component: Events,
      },
      {
        path: 'resources',
        Component: Resources,
      },
      {
        path: 'mentorship',
        Component: Mentorship,
      },
      {
        path: 'faq',
        Component: Faq,
      },
      {
        path: 'about',
        Component: AboutUs,
      },
      {
        path: 'profile/my',
        Component: MyProfile,
      },
      {
        path: 'profile/user/:Id',
        Component: UserProfile,
      },
    ],
  },
]);

const App: FC = () => <RouterProvider router={router} />;

export default App;
