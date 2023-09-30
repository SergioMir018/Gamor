import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import MainHub from './components/Main/Main-Hub.jsx'
import Login from './components/Login/Login.jsx'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Gamor/*'>
          <Route index element={<MainHub/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
