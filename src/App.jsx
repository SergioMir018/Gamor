import React, { useState, useEffect } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import MainHub from './components/Main/Main-Hub.jsx'
import Login from './components/Login/Login.jsx'

export default function App() {
  const [theme, setTheme] = useState(true)
  return (
    <Router>
      <Routes>
        <Route path='/Gamor/*'>
          <Route index element={<MainHub theme={theme} setTheme={setTheme}/>}/>
          <Route path='login' element={<Login theme={theme}/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
