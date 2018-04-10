import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'


class About extends Component{

  static contextTypes = {
    theme: PropTypes.any
  }

  render(){
    let highlightStyle = {backgroundColor: this.context.theme.highlight}
    return(
      <div className="about-page" style={{color: this.context.theme.text}}>
        <h1>About</h1>
        <h3>I like <mark style={highlightStyle}>JavaScript</mark> and everything that comes from it</h3>
        <h4>
          I usually make pens and sites with CSS, but this time i chose <mark style={highlightStyle}>react.js</mark>
          <br />
          This site is a result of <mark style={highlightStyle}>a</mark> good idea, <mark style={highlightStyle}>some</mark> awesome songs and <mark style={highlightStyle}>a lot</mark> of hours googling
        </h4>
        <h4>
          AAAAAA, BBBBBB, CCCCCC, DDDDDD, EEEEEE, FFFFFF and GGGGGG are the things i know, yet
        </h4>
      </div>
    )
  }
}
export default About
