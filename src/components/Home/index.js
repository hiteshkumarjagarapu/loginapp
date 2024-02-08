import {Component} from 'react'

import './index.css'

import Login from '../Login/index'

import Logout from '../Logout/index'

import Message from '../Message/index'

class Home extends Component {
  state = {v: true}

  a = () => {
    this.setState(prev => ({v: !prev.v}))
  }

  f1 = () => <Logout />

  f2 = () => <Login />

  f3 = () => <Message />

  render() {
    const {v} = this.state
    const a1 = this.f1()
    const a2 = this.f2()
    const a3 = this.f3()
    const ab = this.a()

    return (
      <div className="bg">
        <div className="bg1">
          <h1 className="heading">{a3}</h1>

          {ab && a2}
          {!ab && a1}
        </div>
      </div>
    )
  }
}
export default Home
