import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import Header from '../ArticlesHeader';

class Category extends Component {
constructor(props){
    super(props);
  }

componentDidMount() {}

render() {
    const {news_articles} = this.props;
    return (
      <div className={`row ${s.newsArticleCover}`}>
      <Header/>
        <div className={`col-xs-4 ${s.newsArticles}`}>
        {news_articles.map((articles, i) =>
          <div className={`col-xs-4 ${s.newsList}`} key={i}>
            <div className={`col-xs-12 ${s.newsArticlesInfo}`}>
              <img src={articles.urlToImage} height="200"/>
                <h4>{articles.name}</h4>
                <p>{articles.description}</p>
                <div className ={s.moredet}><a href ={articles.url} target="blank">More Details</a></div>
            </div>
          </div>
        )}
        <div className ={s.clearfix}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Category);
