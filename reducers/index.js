import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import boxes from './boxes'
import invitationResponse from './invitationResponse'
import invitees from './invitees'
import tabs from './tabs'
import {routerReducer } from 'react-router-redux'

const todoApp = combineReducers({
  tabs,
  invitationResponse,
  invitees,
  boxes,
  todos,
  visibilityFilter,
  routing: routerReducer
})

export default todoApp
