import React from "react";

const NewsItem = (props) => {
  let { title, discription, imgUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <span className="badge badge-pill badge-danger">source : {source}</span>
      <div className="card">
        <img
          src={
            !imgUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt=" Loading"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
          <p className="card-text">
            published by {!author ? "Unknown" : author}
          </p>

          <p className="card-text">on {new Date(date).toGMTString()}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
