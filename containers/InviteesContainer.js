import { connect } from 'react-redux'
import Invitees from '../components/Invitees'

const mapStateToProps = (state, ownProps) => {
  return state.invitees
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const InviteesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Invitees)

export default InviteesContainer
