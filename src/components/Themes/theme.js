import React, { Component } from 'react'
import Landing from '../../sections/Landing/landing'
import { themesList } from './themeslist'
import PropTypes from 'prop-types'
import RainFall from '../RainFall/rain'


class Theme extends Component{
  constructor(props){
    super(props)
    // const themesList = themesList
    // console.log(themesList)
    this.state = {
      theme: themesList[Math.floor(Math.random() * (themesList.length))]
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme(){
    let curName = this.state.theme.name
    let newThemeList = themesList.filter((th) => {
      return th.name !== curName
    })
    this.setState({
      theme: newThemeList[Math.floor(Math.random() * (newThemeList.length))]
    })
  }

  // static childContextTypes = {
  //   theme: PropTypes.any,
  //   changeTheme: PropTypes.func
  // }

  getChildContext(){
    return{
      theme: this.state.theme,
      changeTheme: this.changeTheme
    }
  }



  render(){
    const curTheme = this.state.theme
    return(
      <div className="theme">
        <style jsx="true">
          {`
            body {
              background-color: ${curTheme.background};
              body, h1, h2, h3, h4, h5, h6, p, ol, ul {
                color: ${curTheme.text}
              }
            }
          `}
        </style>
        <RainFall />
        <Landing />
      </div>
    )
  }
}


Theme.propTypes = {
  children: PropTypes.node
}

Theme.childContextTypes = {
  theme: PropTypes.any,
  changeTheme: PropTypes.func
}


export default Theme
