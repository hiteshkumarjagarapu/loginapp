import {Component} from 'react'

import './index.css'

const Logout = props => {
  const {m} = props
  return (
    <button type="button" className="logout-button" onClick={m}>
      Logout
    </button>
  )
}

export default Logout
