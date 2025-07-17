import React, { Component } from 'react';
import Loading from '../Loading';
import './Home.css';

import Card from './Card';

export default class Home extends Component {

  articles= [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page:1,
      totalResults: this.totalResults,
      pageSize: 20,
      category: this.props.Category,
    };
  }

  componentDidMount() {
    this.fetchArticles(this.state.page);
  }

  fetchArticles = async (page) => {
  const { pageSize } = this.state;
  const API_KEY = '2cf4f4032da54a67a623f83544daa7b7';  
  const {category} = this.state;

  try {
    

    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      articles: data.articles || [],
      totalResults: data.totalResults || 0,
      page,
      loading: false
    });

  } catch (error) {
    console.error("Failed to fetch articles", error);
    this.setState({ loading: false });
  }
};


  handleNext = () => {
  this.fetchArticles(this.state.page + 1);
};

handlePrevious = () => {
  this.fetchArticles(this.state.page - 1);
};


  render() {
    return (
      <div className='body'>
        <h1>{this.state.category} News</h1>
        {
          this.state.loading?<Loading />: ""
        }
        <div className="cards">
          {
            !this.state.loading && this.state.articles.map((element) => {
              return (
                <Card
                  key={element.url}
                  img={element.urlToImage}
                  title={element.title}
                  desc={element.description}
                  source={element.source.name}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              );
            })
          }
        </div>
        
        <div className='btns'>
          <button disabled={this.state.page<=1} onClick={this.handlePrevious}>&larr; Previous</button>
          <button 
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)}
          onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
