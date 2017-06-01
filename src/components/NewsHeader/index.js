import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
class Header extends Component {
constructor(props){
    super(props);
    this.state = {
      navListings: [{'Name': 'Articles Sources','isActive' : true},{'Name' : 'About','isActive' : false} ,{'Name':'Contact', 'isActive' : false},{'Name' :'Sign Out','isActive' : false}]
    }
  }

componentDidMount() {}

setActiveState = (navbar) => {
  const { navListings } = this.state;
  navListings.forEach(function(data){
    data.isActive = false;
  });
  navbar.isActive = true;
    this.setState ({
        navListings
    });
}

render() {
    const { news } = this.props;
    const { navListings } = this.state;
    return (
        <div className={s.container}>
          <div className = {s.navCont}>
            <ul className ={s.navList}>
            {navListings.map((navbars, i) =>
              <li key={i}><a  className = {navbars.isActive ? s.active : ''} onClick = {() => this.setActiveState(navbars)}>{navbars.Name}</a></li>
            )}
            </ul>
          </div>
            <div className={s.clearfix}></div>
        </div>
    );
  }
}

export default withStyles(s)(Header);
