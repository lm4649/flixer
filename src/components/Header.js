import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to={{pathname:"/"}}>
          <FontAwesome className="header--movie" name="film" size="5x"/>
        </Link>
        <h3>FLIXER</h3>
        <FontAwesome className="header--heart" name="heart" size="5x"/>
        <div className="header--badge">{this.props.badge}</div>
      </div>
    );
  }
}

export { Header };
