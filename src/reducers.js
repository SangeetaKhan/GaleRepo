import { combineReducers } from 'redux';
import NewsApp from './containers/NewsApplication/HomePage/reducer';
import NewsArticles from './containers/NewsApplication/CategoryPage/reducer';

export default combineReducers({
  NewsApp,
  NewsArticles
});
