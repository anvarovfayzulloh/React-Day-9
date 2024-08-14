import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './components/home/Home';
import Recipe from './components/recipe/Recipe';

const App = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/recipe/:id',
      element: <Recipe />,
    },
  ]);
};

export default App;
