import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'
// import ScrollToNext from '_components/ScrollToNext/scrolltonext'
import DisplayProjects from '_components/DisplayProjects/displayprojects'

class Projects extends Component{

  static contextTypes = {
    theme: PropTypes.any
  }



  render(){
    return(
      <div className="projects-page" style={{color: this.context.theme.text}}>
        <div className="projects-main">
          <h1>Projects</h1>
          <DisplayProjects />
        </div>
        <footer>
          <span>Made By</span>
          KD 2018
        </footer>
        <style>
          {`
            footer {
              position: absolute;
              bottom: 0;
              width: 100%;
              text-align: center;
              margin: 0 0 5px 0;
              color: rgba(0, 0, 0, 0.4);
              font-family: Ubuntu;
              font-size: 0.7em;
            }
            footer span {
              display: block;
              font-size: 0.5em;
              color: rgba(0, 0, 0, 0.2);
              text-transform: uppercase;
              margin-bottom: 3px;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Projects
