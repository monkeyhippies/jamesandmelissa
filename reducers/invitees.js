const invitees = (state = {invitees: [], status: null}, action) => {
  switch (action.type) {
    case 'REQUEST_INVITEES':
      return {
        status: "requesting",
        invitees: state.invitees
      }

    case 'RECEIVE_INVITEES':
      return {
        status: "received",
        invitees: action.invitees
      }

    default:
      return state

}
}

export default invitees
