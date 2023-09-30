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

    useEffect(() => {
    document.body.style.backgroundColor = !theme ? '#f0f2f4' : '#282c34';
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path='/Gamor/*'>
          <Route index element={<MainHub theme={theme} setTheme={setTheme}/>}/>
          <Route path='login' element={<Login theme={theme}/>}/>
          <Route path='stream' element={<MainHub theme={theme} setTheme={setTheme}/>}/>
          <Route path='party' element={<MainHub theme={theme} setTheme={setTheme}/>}/>
          <Route path='premium' element={<MainHub theme={theme} setTheme={setTheme}/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
