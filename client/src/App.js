import React, { Component } from 'react';

import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu'
import Routes from './Router';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        {Routes}
        <Footer />
      </div>
    );
  }
}

export default App;