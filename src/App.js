import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePallete } from './colorHelpers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Palette pallete={generatePallete(seedColors[4])} />
      </div>
    );
  }
}

export default App;
