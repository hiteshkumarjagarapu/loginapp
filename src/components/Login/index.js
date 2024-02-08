import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {isLogIn: true}

  b = () => {
    this.setState(prev => ({isLogIn: !prev.isLogIn}))
  }

  render() {
    const {isLogIn} = this.state

    return (
      <div className="container">
        {isLogIn ? (
          <button type="button" className="but" onClick={this.b}>
            Logout
          </button>
        ) : (
          <button type="button" className="but" onClick={this.b}>
            Login
          </button>
        )}
      </div>
    )
  }
}
export default Login
