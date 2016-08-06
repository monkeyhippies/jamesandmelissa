import React from 'react'
import { connect } from 'react-redux'
import { addBox } from '../actions'

let AddBox = ({ dispatch }) => {

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addBox())
      }}>
        <button type="submit">
          Add Box
        </button>
      </form>
    </div>
  )
}
AddBox = connect()(AddBox)

export default AddBox
