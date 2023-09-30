import React, { useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import MainHub from './components/Main/Main-Hub.jsx'
import Login from './components/Login/Login.jsx'

export default function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <Router>
      <Routes>
        <Route path='/Gamor/*'>
          <Route index element={<MainHub/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
