import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { executeScroll } from '_includes/js/scroll.js'
import './style.sass'

class Nav extends Component{

  constructor(props){
    super(props)
    this.scrollEvent = this.scrollEvent
    this.state = {
      isTranslucent: true
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollEvent)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollEvent)
  }

  static contextTypes = {
    theme: PropTypes.any,
    changeTheme: PropTypes.func
  }

  scrollEvent = () => {
    if(window.pageYOffset > 0){
      this.setState({
        isTranslucent: true
      })
    }
    else{
      this.setState({
        isTranslucent: false
      })
      console.log('Scrolled')
    }
  }

  render(){
    let curTheme = this.context.theme
    let change = this.context.changeTheme
    let color = this.state.isTranslucent ? curTheme.translucent : 'transparent'
    // console.log(this.context)
    return(
      <nav style={{'backgroundColor': color}}>
        <button onClick={(e) => change()}>Change Theme</button>
        <div className="buttons-wrap">
          <a className="nav-links" onClick={(e) => executeScroll(document.querySelector('.about-page'))}>About</a>
          <a className="nav-links" onClick={(e) => executeScroll(document.querySelector('.projects-page'))}>Projects</a>
          <style>
            {`
              a.nav-links, a.nav-links:link, a.nav-links:active, a.nav-links:visited{
                color: ${curTheme.text};
              }
              a.nav-links:after{
                background-color: ${curTheme.text};
              }
            `}
          </style>
        </div>
      </nav>
    )
  }
}




export default Nav
