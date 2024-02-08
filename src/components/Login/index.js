import './index.css'

const Login = props => {
  const {n} = props
  return (
    <button type="button" className="login-button" onClick={n}>
      Login
    </button>
  )
}
export default Login
