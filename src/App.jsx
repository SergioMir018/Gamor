import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainHub from './components/Main/Main-Hub.jsx'
import Login from './components/Login/Login.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MainHub />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  )
}
