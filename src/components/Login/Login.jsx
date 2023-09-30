import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/Login.css'

const Login = ({ theme }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [incorrect, setIncorrect] = useState(false)



  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (username === 'user' && password === '123') {
      navigate('/Gamor/')
    } else {
      setIncorrect(true)
      setUsername('')
      setPassword('')
    }
  }

  useEffect(() => {
    document.body.classList.add('no-overflow');

    return () => {
      document.body.classList.remove('no-overflow');
    };
  }, [])

  return (
    <section>
      <div className={`login-background ${!theme ? 'login-background-light' : ''}`}></div>
      <div className="login">
        <h1 className={`login-title ${!theme ? 'theme-dark-text' : ''}`}>Gamor</h1>
        <form onSubmit={handleSubmit} className={`login-form ${!theme ? 'login-form-light' : ''}`}>
          <input
            type="text"
            placeholder={incorrect ? 'INCORRECT NICKNAME' : 'nickname...'}
            value={username}
            onChange={handleUsernameChange}
            className={`${
              incorrect ? 'incorrect' : ''
            } ${!theme ? 'theme-dark-text' : ''}`}
          />
          <input
            type="password"
            placeholder={incorrect ? 'INCORRECT PASSWORD' : 'password...'}
            value={password}
            onChange={handlePasswordChange}
            className={`${
              incorrect ? 'incorrect' : ''
            } ${!theme ? 'theme-dark-text' : ''}`}
          />
          <button type='submit' id='login-button'>Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
