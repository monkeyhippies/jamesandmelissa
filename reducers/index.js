import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import boxes from './boxes'
import invitationResponse from './invitationResponse'
import invitees from './invitees'
import tabs from './tabs'

const todoApp = combineReducers({
  tabs,
  invitationResponse,
  invitees,
  boxes,
  todos,
  visibilityFilter
})

export default todoApp
