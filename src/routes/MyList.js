import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getMovies } from '../actions';
import { PosterList } from '../components/index';
import '../css/MyList.css';
import '../css/NotFound.css';

class MyListRoute extends Component {
  componentDidMount() {
      this.props.getMovies();
    }

  render() {
    const { movies, localMovies } = this.props;
    return (
      <>
      { localMovies ? (
        <div className="myList--container">
          <PosterList movies={movies} localMovies={localMovies} listHeader="My List"/>
        </div>
        ) : (
          <div className="notFound">
            <p>Your list is empty</p>
          </div>
        )
      }
      </>
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
