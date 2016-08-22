import { connect } from 'react-redux'
import { acceptInvitation } from '../actions'
import { declineInvitation } from '../actions'
import InvitationResponse from '../components/InvitationResponse'

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
  }
}

const InvitationResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitationResponse)

export default InvitationResponseContainer
