import React from 'react';
import Layout from '../../../components/Layout';
import HomePage from '../../../containers/NewsApplication/HomePage';


const title = 'News Listing Page';

export default {

  path: '/news-list',

  action() {
    return {
      title,
      component: <HomePage title={title}/>,
    };
  },

};
