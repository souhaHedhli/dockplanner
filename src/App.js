import React, {Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import NavBar from './components/shared/nav-bar/nav-bar.js';

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
      </Container>
    );
  }
}

export default App;
