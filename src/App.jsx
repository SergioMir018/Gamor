import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainHub from './components/Main/Main-Hub.jsx'
import Login from './components/Login/Login.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='Gamor/' element={<MainHub />} />
        <Route path="Gamor/login" element={<Login />} />
      </Routes>
    </Router>
  )
}
