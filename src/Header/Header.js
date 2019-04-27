import React, { Component } from 'react';
import Form from '../Form/Form';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="branding">
          <a href="/" className="home">
          <h1>That's a<br></br> <div className="logo">Cool</div> <br></br>Website</h1>
          </a>
          <p>A Curated Collection of Agency & Portfolio Websites</p>
        </div>
        {/* <nav>
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
        </nav> */}
        {/* <div className="addWebsite">
          <a  className="addThis"> <i class="fas fa-plus"></i></a>
          <Form />
        </div> */}
      </header>
    );
  }
}

export default Header;