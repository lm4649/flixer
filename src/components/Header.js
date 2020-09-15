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
    return (
      <div className="header">
        <Link to={{pathname:"/"}}>
          <h3 className="header--brand">FLIXER</h3>
        </Link>
        { this.props.badge > 0 ?
          (
            <Link to={{pathname: "/player"}}>
              <FontAwesome className="header--movie" name="film" size="5x"/>
            </Link>
          ) :
          (
             <FontAwesome className="header--movie inactive" name="film" size="5x"/>
          )
        }
        <div className="header--badge">{this.props.badge}</div>
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
