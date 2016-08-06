import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddBox from '../containers/AddBox'
import VisibleTodoList from '../containers/VisibleTodoList'
import ColorBoxList from '../containers/ColorBoxList'
import PaymentForm from '../components/PaymentForm'

const App = () => (
  <div>
    <AddTodo />
    <PaymentForm />
    <AddBox />
    <ColorBoxList />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
