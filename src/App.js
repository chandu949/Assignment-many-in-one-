import logo from './logo.svg';
import './App.css';
// import Quiz here

import React, { Component } from 'react';
import Form1 from './Components/Form1';
import Makeit from './Components/Makeit';
import Mapping from './Components/Mapping';
import Post from './Components/Post';
import Post12 from './Components/Post12';
import Counting from './Components/Counting';
import Counthooks from './Components/Counthooks';
import Counthooktwo from './Components/Counthooktwo';
import Hooks3 from './Components/Hooks3';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Hooks3 />
       
       {/* <Counthooktwo /> */}
        {/* {/* <Counting /> */}
       {/* <Counthooks />  */}

      </div>
    );
  }
}

export default App;


