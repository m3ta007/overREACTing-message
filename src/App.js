import React from 'react'
import './App.css'
import MessageError from '../src/components/MessageError'
import Message from '../src/components/Message'

function App() {
  const message = {
    type: 'info',
    text: 'Time-saving update',
    icon: 'info',
    iconText: 'Info',
  }

  const messageError = {
    type: 'error',
    text: 'Password is not valid',
    icon: 'warning',
    iconText: 'Error',
  }

  return (
    <div className="container">
      {/* <Message message={message} /> */}
      <Message {...message} />
      <MessageError {...messageError} />
    </div>
  )
}

export default App
