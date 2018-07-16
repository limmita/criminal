import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap.js' 
import vor from './bd.js';







class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleMap expl = {vor} />
      </div>
    );
  }
}

export default App;
