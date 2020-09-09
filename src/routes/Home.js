import React, { Component } from 'react';
import { HeaderImg, SearchBar, PosterList, LoadButton } from '../components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getMovies } from '../actions';

class HomeRoute extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { mTitle, mDesc, image, movies, loading } = this.props;

    return (
      <div>
        <HeaderImg
          title={mTitle}
          overview={mDesc}
          imgSrc={image}
        />
        <SearchBar onSearchClick={this.props.onSearchClick} />
        <PosterList movies={movies} localMovies={this.props.localMovies} />
        <LoadButton onButtonClick={this.props.onButtonClick} loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { localMovies: state.movies.movies }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMovies }, dispatch )
}

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeRoute);


export { Home };
