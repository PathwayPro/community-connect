import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header/Header';
import Events from './pages/Events/Events';
import Main from './pages/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'events',
    element: <Events />,
  },
]);

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
