let nextTodoId = 0
let nextBoxId = 0


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
