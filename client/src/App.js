import React, { Component } from 'react';

import NavMenu from './components/NavMenu'
import Routes from './Router';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        {Routes}
      </div>
    );
  }
}

export default App;