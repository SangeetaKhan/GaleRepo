import React,{ PropTypes, Component }from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import NewsPage from '../../../components/NewsPage';
import Category from '../../../components/NewsArticles';
import { connect } from 'react-redux';
import {
  fetchNewsArticles
} from './actions';

class CategoryPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchNewsArticles();
  }

  render() {
    const {news_articles} = this.props;
    return (
      <div className={s.root}>
        <Category news_articles={news_articles}/>
      </div>
    );
  }
}

CategoryPage.propTypes = {
  fetchNewsArticles: PropTypes.func,

};
const mapDispatchToProps = {
  fetchNewsArticles,
};
const mapStateToProps =({ NewsArticles }) =>  ({
  news_articles: NewsArticles.news_articles,
});

export default withStyles(s)(connect(mapStateToProps,mapDispatchToProps)(CategoryPage));
