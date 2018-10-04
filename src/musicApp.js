import React, { Component } from 'react';
import {Logo} from './common/logo/Logo'
import InitSignin from './user/views/initSignin'

class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Logo></Logo>
          <h1 className="App-title">Welcome</h1>
        </header>
          <InitSignin></InitSignin>
      </div>
    );
  }
}

export default MusicApp;
