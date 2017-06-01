import fetch from 'isomorphic-fetch';
import {
  FETCH_NEWS,
} from './constants.js';

const news_sources = 'https://newsapi.org/v1/sources?language=en';
export function fetchNews() {
  return async dispatch => {
    const resp = await fetch(news_sources);
    const dataPromise = await resp.json();
    const payload = await dataPromise;
      dispatch({
        type: FETCH_NEWS,
        payload,
      });
  };
}
