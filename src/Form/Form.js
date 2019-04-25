import React, { Component } from 'react';

import './Form.scss'

class Form extends Component {
  render() {
    return (
      <form id="itemform" action="" method="post">
        {/* <h3>Create A New It.em</h3> */}
        <div class="top-text">
          <input type="text" placeholder="Title" name="titlefield" id="titlefield"></input>
          <input type="text" placeholder="Link" name="linkfield" id="linkfield"></input>
        </div>
        <div class="categorycolor">
          <input type="text" list="cats" placeholder="Create or pick a Category" name="categoryfield" id="categoryfield"></input>
          <datalist id="cats">
              <option value="Functionality">
              </option><option value="Web Design">
              </option><option value="Agency">
              </option><option value="Company">
          </option></datalist>
          <input type="color" id="colorpicker" name="colorpicker" value="#7ad1e1" alt-text="Pick A Color">
          </input>
        </div>
        <textarea placeholder="Describe what makes it dope" id="descriptionfield"></textarea>
        <br></br>
        <button id="submititem">Submit</button>
        <div id="submit-message">It.em Added!</div>
    </form>
    );
  }
}

export default Form;