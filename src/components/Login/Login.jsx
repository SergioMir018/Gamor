import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/Login.css'

const Login = () => {
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
      navigate('/')
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
      <div className='login-background'></div>
      <div className="login">
        <h1 id='login-title'>Gamor</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="text" placeholder={incorrect ? 'INCORRECT NICKNAME' : 'nickname...'} value={username} onChange={handleUsernameChange} className={incorrect ? 'incorrect' : ''} />
          <input type="password" placeholder={incorrect ? 'INCORRECT PASSWORD' : 'password...'} value={password} onChange={handlePasswordChange} className={incorrect ? 'incorrect' : ''} />
          <button type='submit' id='login-button'>Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
