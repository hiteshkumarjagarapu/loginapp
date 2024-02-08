import {Component} from 'react'

import './index.css'

class Message extends Component {
  state = {isMsg: true}

  a = () => {
    this.setState(prev => ({isMsg: !prev.isMsg}))
  }

  render() {
    const {isMsg} = this.state
    const ab = this.b()

    return <div className="cont">{ab ? 'Welcome User' : 'Please Login'}</div>
  }
}
export default Message
