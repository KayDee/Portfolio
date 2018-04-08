import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './rainStyle.sass'

class RainFall extends Component{
  render(){
    return(
      <div className="container">
        <div className="parts one"></div>
        <div className="parts two"></div>
        <div className="parts three"></div>
      </div>
    )
  }
}

export default RainFall
