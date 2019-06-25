import React, { Component } from "react";
import Article from "../Article/Article";
import "./Main.scss";
import myData from "./../websites.json";

class Main extends Component {

  editText = () => {
    let edit = document.querySelector(".website");
    edit.classList.toggle("editable");
  };

  randomize = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };



  render() {
    return (
      <main>
        <div>
          {this.randomize(myData.map((website, i) => (
            <Article edit={this.editText} key={i} website={website} />
          )))}
        </div>
      </main>
    );
  }
}

export default Main;
