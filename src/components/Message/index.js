import './index.css'

const Message = props => {
  const {v} = props
  const msg = v ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{msg}</h1>
}
export default Message
