import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import InvitationResponseContainer from './containers/InvitationResponseContainer'
import InviteesContainer from './containers/InviteesContainer'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const loggerMiddleware = createLogger()

let store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={InvitationResponseContainer} />
      <Route path="registry" component={InvitationResponseContainer} />
      <Route path="invitees" component={InviteesContainer} />
      <Route path="logistics" component={<h2>TDB</h2>} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
)
