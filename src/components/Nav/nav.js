import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'

class Nav extends Component{

  constructor(props){
    super(props)
    this.scrollEvent = this.scrollEvent
    this.state = {
      isOpaque: true
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
    if(window.pageYOffset > this.offsetTop){
      this.setState({
        isOpaque: false
      })
    }
    else{
      this.setState({
        isOpaque: true
      })
    }
  }

  render(){
    let curTheme = this.context.theme
    let change = this.context.changeTheme
    // console.log(this.context)
    return(
      <nav style={{'backgroundColor': this.state.isOpaque ? 'transparent' : curTheme.translucent}}>
        <button onClick={(e) => change()}>Change Theme</button>
        <div className="buttons-wrap">
          <a href="#" className="nav-links">About</a>
          <a href="#" className="nav-links">Projects</a>
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
