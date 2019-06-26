import './Article.scss';
import React from 'react';
import md5 from 'md5';

var API_URL = 'https://cdn.capture.techulus.in/';
var your_api_key = process.env.REACT_APP_API_KEY;
var your_api_secret = process.env.REACT_APP_API_SECRET;

const Article = props => {
  var input_url = encodeURIComponent('http://' + props.website.link);
  var options = 'delay=7&resizeWidth=400&resizeHeight=300';
  var full_url = input_url + '&' + options;
  var hash = md5(your_api_secret + 'url=' + full_url);

  // Image URL
  var result_img_url = API_URL + your_api_key + '/' + hash + '/image?url=' + full_url;

  return (
    <article className={'website ' + props.website.class ? props.website.class : ''} style={{ backgroundColor: `${props.website.color}` }}>
      <a className="website-wrapper" href={'http://' + props.website.link} target="_blank" rel="noopener noreferrer">
        <div className="eyebrow">
          <div className="category">{props.website.category}</div>
          <div className="link">{props.website.link}</div>
        </div>
        <div className="title">{props.website.name}</div>
        <div className="info">
          <div className="desc">{props.website.description}</div>
          <img className="image" src={result_img_url} alt={props.website.name} />
        </div>
      </a>
    </article>
  );
};

export default Article;
