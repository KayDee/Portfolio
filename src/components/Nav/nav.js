import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

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
          <a href="#">About</a>
          <a href="#">Projects</a>
          <style>
            {`
              a, a:link, a:active, a:visited{
                color: ${curTheme.text};
              }
              a:hover{
                color: ${curTheme.highlight};
              }
            `}
          </style>
        </div>
      </nav>
    )
  }
}




export default Nav
