const invitationResponse = (state = {response: null}, action) => {
  switch (action.type) {
    case 'ACCEPT_INVITATION':
      return {
        response: "yes"
      }
    case 'DECLINE_INVITATION':
      return {
        response: "no"
      }

    default:
      return state
  }
}

export default invitationResponse
