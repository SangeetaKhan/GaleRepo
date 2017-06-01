import fetch from 'isomorphic-fetch';
import {
  FETCH_NEWS_ARTICLES,
} from './constants.js';

const news_articles = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=893f37b43b5944b8b8f526797c030bfc';
export function fetchNewsArticles() {
  return async dispatch => {
    const resp = await fetch(news_articles);
    const dataPromise = await resp.json();
    const payload = await dataPromise;
      dispatch({
        type: FETCH_NEWS_ARTICLES,
        payload,
      });
  };
}
