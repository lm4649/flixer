import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getMovies } from '../actions';
import { PosterList } from '../components/index';
import '../css/MyList.css';

class MyListRoute extends Component {
  componentDidMount() {
      this.props.getMovies();
    }

  render() {
    return (
      <div className="myList--container">
        <PosterList movies={this.props.movies} localMovies={this.props.localMovies} listHeader="My List"/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { localMovies: state.movies.movies, movies: state.movies.movies }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMovies }, dispatch )
}

const MyList = connect(mapStateToProps,mapDispatchToProps)(MyListRoute);

export { MyList };
