import { connect } from 'react-redux'
import { acceptInvitation } from '../actions'
import { declineInvitation } from '../actions'
import InvitationResponse from '../components/InvitationResponse'
import {fetchInvitees} from '../actions/index.js';

const mapStateToProps = (state, ownProps) => {
  return state.invitationResponse
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onYesClick: () => {
      dispatch(acceptInvitation())
    },
    onNoClick: () => {
      dispatch(declineInvitation())
    },
    onInviteesClick: () => {
      dispatch(fetchInvitees())
    }
  }
}

const InvitationResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitationResponse)

export default InvitationResponseContainer
