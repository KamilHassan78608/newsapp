import React, { Component } from 'react';
import './Home.css';

import Card from './Card';

export default class Home extends Component {

  articles= [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    try {
      const url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=2cf4f4032da54a67a623f83544daa7b7";
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles });
    } catch (error) {
      console.error("Failed to fetch articles", error);
    }
  };

  render() {
    return (
      <div className='body'>
        <h1>Breaking News</h1>
        <div className='container'>
          {
            this.state.articles.map((element) => {
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
      </div>
    );
  }
}
