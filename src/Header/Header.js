import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {

  constructor(props) {
    super(props)
    this.selections = [];
  }

  collectSelections = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    let valueIndex = this.selections.indexOf(value);

    if (checked) {
      if (valueIndex === -1) {
        this.selections.push(value);
      }
    } else {
      if (valueIndex !== -1) {
        // removing element at location of valueIndex
        this.selections.splice(valueIndex, 1);
      }
    }
    this.props.categoryChanged(this.selections);
  }

  render() {
    return (
      <header>
        <div className="branding">
          <a href="/" className="home">
            <h1>That's a<br></br> 
            <div className="logo">Cool</div> <br></br>Website
            </h1>
          </a>
          <h2>A Collection of Cool Websites</h2>
        </div>
        <div className="filter">
          <div className="filterTitle">
            Filter
          </div>
          <label>
            <input type="checkbox" name="Developer" value="Developer" onChange={this.collectSelections} />
            Developer
          </label>
          <label>
            <input type="checkbox" name="Designer" value="Designer" onChange={this.collectSelections} />
            Designer
          </label>
          <label>
            <input type="checkbox" name="Agency" value="Agency" onChange={this.collectSelections} />
            Agency
          </label>
          <label>
            <input type="checkbox" name="Service" value="Service" onChange={this.collectSelections} />
            Service
          </label>
          <label>
            <input type="checkbox" name="Media" value="Media" onChange={this.collectSelections} />
            Media
          </label>
        </div>
      </header>
    );
  }
}

export default Header;