import { connect } from 'react-redux'
import Invitees from '../components/Invitees'
import {fetchInvitees} from '../actions/index.js';

const mapStateToProps = (state, ownProps) => {
  return state.invitees
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInviteesClick: () => {
      dispatch(fetchInvitees())
    }}
}

const InviteesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Invitees)

export default InviteesContainer
