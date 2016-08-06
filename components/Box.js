import React, { PropTypes } from 'react'

const Box = ({ onClick, boxColor }) => (
  <div
    className="col-md-3"
    onClick={onClick}
    style={{
        height: '200px',
        padding: '25px',
        border: '5px solid #eeeeee;',
        margin: '15px',
        background: boxColor ? '#0059bf' : 'white'
    }}
  >
  </div>
)

Box.propTypes = {
  onClick: PropTypes.func.isRequired,
  boxColor: PropTypes.bool.isRequired
}

export default Box
