import {
  FETCH_NEWS
} from './constants';

export default function NewsApp(state = null, action) {
  if (state === null) {
    return {
      news: [],
    };
  }
  switch (action.type) {
    case FETCH_NEWS: {
      const payload = action.payload.sources;
      return {
        ...state,
        news:payload,
      };
    }
    default: {
      return state;
    }
  }
}
