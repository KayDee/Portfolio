import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'

class RainFall extends Component{

  static contextTypes = {
    theme: PropTypes.any
  }
  render(){
    let commonStyles = {
      backgroundColor: this.context.theme.background
    }
    return(
      <div className="container" style={{color: this.context.theme.text}}>
        <div className="parts one" style={commonStyles}></div>
        <div className="parts two" style={commonStyles}></div>
        <div className="parts three" style={commonStyles}></div>
      </div>
    )
  }
}

export default RainFall
