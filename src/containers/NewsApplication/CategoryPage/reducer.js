import {
  FETCH_NEWS_ARTICLES,
} from './constants';

export default function NewsArticles(state = null, action) {
  if (state === null) {
    return {
      news_articles: [],
    };
  }

  switch (action.type) {
    case FETCH_NEWS_ARTICLES: {
      const payload = action.payload.articles;
      return {
        ...state,
        news_articles:payload,
      };
    }

    default: {
      return state;
    }
  }
}
