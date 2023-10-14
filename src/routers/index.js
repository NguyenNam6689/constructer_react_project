//* LIB
import React from 'react';
import { useRoutes } from 'react-router-dom';

//* LAYOUTS
import Navbar from 'src/layouts/navbar';

//* IMPORTS PAGE
import {
  AboutPage,
  ContactPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  ToDoListPage,
} from 'src/imports/pages';

import OutLetChild from './OutLetChild';

const RoutesPage = () => {
  let elements = useRoutes([
    {
      path: '/',
      element: (
        <OutLetChild>
          <Navbar />
        </OutLetChild>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
        {
          path: 'todo',
          element: <ToDoListPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
  return elements;
};

export default RoutesPage;
