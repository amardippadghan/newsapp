import React from "react";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, settotalReasult] = useState(0);
  // document.title = `${capitalizeFirstLetter(props.category)}-Current News`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8966cfb813eb458d9a3b432600a79451&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();

    setarticals(parsedata.articles);
    settotalReasult(parsedata.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);
  const handleprevclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&page=${this.state.page - 1}&category=${
    //   props.category
    // }&apiKey=8966cfb813eb458d9a3b432600a79451&page=1&pageSize=${
    //   props.pageSize
    // }`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedata = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading: false,
    // });
    setPage(page - 1);
    updateNews();
  };
  const handlenextclick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.state.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${
    //     this.state.page + 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
    setPage(page + 1);
    updateNews();
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8966cfb813eb458d9a3b432600a79451&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedata = await data.json();

    setarticals(articles.concat(parsedata.concat));
    settotalReasult(parsedata.totalResults);
    setLoading(false);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "40px" }}>
        Current News Top Headlines On
        <br /> {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spiner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    discription={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevclick}
            disabled={this.state.page <= 1}
          >
            &laquo; privious
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
          >
            next &raquo;
          </button>
        </div> */}
    </div>
  );
};

export default News;

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
