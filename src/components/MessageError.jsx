import React from 'react'
import PropTypes from 'prop-types'
import Message from '../components/Message'

// Object.assign:
function MessageError(props) {
  const base = {
    type: 'error',
    icon: 'notification_important',
    iconText: 'Error',
  }

  const newProps = Object.assign({}, props, base)
  // const newProps = { ...props, ...base }

  return <Message {...newProps} />
}

//// Spread-operator:
// function MessageError(props) {
//   return <Message {...props} type="error" />
// }

MessageError.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
}

export default MessageError
