import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {v: false}

  a = () => {
    this.setState(prevState => ({v: !prevState.v}))
  }

  render() {
    const {v} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <Message v={v} />
          {v ? <Logout m={this.a} /> : <Login n={this.a} />}
        </div>
      </div>
    )
  }
}

export default Home
