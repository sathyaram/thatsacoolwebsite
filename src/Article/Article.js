import './Article.scss';
import React from 'react';
import md5 from 'md5';

var API_URL = 'https://cdn.capture.techulus.in/';
var your_api_key = 'b34b4019-be2c-4490-b1b8-37754f961037';
var your_api_secret = 'd5c31061-16a2-4c40-a58c-61ad8f732d29';

const Article = props => {
  var input_url = encodeURIComponent('http://' + props.website.link);
  var hash = md5(your_api_secret + 'url=' + input_url);

  // Image URL
  var result_img_url = API_URL + your_api_key + '/' + hash + '/image?url=' + input_url;

  return (
    <article className={'website ' + props.website.class} style={{ backgroundImage: `url(${result_img_url})` }}>
      <a className="website-wrapper" href={'http://' + props.website.link} target="_blank" rel="noopener noreferrer" />
      <div className="text-wrapper">
        <div className="text-above">
          <input className="category" type="text" list="cats" value={props.website.category} />
          <datalist id="cats">
            <option value="Functionality" />
            <option value="Web Design" />
            <option value="Agency" />
            <option value="Company" />
          </datalist>
          {/* <input
              className="color logged-in"
              type="color"
              name="colorpicker"
              value={props.website.color}
            /> */}
          <input className="link" type="text" value={props.website.link} />
        </div>
        <div className="text-shown">
          <input className="title" type="text" value={props.website.name} />
          <textarea className="desc" type="text" value={props.website.description} />
        </div>
        <div className="text-collapsed" />
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
