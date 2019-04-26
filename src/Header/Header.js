import React, { Component } from 'react';
import Form from '../Form/Form';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>i</h1>
          <h2>That's a Cool Website</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Login</a> 
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
          </ul>
        </nav>
        <div className="addWebsite">
          <a href="#" className="addThis"> <i class="fas fa-plus"></i></a>
          <Form />
        </div>
      </header>
    );
  }
}

export default Header;