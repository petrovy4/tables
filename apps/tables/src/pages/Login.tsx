import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signin = (e: FormEvent) => {
    e.preventDefault()
    navigate('/staffing')
  }

  return (
    <div className="vh-100 d-flex align-items-center">
      <form className="mx-auto mw-100 px-3" style={ { width: '400px' } } onSubmit={ signin }>
        <div className="form-floating mb-3">
          <input type="text" value={ user } onChange={ e => setUser(e.target.value) } className="form-control" id="user" name="user" placeholder="User"></input>
          <label htmlFor="user">User</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" value={ password } onChange={ e => setPassword(e.target.value) } className="form-control" id="password" name="password" placeholder="Password"></input>
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login
