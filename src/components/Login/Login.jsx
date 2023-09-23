import '../../styles/Login.css'

export default function Login() {
  return (
    <div className="login">
      <h1 id='login-title'>Gamor</h1>
      <form action="submit"className="login-form">
        <input type="text" placeholder="name..." />
        <input type="password" placeholder="password" />
        <button type='submit' id='login-button'>Login</button>
      </form>
    </div>
  )
}
