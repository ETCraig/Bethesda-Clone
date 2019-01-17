import React, { Component } from 'react';

import NavMenu from './components/NavMenu'
import Landing from './components/landing/Landing';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div style={{maxWidth: '100vw'}}>
        <NavMenu />
        <Landing />
      </div>
    );
  }
}

export default App;
