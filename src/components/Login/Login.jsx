import '../../styles/Login.css'

export default function Login() {
  return (
    <section>
      <div className='login-background'></div>
      <div className="login">
        <h1 id='login-title'>Gamor</h1>
        <form action="submit"className="login-form">
          <input type="text" placeholder="nickname..." />
          <input type="password" placeholder="password..." />
          <button type='submit' id='login-button'>Login</button>
        </form>
      </div>
    </section>
  )
}
