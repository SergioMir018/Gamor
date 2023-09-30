import * as React from "react";
import { createHashRouter } from 'react-router-dom'

import Login from '../components/Login/Login';
import MainHub from '../components/Main/Main-Hub';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainHub />
  },
  {
    path: '/Gamor/#/login',
    element: <Login />
  }
])
