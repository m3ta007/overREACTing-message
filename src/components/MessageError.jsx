import React from 'react'
import PropTypes from 'prop-types'
import Message from '../components/Message'

function MessageError(props) {
  return <Message type="error" text={props.text} />
}

MessageError.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
}

export default MessageError
