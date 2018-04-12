import React, { Component } from 'react'
import Nav from '_components/Nav/nav'
import PropTypes from 'prop-types'
import SocialIcons from '_components/SocialIcons/socialicons'
import ScrollToNext from '_components/ScrollToNext/scrolltonext'
import './style.sass'


class Landing extends Component{


  render(){
    const STYLES = {color: this.context.theme.text}
    return(
      <div className="landing-page">
        <Nav />
        <div className="about">
          <h1 style={STYLES}>Hello, I am Kay</h1>
          <h2 style={STYLES}>Stupid | Code Kiddie | TV Series Lover</h2>
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
