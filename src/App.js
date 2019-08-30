import React, { Component } from "react";
import "./Globals.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";

class App extends Component {
  state = {
    selectedCategories: []
  }

  categoryChanged = (selections) => {
    this.setState({
      selectedCategories: selections
    })
  }

  render() {
    return (
      <>
        <Header categoryChanged={this.categoryChanged}/>
        <Main selectedCategories={this.state.selectedCategories}/>
      </>
    );
  }
}

export default App;
