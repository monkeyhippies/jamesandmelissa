import React from 'react';
import {PropTypes} from 'react';
import Invitee from './Invitee';

export default class Invitees extends React.Component {

    render() {

          var status_message;

          if (this.props.status !== null) {
              status_message = "Status is " + this.props.status
          } else {
              status_message = ""
          }

      return(
        <div>
          <h2>{status_message}</h2>
          <ul>
            {this.props.invitees.map(invitee =>
              <Invitee
                key={invitee._id}
                {...invitee}
              />
            )}
          </ul>
        </div>
      )
}
}

Invitees.propTypes = {
  status: PropTypes.string,
  invitees: PropTypes.array.isRequired,
}
