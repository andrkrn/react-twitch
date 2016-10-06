import React from 'react'
import { connect } from 'react-redux'
import { setChannelVisibility } from '../actions'

const NavigationLink = ({ active, filter, onClick, text }) => (
  <li className={active ? 'active' : null}>
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault();
        onClick(filter)
      }}
    >{text}</a>
  </li>  
)

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.channel.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (filter) => dispatch(setChannelVisibility(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLink)
