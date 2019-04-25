import React, { Component } from 'react';
import './Article.scss';
import myData from './websites.json';

class Article extends Component {

  editText = () => {
    let edit = document.querySelector(".website");
    edit.classList.toggle("editable");
  };

  render() {
    return (
      myData.map(website => (
      <article className={'website ' + website.class} style={{backgroundColor:`${website.color}`}}>
        <a className="website-wrapper" href={'http://' + website.link} target="_blank" ></a>
        <div className="text-wrapper">
            <div class="text-collapsed">
              <div>
                <input className="category" type="text" list="cats" value={website.category}></input>
                  <datalist id="cats">
                    <option value="Functionality"></option>
                    <option value="Web Design"></option>
                    <option value="Agency"></option>
                    <option value="Company"></option>
                  </datalist>
                <input className="color logged-in" type="color" name="colorpicker" value={website.color}></input>
              </div>
            </div>
            <div className="text-shown">
              <input className="title" type="text" value={website.name}></input>
              <input className="link" type="text" value={website.link}></input>
            </div>
            <div className="text-collapsed">
              <textarea className="desc" type="text">{website.description}</textarea> 
            </div>
        </div>
        <div className="controls logged-in">
            <button className="save"><i className="fas fa-save"></i></button>
            <button className="edit" onClick={this.editText}><i className="fas fa-edit"></i></button>
            <button className="delete"><i className="fas fa-trash"></i></button>
        </div>
      </article>
      ))
    );
  }
}

export default Article;