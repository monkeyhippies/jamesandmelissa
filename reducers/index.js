import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import boxes from './boxes'
import invitationResponse from './invitationResponse'

const todoApp = combineReducers({
  invitationResponse,
  boxes,
  todos,
  visibilityFilter
})

export default todoApp
