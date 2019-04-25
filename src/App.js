import React, { Component } from 'react';
// import logo from './logo.svg';
import './Globals.scss';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      name: 'name',
      url: 'url',
      image: 'image'
    };
  }
  render() {
    return (
      <div className="page">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
