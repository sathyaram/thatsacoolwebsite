import React, { Component } from 'react';
import Article from '../Article/Article';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };
  }

  render() {
    return (
      <main>
        <div>
          <Article color={this.state.color} />
        </div>
      </main>
    );
  }
}

export default Main;