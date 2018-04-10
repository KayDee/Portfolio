import React, { Component } from 'react'
import Nav from '_components/Nav/nav'
import PropTypes from 'prop-types'
import SocialIcons from '../../components/SocialIcons/socialicons'
import ScrollToNext from '../../components/ScrollToNext/scrolltonext'
import './style.sass'


class Landing extends Component{


  render(){
    // console.log(this.context)
    const STYLES = {color: this.context.theme.text}
    return(
      <div className="landing-page">
        <Nav />
        <div className="about">
          <h1 style={STYLES}>Hello, I am Baymax</h1>
          <h2 style={STYLES}>Designer | Coder | TV Series Lover</h2>
          <SocialIcons />
        </div>
        <ScrollToNext nextPageSelector=".about-page" />
      </div>
    )
  }

}

Landing.contextTypes = {
  theme: PropTypes.any,
  changeTheme: PropTypes.func
}


export default Landing
