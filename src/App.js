import React, { Component,Fragment } from 'react';
import Header from './components/header'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline>
          <Header></Header>
        </CssBaseline>        
      </Fragment>
    );
  }
}

export default App;
