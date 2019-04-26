import React, { Component } from 'react';
import Form from '../Form/Form';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="branding">
          <h2>i</h2>
          <h1>That's a<br></br> <span>Cool</span> <br></br>Website</h1>
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
          <a  className="addThis"> <i class="fas fa-plus"></i></a>
          <Form />
        </div>
      </header>
    );
  }
}

export default Header;