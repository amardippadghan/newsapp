import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-Current News`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8966cfb813eb458d9a3b432600a79451&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
    console.log(this.state.totalResults / this.state.pageSize);
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8966cfb813eb458d9a3b432600a79451&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // this.setState({
    //   articles: parsedata.articles,
    //   totalResults: parsedata.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  handleprevclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&page=${this.state.page - 1}&category=${
    //   this.props.category
    // }&apiKey=8966cfb813eb458d9a3b432600a79451&page=1&pageSize=${
    //   this.props.pageSize
    // }`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedata = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handlenextclick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.state.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px" }}>
          Current News Top Headlines On
          <br /> {this.capitalizeFirstLetter(this.props.category)}
        </h1>
        {this.state.loading && <Spiner />}
        <div className="row">
          {this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between">
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
        </div>
      </div>
    );
  }
}

export default News;
