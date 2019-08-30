import React, { Component } from "react";
import Article from "../Article/Article";
import myData from "./../websites.json";
import "./Main.scss";

class Main extends Component {

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

  /** returns AoA */
  splitColumns(array) {
    const numberOfColumns = 3;
    const numberOfRows = Math.ceil(array.length / numberOfColumns);
    const AoA = [];

    for (let i = 0; i < numberOfColumns; i++) {
      const beginIdx = i * numberOfRows;
      const endIdx = ((i + 1) * numberOfRows > array.length) ? null : (i + 1) * numberOfRows;

      let col;
      if (endIdx == null)
        col = array.slice(beginIdx);
      else
        col = array.slice(beginIdx, endIdx);

      AoA.push(col);
    }

    return AoA;
  }

  render() {
    let filterData = myData;
    if (this.props.selectedCategories.length > 0) {
      filterData = myData.filter((w) => this.props.selectedCategories.includes(w.category));
    }
    const splitData = this.splitColumns(this.randomize(filterData));
    return (
      <main>
        {
          splitData.map(i => {
            return (
              <div class="col">
                {
                  i.map((i, idx) => {
                    return (
                      <Article key={idx} website={i} />
                    );
                  })
                }
              </div>
            )
          })
        }
      </main>
    );
  }
}

export default Main;
