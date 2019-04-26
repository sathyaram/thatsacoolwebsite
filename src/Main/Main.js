import React, { Component } from "react";
import Article from "../Article/Article";
import "./Main.scss";
import myData from "./websites.json";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#ffffff",
      newColor: ""
    };
    // this.setState() {
    //   newColor :e.target.value
    // }
  }

  editText = () => {
    let edit = document.querySelector(".website");
    edit.classList.toggle("editable");
  };

  render() {
    return (
      <main>
        <div>
          {myData.map(website => (
            <Article website={website} newColor={this.state.newColor} />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
