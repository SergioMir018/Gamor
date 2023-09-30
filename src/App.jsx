import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainHub from './components/Main/Main-Hub.jsx'
import Login from './components/Login/Login.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Gamor/" Component={MainHub} />
        <Route exact path="/Gamor/login" Component={Login} />
      </Routes>
    </Router>
  )
}
