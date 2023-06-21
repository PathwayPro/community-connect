import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Events from './pages/Events/Events';
import Faq from './pages/FAQ/Faq';
import Layout from './pages/Layout/Layout';
import Main from './pages/Main/Main';
import Mentorship from './pages/Mentorship/Mentorship';

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
        path: 'mentorship',
        Component: Mentorship,
      },
      {
        path: 'faq',
        Component: Faq,
      },
    ],
  },
]);

const App: FC = () => <RouterProvider router={router} />;

export default App;
