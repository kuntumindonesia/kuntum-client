import React, { Component } from 'react'
import logo from './logo.svg'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Activities from './components/Activities'
import Snapshots from './components/Snapshots'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Activities />
        <Snapshots />
        <Contact />
      </div>
    )
  }
}

export default App
