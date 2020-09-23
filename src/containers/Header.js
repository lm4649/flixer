import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getNumber } from '../actions';
import '../css/Header.css';

class HeaderComponent extends Component {

  componentDidMount() {
    this.props.getNumber();
  }

  render() {
    const activate = this.props.badge > 0 && !this.props.currentUrl.includes('player');
    const iconClass = activate ? "header--movie" : "header--movie inactive";
    const linkStyle = activate ? { position: "relative" } : { position: "relative", pointerEvents: "none" };
    return (
      <div className="header">
        <Link to={{pathname:"/"}}>
          <h3 className="header--brand">FLIXER</h3>
        </Link>
        <Link to={{pathname: "/player"}} style={linkStyle}>
          <FontAwesome className={iconClass} name="film" size="5x">
            <div className="header--badge">{this.props.badge}</div>
          </FontAwesome>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { badge: state.movies.number }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getNumber }, dispatch )
}

const Header = connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);

export { Header };
