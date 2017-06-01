import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import Header from '../NewsHeader';

class NewsPage extends Component {
constructor(props){
    super(props);
  }

componentDidMount() {}
render() {
    const {news} = this.props;
    return (
      <div className={`row ${s.newsCover}`}>
        <Header/>
        <div className={`col-xs-4 ${s.newsItems}`} >
        {news.map((news_sources, i) =>
          <div className ={ s.newsList} key={i}>
            <div className={s.newsInfo}>
                <h4>{news_sources.name}</h4>
                <p>{news_sources.description}</p>
                <button>Read More</button>
            </div>
          </div>

        )}
          </div>
          <div className={s.clearfix}/>
      </div>
    );
  }
}

export default withStyles(s)(NewsPage);
