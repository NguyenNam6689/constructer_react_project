//* LIB
import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

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
} from 'src/imports/pages';

const RoutesPage = () => {
  let elements = useRoutes([
    {
      path: '/',
      element: <Navbar />,
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
