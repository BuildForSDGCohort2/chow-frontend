import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import Hero from './components/Hero';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container">
        <Hero />
        <Footer />
      </div>
    )
  }
}

export default App;
