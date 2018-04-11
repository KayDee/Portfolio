import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import { PROJECTS } from './projectlist'

class DisplayProjects extends Component{

  static contextTypes = {
    theme: PropTypes.any
  }



  render(){
    // let children = ''
    // for(el in PROJECTS){
    //   <div className="proj">
    //     <h2>{el.name}</h2>
    //     <h4>{el.desc}</h4>
    //     {el.icons}
    //     <a href={el.link}>Visit</a>
    //   </div>
    // }

    return(
      <div className="display-projects" style={{color: this.context.theme.background}}>
        {
          PROJECTS.map(el => {
            return <div className="proj" style={{backgroundColor: this.context.theme.text}}>
            <h2>{el.name}</h2>
            <h4>{el.desc}</h4>
            <div className="proj-icons-wrap">
              {el.icons}
            </div>
            <a href={el.link} target="_blank">Visit</a>
            </div>
          })
        }
          <style>
            {`
              .proj{
                box-shadow: 2px 2px 5px 0px ${this.context.theme.shadowDark};
              }
              .proj:hover{
                box-shadow: 5px 5px 9px 0px ${this.context.theme.shadowLight};
              }
              svg{
                fill: ${this.context.theme.background};
              }
              a:after{
                background-color: ${this.context.theme.background};
              }
            `}
          </style>
      </div>
    )
  }
}

export default DisplayProjects
