import React from 'react';
import Layout from '../../../components/Layout';
import CategoryPage from '../../../containers/NewsApplication/CategoryPage';


const title = 'News Details Page';

export default {

  path: '/news-articles',

  action() {
    return {
      title,
      component: <CategoryPage title={title}/>,
    };
  },

};
