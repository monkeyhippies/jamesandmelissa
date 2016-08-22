import React from 'react';
import {PropTypes} from 'react';

export default class InvitationResponse extends React.Component {

    render() {

        var responsePhrase;
        if (this.props.response == "yes") {
            responsePhrase = "You accepted the invitation";
        } else if (this.props.response == "no") {
            responsePhrase = "You declined the invitation";
        } else if (this.props.response === null ) {
            responsePhrase = "You still havent submitted a response";
        }

        return (
        <div>
            <h1>{responsePhrase}</h1>
            <button type="button" className={this.props.response == "yes" ? "btn btn-info btn-lg disabled" : "btn btn-info btn-lg"} onClick={this.props.onYesClick}>Yes</button>
            <button type="button" className={this.props.response == "no" ? "btn btn-info btn-lg disabled" : "btn btn-info btn-lg"} onClick={this.props.onNoClick} onClick={this.props.onNoClick}>No</button>
        </div>
        )
    }
}

InvitationResponse.propTypes = {
  response: PropTypes.string,
  onYesClick: PropTypes.func.isRequired,
  onNoClick: PropTypes.func.isRequired
}
