import React, { Component } from 'react'
// import Landing from './sections/Landing/landing'
import Theme from './components/Themes/theme'
// import logo from './logo.svg';
import './styles/App.sass'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Theme />
      </div>
    )
  }
}

export default App;
