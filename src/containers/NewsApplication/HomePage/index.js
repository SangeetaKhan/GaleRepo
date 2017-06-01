import React,{ PropTypes, Component }from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import NewsPage from '../../../components/NewsPage';
import { connect } from 'react-redux';
import {
  fetchNews
} from './actions';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchNews();
  }
  render() {
    const { news } = this.props;
    return (
      <div className={s.root}>
        <NewsPage news={news}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  fetchNews: PropTypes.func,
  title: PropTypes.string.isRequired,

};
const mapDispatchToProps = {
  fetchNews,
};
const mapStateToProps =({ NewsApp }) =>  ({
  news: NewsApp.news,
});

export default withStyles(s)(connect(mapStateToProps,mapDispatchToProps)(HomePage));
