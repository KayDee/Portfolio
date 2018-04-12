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
    }
  }

  render(){
    let curTheme = this.context.theme
    let change = this.context.changeTheme
    let color = this.state.isTranslucent ? curTheme.translucent : 'transparent'
    // console.log(this.context)
    return(
      <nav style={{'backgroundColor': color}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={(e) => change()}>
          <path d="M269.9 364.6c1.4 6.4 2.1 13 2.1 19.7 0 81.2-54.2 127.7-134.8 127.7C41.5 512 0 435.1 0 347.6c10.4 7.1 46.9 36.5 58.7 36.5 7 0 13-4 15.5-10.6 23.6-62.2 66.5-76.5 112.9-77.4 15.6 33.8 46.1 59.6 82.8 68.5zM460.6 0c-14.4 0-27.9 6.4-38.2 15.7C228.2 190 208 194.1 208 245.4c0 48.8 40.5 90.6 90.2 90.6 59 0 93.2-43.4 200.6-244.8 7-13.7 13.2-28.5 13.2-43.9C512 19.7 487.3 0 460.6 0z"/>
        </svg>
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
              nav > svg{
                fill: ${curTheme.text};
              }
            `}
          </style>
        </div>
      </nav>
    )
  }
}




export default Nav
