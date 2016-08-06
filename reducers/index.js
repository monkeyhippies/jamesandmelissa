import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import boxes from './boxes'

const todoApp = combineReducers({
  boxes,
  todos,
  visibilityFilter
})

export default todoApp
