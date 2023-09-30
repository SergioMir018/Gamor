import * as React from "react";
import { createBrowserRouter } from 'react-router-dom'

import Login from '../components/Login/Login';
import MainHub from '../components/Main/Main-Hub';

export const router = createBrowserRouter([
  {
    path: '/Gamor/',
    element: <MainHub />
  },
  {
    path: '/login',
    element: <Login />
  }
])
