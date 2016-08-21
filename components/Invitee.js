import React, { PropTypes } from 'react'

const Invitee = ({ first_name, last_name, response, response_at }) => (
  <li>
  {first_name} {last_name} responded with {response} at {response_at}
  </li>
)

Invitee.propTypes = {
  _id: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  response: PropTypes.string,
  response_at: PropTypes.string
}

export default Invitee
