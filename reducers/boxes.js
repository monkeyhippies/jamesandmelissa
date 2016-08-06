const box = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return {
          id: action.id,
          boxColor : false
      }
    case 'TOGGLE_BOX':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        boxColor: !state.boxColor
      })
    default:
      return state
  }
}

const boxes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return [
        ...state,
        box(undefined, action)
      ]
    case 'TOGGLE_BOX':
      return state.map(t =>
        box(t, action)
      )
    default:
      return state
  }
}

export default boxes
