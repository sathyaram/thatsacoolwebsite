import React, { Component } from "react";
import Article from "../Article/Article";
import "./Main.scss";
import myData from "./../websites.json";

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
    const numberOfColumns = 4;
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
    const newBiglyDatas = this.splitColumns(myData);
    return (
      <main>
        {
          newBiglyDatas.map(i => {
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
        {/* {this.randomize(myData.map((website, i) => (
            <Article edit={this.editText} key={i} website={website} />
          )))} */}
      </main>
    );
  }
}

export default Main;
