import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper />
        </div>
      </Router>
    );
  }
}

export default App;
