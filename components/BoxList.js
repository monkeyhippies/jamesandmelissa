import React, { PropTypes } from 'react'
import Box from './Box'

const BoxList = ({ boxes, onClick}) => (
<div className="container-fluid">
  <div className="row">
    {boxes.map( box =>
      <Box
        key={box.id}
        boxColor={box.boxColor}
        {...box}
        onClick={() => onClick(box.id)}
      />
    )}
  </div>
</div>
)

BoxList.propTypes = {
  box: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    boxColor: PropTypes.bool.isRequired,
  }).isRequired).isRequired
}

export default BoxList
