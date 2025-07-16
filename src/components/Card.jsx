import React from 'react'

import './Card.css';

export default function Card(props) {

  return (
    <div className="news-card">
      <img src={props.img?props.img:"https://media.cnn.com/api/v1/images/stellar/prod/2025-07-15t183420z-1567021859-rc26nfaiywdp-rtrmadp-3-usa-trump-justice.JPG?c=16x9&q=w_800,c_fill"} alt={props.title} className="news-image" />
      <div className="news-content">
        <span className="news-source">{props.source}</span>
        <h3 className="news-title">{props.title}</h3>
        <p className="news-description">{props.desc?props.desc:"American squad celebrates team performance that ended with cycling's biggest prize"}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="read-more">Read More →</a>
        <div className="news-meta">
          <small>{props.author}</small><br />
          • <small>{props.date}</small>
        </div>
      </div>
    </div>
  );
}
