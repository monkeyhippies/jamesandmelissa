import { connect } from 'react-redux'
import { toggleBox } from '../actions'
import BoxList from '../components/BoxList'

const mapStateToProps = (state) => {
  return {
    boxes: state.boxes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleBox(id))
    }
  }
}

const ColorBoxList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxList)

export default ColorBoxList
