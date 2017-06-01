import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import Link from '../Link'

class Header extends Component {
constructor(props){
    super(props);
  }

componentDidMount() {}

render() {
    const {news} = this.props;
    return (
        <div className={s.container}>
          <div >
            <Link className = {s.linkTo} to ="/news-list">Back To Sources </Link>
          </div>
        </div>
    );
  }
}

export default withStyles(s)(Header);
