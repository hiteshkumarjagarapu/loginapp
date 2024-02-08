import {Component} from 'react'

import './index.css'

class Logout extends Component {
  state = {isLogOut: false}

  b = () => {
    this.setState(prev => ({isLogOut: !prev.isLogOut}))
  }

  render() {
    const {isLogOut} = this.state

    return (
      <div className="container">
        {isLogOut ? (
          <button type="button" className="butt" onClick={this.b}>
            Login
          </button>
        ) : (
          <button type="button" className="butt" onClick={this.b}>
            Logout
          </button>
        )}
      </div>
    )
  }
}

export default Logout
