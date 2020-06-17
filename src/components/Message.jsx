import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  return (
    <p className={`message message-${props.type}`}>
      <span className="material-icons" role="presentation">
        {props.icon}
      </span>
      <span className="sr-only">{props.iconText}</span>
      {props.text}
    </p>
  )
}

Message.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
}

export default Message
