import React, { Component } from 'react';
import Form from '../Form/Form';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>   
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Login</a> 
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
        <div>
          <h1>inspired.<span>af</span></h1>
          <h2>Your Web, One Place.</h2>
        </div>
        <Form />
      </header>
    );
  }
}

export default Header;