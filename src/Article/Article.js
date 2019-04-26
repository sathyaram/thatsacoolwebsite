import "./Article.scss";
import React from "react";

const Article = props => {
  return (
    <article
      className={"website " + props.website.class}
      style={{ backgroundColor: `${props.website.color}` }}
    >
      <a
        className="website-wrapper"
        href={"http://" + props.website.link}
        target="_blank"
      />
      <div className="text-wrapper">
        <div class="text-collapsed">
          <div>
            <input
              className="category"
              type="text"
              list="cats"
              value={props.website.category}
            />
            <datalist id="cats">
              <option value="Functionality" />
              <option value="Web Design" />
              <option value="Agency" />
              <option value="Company" />
            </datalist>
            <input
              className="color logged-in"
              type="color"
              name="colorpicker"
              value={props.website.color}
            />
          </div>
        </div>
        <div className="text-shown">
          <input className="title" type="text" value={props.website.name} />
          <input className="link" type="text" value={props.website.link} />
        </div>
        <div className="text-collapsed">
          <textarea className="desc" type="text">
            {props.website.description}
          </textarea>
        </div>
      </div>
      <div className="controls logged-in">
        <button className="save">
          <i className="fas fa-save" />
        </button>
        <button className="edit">
          <i className="fas fa-edit" />
        </button>
        <button className="delete">
          <i className="fas fa-trash" />
        </button>
      </div>
    </article>
  );
};

export default Article;
