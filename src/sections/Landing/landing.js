import React, { Component } from 'react'
import Nav from '../../components/Nav/nav'
import PropTypes from 'prop-types'


class Landing extends Component{


  render(){
    // console.log(this.context)
    return(
      <div className="landing-page">
        <Nav />
      </div>
    )
  }

}

Landing.contextTypes = {
  theme: PropTypes.any,
  changeTheme: PropTypes.func
}


export default Landing
