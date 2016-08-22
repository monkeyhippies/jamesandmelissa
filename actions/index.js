import fetch from 'isomorphic-fetch';

let nextTodoId = 0
let nextBoxId = 0

const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';

function changeSelectedTab(selectedTab, tabNamespace) {
    return {
        type: CHANGE_SELECTED_TAB,
        tab: selectedTab,
        namespace: tabNamespace
    };
}

export const REQUEST_INVITEES = 'REQUEST_INVITEES'
function requestInvitees() {
    return {
    type: 'REQUEST_INVITEES'
  }
}

export const RECEIVE_INVITEES = 'RECEIVE_INVITEES'
function receiveInvitees(json) {
  return {
    type: RECEIVE_INVITEES,
    invitees: json,
    receivedAt: Date.now()
  }
}

export function fetchInvitees() {
    return function (dispatch) {
        dispatch(requestInvitees())

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch('/api/invitees')
          .then(response => response.json())
          .then(json =>
            // We can dispatch many times!
            // Here, we update the app state with the results of the API call.
            dispatch(receiveInvitees(json)))
    }
}

export const acceptInvitation = () => {
    return {
        type: "ACCEPT_INVITATION"
    }
}

export const declineInvitation = () => {
    return {
        type: "DECLINE_INVITATION"
    }
}

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const toggleBox = (id) => {
    return {
        type: 'TOGGLE_BOX',
        id
    }
}

export const addBox = (id) => {
    return {
        type: 'ADD_BOX',
        id: nextBoxId++
    }
}
